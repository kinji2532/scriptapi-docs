import { Version } from "./fetchVersion";
import { execSync } from "child_process";
import * as dotenv from "dotenv";
import { applyStatsCollection, generateDocsIndexPage, generateDocsUsingWorkers } from "./docsPages";
import { installBundle, installModule } from "./installModules";
import { existsSync, mkdirSync, rmSync } from "fs";
import { modifyExampleDocsSnippets } from "./snippetsEditor";

dotenv.config();

const scriptModules = [
  "@minecraft/server",
  "@minecraft/server-ui",
  "@minecraft/server-net",
  "@minecraft/server-admin",
  "@minecraft/server-gametest",
  "@minecraft/server-editor",
  "@minecraft/common",
];

const bundleModules = [
  "@minecraft/vanilla-data",
];

const statsCollectEnabled = true;

async function installModules(modules: string[], installFunction: (module_name: string, version: string) => Promise<void>, version: string) {
  const installPromises = modules.map(async (module_name) => {
    try {
      await installFunction(module_name, version);
    } catch (error) {
      console.warn(`Failed to install ${module_name}@${version}.\n`, error);
    }
  });

  await Promise.all(installPromises);
}

async function installScriptModules (version: Version) {
  console.log("Generating documentation for version " + version + "...");

  // remove existing types for that version only
  rmSync("./lib/" + version, { recursive: true, force: true, maxRetries: 3 });

  await Promise.all([
    installModules(scriptModules, installModule, version),
    // ignore @minecraft/vanilla-data for now
    installModules(bundleModules, installBundle, version),
  ]);    
  
  console.log("Successfully retrieved all modules.");
};


async function generate_documentation(rebuild: boolean = true) {
  // otherwise if input has no version, it only builds the docs from existing types in lib folder
  if (rebuild) console.log("No version specified. Rebuilding the entire documentation...");

  generateDocsIndexPage("./docs/index.md");
  console.log("Successfully generated index page.");
  
  console.log(execSync("npm run docs:build").toString());
  console.log("Successfully built docs at ./docs/.vuepress/dist");

  await generateDocsUsingWorkers();
  
  if (statsCollectEnabled) {
    console.log("Applying stats collection to website.");
    const successCount = applyStatsCollection();
    console.log(`Successfully applied stats collection to ${successCount} pages.`);
  };
  
  console.log("Successfully generated documentation.");
};

async function main () {
  const versions = typeof process.env.VERSION === "string" ? process.env.VERSION.split(/\s/) as Version[] : [] as Version[];
  if (!existsSync("./lib")) mkdirSync("./lib");

  // Check if the version is valid against schema, if so download the types and generate docs for that specific version
  // If version input exist but it's not valid, it throws error
  for (const version of versions) {
    if (/^\d+\.\d+\.\d+(\.\d+)?$/.test(version)) {
      await installScriptModules(version);

      for (const module_name of scriptModules) {
        modifyExampleDocsSnippets(module_name, version);
      }
    }
    else if (!!version) throw new Error(`Invalid version: ${version}. Accept '0.0.0' for stable, '0.0.0.0' for preview.`);
  }

  await generate_documentation(versions.length === 0);
};

main();