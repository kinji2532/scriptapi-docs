// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "1.8.0-internal.1.20.50-preview.20"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
/**
 * @beta
 */
export enum BlockComponentTypes {
    Inventory = 'minecraft:inventory',
    LavaContainer = 'minecraft:lavaContainer',
    Piston = 'minecraft:piston',
    PotionContainer = 'minecraft:potionContainer',
    RecordPlayer = 'minecraft:recordPlayer',
    Sign = 'minecraft:sign',
    SnowContainer = 'minecraft:snowContainer',
    WaterContainer = 'minecraft:waterContainer',
}

/**
 * @beta
 * Description of the resulting intersection test on two
 * BlockVolume objects
 */
export enum BlockVolumeIntersection {
    /**
     * @beta
     * @remarks
     * Volume B has no intersection points with Volume A
     *
     */
    Disjoint = 0,
    /**
     * @beta
     * @remarks
     * Volume B resides completely inside Volume A
     *
     */
    Contains = 1,
    /**
     * @beta
     * @remarks
     * Volume B partially intersects Volume A
     *
     */
    Intersects = 2,
}

/**
 * @beta
 * The Action enum determines how the CompoundBlockVolume
 * considers the associated CompoundBlockVolumeItem when
 * performing inside/outside calculations.
 */
export enum CompoundBlockVolumeAction {
    /**
     * @beta
     * @remarks
     * The associated BlockVolume is considered a positive space,
     * and any intersection tests are considered hits
     *
     */
    Add = 0,
    /**
     * @beta
     * @remarks
     * The associated BlockVolume is considered a negative or void
     * space, and any intersection tests are considered misses.
     * Using the Subtract action, it is possible to `punch holes`
     * in block volumes so that any intersection tests may pass
     * through such spaces
     *
     */
    Subtract = 1,
}

/**
 * @beta
 * An enum describing the relativity of the
 * CompoundBlockVolumeItem, relative to the parent
 * CompoundVolume.
 */
export enum CompoundBlockVolumePositionRelativity {
    /**
     * @beta
     * @remarks
     * The locations within the associated BlockVolume are relative
     * to the CompoundBlockVolume to which they were added
     *
     */
    Relative = 0,
    /**
     * @beta
     * @remarks
     * The locations within the associated BlockVolume are in
     * absolute world space
     *
     */
    Absolute = 1,
}

/**
 * @beta
 */
export enum Difficulty {
    Peaceful = 0,
    Easy = 1,
    Normal = 2,
    Hard = 3,
}

/**
 * @beta
 * A general purpose relative direction enumeration.
 */
export enum Direction {
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} beneath (y - 1) of this item.
     *
     */
    Down = 'Down',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the east (x + 1) of this item.
     *
     */
    East = 'East',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the east (z + 1) of this item.
     *
     */
    North = 'North',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the south (z - 1) of this item.
     *
     */
    South = 'South',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} above (y + 1) of this item.
     *
     */
    Up = 'Up',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the west (x - 1) of this item.
     *
     */
    West = 'West',
}

/**
 * @beta
 * Specifies a mechanism for displaying scores on a scoreboard.
 */
export enum DisplaySlotId {
    /**
     * @beta
     * @remarks
     * Displays the score below the player's name.
     *
     */
    BelowName = 'BelowName',
    /**
     * @beta
     * @remarks
     * Displays the score as a list on the pause screen.
     *
     */
    List = 'List',
    /**
     * @beta
     * @remarks
     * Displays the score on the side of the player's screen.
     *
     */
    Sidebar = 'Sidebar',
}

/**
 * @beta
 * Specifies different colors for use as dye.
 */
export enum DyeColor {
    /**
     * @beta
     * @remarks
     * Black dye color.
     *
     */
    Black = 'Black',
    /**
     * @beta
     * @remarks
     * Blue dye color.
     *
     */
    Blue = 'Blue',
    /**
     * @beta
     * @remarks
     * Brown dye color.
     *
     */
    Brown = 'Brown',
    /**
     * @beta
     * @remarks
     * Cyan dye color.
     *
     */
    Cyan = 'Cyan',
    /**
     * @beta
     * @remarks
     * Gray dye color.
     *
     */
    Gray = 'Gray',
    /**
     * @beta
     * @remarks
     * Green dye color.
     *
     */
    Green = 'Green',
    /**
     * @beta
     * @remarks
     * Light blue dye color.
     *
     */
    LightBlue = 'LightBlue',
    /**
     * @beta
     * @remarks
     * Lime dye color.
     *
     */
    Lime = 'Lime',
    /**
     * @beta
     * @remarks
     * Magenta dye color.
     *
     */
    Magenta = 'Magenta',
    /**
     * @beta
     * @remarks
     * Orange dye color.
     *
     */
    Orange = 'Orange',
    /**
     * @beta
     * @remarks
     * Pink dye color.
     *
     */
    Pink = 'Pink',
    /**
     * @beta
     * @remarks
     * Purple dye color.
     *
     */
    Purple = 'Purple',
    /**
     * @beta
     * @remarks
     * Red dye color.
     *
     */
    Red = 'Red',
    /**
     * @beta
     * @remarks
     * Silver dye color.
     *
     */
    Silver = 'Silver',
    /**
     * @beta
     * @remarks
     * White dye color.
     *
     */
    White = 'White',
    /**
     * @beta
     * @remarks
     * Yellow dye color.
     *
     */
    Yellow = 'Yellow',
}

/**
 * @beta
 */
export enum EasingType {
    InBack = 'InBack',
    InBounce = 'InBounce',
    InCirc = 'InCirc',
    InCubic = 'InCubic',
    InElastic = 'InElastic',
    InExpo = 'InExpo',
    InOutBack = 'InOutBack',
    InOutBounce = 'InOutBounce',
    InOutCirc = 'InOutCirc',
    InOutCubic = 'InOutCubic',
    InOutElastic = 'InOutElastic',
    InOutExpo = 'InOutExpo',
    InOutQuad = 'InOutQuad',
    InOutQuart = 'InOutQuart',
    InOutQuint = 'InOutQuint',
    InOutSine = 'InOutSine',
    InQuad = 'InQuad',
    InQuart = 'InQuart',
    InQuint = 'InQuint',
    InSine = 'InSine',
    Linear = 'Linear',
    OutBack = 'OutBack',
    OutBounce = 'OutBounce',
    OutCirc = 'OutCirc',
    OutCubic = 'OutCubic',
    OutElastic = 'OutElastic',
    OutExpo = 'OutExpo',
    OutQuad = 'OutQuad',
    OutQuart = 'OutQuart',
    OutQuint = 'OutQuint',
    OutSine = 'OutSine',
    Spring = 'Spring',
}

/**
 * @beta
 */
export enum EntityComponentTypes {
    AddRider = 'minecraft:addrider',
    Ageable = 'minecraft:ageable',
    Breathable = 'minecraft:breathable',
    CanClimb = 'minecraft:can_climb',
    CanFly = 'minecraft:can_fly',
    CanPowerJump = 'minecraft:can_power_jump',
    Color = 'minecraft:color',
    Equippable = 'minecraft:equippable',
    FireImmune = 'minecraft:fire_immune',
    FloatsInLiquid = 'minecraft:floats_in_liquid',
    FlyingSpeed = 'minecraft:flying_speed',
    FrictionModifier = 'minecraft:friction_modifier',
    GroundOffset = 'minecraft:ground_offset',
    Healable = 'minecraft:healable',
    Health = 'minecraft:health',
    Inventory = 'minecraft:inventory',
    IsBaby = 'minecraft:is_baby',
    IsCharged = 'minecraft:is_charged',
    IsChested = 'minecraft:is_chested',
    IsDyeable = 'minecraft:is_dyeable',
    IsHiddenWhenInvisible = 'minecraft:is_hidden_when_invisible',
    IsIgnited = 'minecraft:is_ignited',
    IsIllagerCaptain = 'minecraft:is_illager_captain',
    IsSaddled = 'minecraft:is_saddled',
    IsShaking = 'minecraft:is_shaking',
    IsSheared = 'minecraft:is_sheared',
    IsStackable = 'minecraft:is_stackable',
    IsStunned = 'minecraft:is_stunned',
    IsTamed = 'minecraft:is_tamed',
    Item = 'minecraft:item',
    LavaMovement = 'minecraft:lava_movement',
    Leashable = 'minecraft:leashable',
    MarkVariant = 'minecraft:mark_variant',
    MountTaming = 'minecraft:tamemount',
    Movement = 'minecraft:movement',
    MovementAmphibious = 'minecraft:movement.amphibious',
    MovementBasic = 'minecraft:movement.basic',
    MovementFly = 'minecraft:movement.fly',
    MovementGeneric = 'minecraft:movement.generic',
    MovementGlide = 'minecraft:movement.glide',
    MovementHover = 'minecraft:movement.hover',
    MovementJump = 'minecraft:movement.jump',
    MovementSkip = 'minecraft:movement.skip',
    MovementSway = 'minecraft:movement.sway',
    NavigationClimb = 'minecraft:navigation.climb',
    NavigationFloat = 'minecraft:navigation.float',
    NavigationFly = 'minecraft:navigation.fly',
    NavigationGeneric = 'minecraft:navigation.generic',
    NavigationHover = 'minecraft:navigation.hover',
    NavigationWalk = 'minecraft:navigation.walk',
    OnFire = 'minecraft:onfire',
    PushThrough = 'minecraft:push_through',
    Rideable = 'minecraft:rideable',
    Riding = 'minecraft:riding',
    Scale = 'minecraft:scale',
    SkinId = 'minecraft:skin_id',
    Strength = 'minecraft:strength',
    Tameable = 'minecraft:tameable',
    UnderwaterMovement = 'minecraft:underwater_movement',
    Variant = 'minecraft:variant',
    WantsJockey = 'minecraft:wants_jockey',
}

/**
 * @beta
 * Describes the source of damage from an Entity.
 */
export enum EntityDamageCause {
    /**
     * @beta
     * @remarks
     * Damage caused by a falling anvil.
     *
     */
    anvil = 'anvil',
    /**
     * @beta
     * @remarks
     * Damage caused from a non-Entity explosion. For example, an
     * exploding bed.
     *
     */
    blockExplosion = 'blockExplosion',
    campfire = 'campfire',
    /**
     * @beta
     * @remarks
     * Unused.
     *
     */
    charging = 'charging',
    /**
     * @beta
     * @remarks
     * Damage caused by physically touching an Entity or Block. For
     * example, touching a Sweet Berry bush or Pufferfish.
     *
     */
    contact = 'contact',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity being out of air and inside a
     * liquid block.
     *
     */
    drowning = 'drowning',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity attack.
     *
     */
    entityAttack = 'entityAttack',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity explosion. For example, a Creeper
     * or Wither.
     *
     */
    entityExplosion = 'entityExplosion',
    /**
     * @beta
     * @remarks
     * Damage caused by falling onto the ground.
     *
     */
    fall = 'fall',
    /**
     * @beta
     * @remarks
     * Damage caused by falling blocks. Note: Anvils and
     * Stalactites have their own damage causes.
     *
     */
    fallingBlock = 'fallingBlock',
    /**
     * @beta
     * @remarks
     * Damage caused by catching on fire.
     *
     */
    fire = 'fire',
    /**
     * @beta
     * @remarks
     * Damage caused by burning over time.
     *
     */
    fireTick = 'fireTick',
    /**
     * @beta
     * @remarks
     * Damage caused by fireworks.
     *
     */
    fireworks = 'fireworks',
    /**
     * @beta
     * @remarks
     * Damage caused by flying into a wall at high speed while
     * gliding with Elytra.
     *
     */
    flyIntoWall = 'flyIntoWall',
    /**
     * @beta
     * @remarks
     * Damage caused by staying inside a Powder Snow block.
     *
     */
    freezing = 'freezing',
    /**
     * @beta
     * @remarks
     * Damage caused by touching a Lava block.
     *
     */
    lava = 'lava',
    /**
     * @beta
     * @remarks
     * Damage caused by being struck by lightning.
     *
     */
    lightning = 'lightning',
    /**
     * @beta
     * @remarks
     * Damage caused by magical attacks. For example, Evoker Fang
     * or Conduit Block.
     *
     */
    magic = 'magic',
    /**
     * @beta
     * @remarks
     * Damage caused by touching a Magma block.
     *
     */
    magma = 'magma',
    /**
     * @beta
     * @remarks
     * Damage caused by no source. For example, from a command or
     * script.
     *
     */
    none = 'none',
    /**
     * @beta
     * @remarks
     * Damage caused by an indirect source. For example, setting a
     * mob's health to 0 in a behavior pack.
     *
     */
    override = 'override',
    /**
     * @beta
     * @remarks
     * Damage caused by a Piston.
     *
     */
    piston = 'piston',
    /**
     * @beta
     * @remarks
     * Damage caused by a projectile.
     *
     */
    projectile = 'projectile',
    ramAttack = 'ramAttack',
    sonicBoom = 'sonicBoom',
    soulCampfire = 'soulCampfire',
    /**
     * @beta
     * @remarks
     * Damage caused by a falling Stalactite block.
     *
     */
    stalactite = 'stalactite',
    /**
     * @beta
     * @remarks
     * Damage caused by touching a Stalagmite block.
     *
     */
    stalagmite = 'stalagmite',
    /**
     * @beta
     * @remarks
     * Damage caused over time by having an empty hunger bar.
     *
     */
    starve = 'starve',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity being out of air and inside a
     * non-liquid block.
     *
     */
    suffocation = 'suffocation',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity killing itself. For example, from
     * the /kill command.
     *
     */
    suicide = 'suicide',
    /**
     * @beta
     * @remarks
     * Damage caused by an Entity being in an inhabitable climate.
     * For example, a Snow Golem in a biome with a temperature
     * greater than 1.
     *
     */
    temperature = 'temperature',
    /**
     * @beta
     * @remarks
     * Damage caused by the Thorns armor enchantment and by the
     * Guardian thorns effect.
     *
     */
    thorns = 'thorns',
    /**
     * @beta
     * @remarks
     * Damage caused over time by falling into the void.
     *
     */
    'void' = 'void',
    /**
     * @beta
     * @remarks
     * Damage caused by the Wither effect. For example, from
     * touching a Wither Rose.
     *
     */
    wither = 'wither',
}

/**
 * @beta
 * An enumeration describing initialization cause of an entity.
 */
export enum EntityInitializationCause {
    /**
     * @beta
     * @remarks
     * Case when an entity is created as child of other entity or
     * entities, e.g., cows making a cow or slimes making smaller
     * slimes after dying.
     *
     */
    Born = 'Born',
    /**
     * @beta
     * @remarks
     * Case when an entity is created by an event, e.g., Wandering
     * trader spawning llamas.
     *
     */
    Event = 'Event',
    Loaded = 'Loaded',
    /**
     * @beta
     * @remarks
     * Case when an entity is naturally spawned in the world.
     *
     */
    Spawned = 'Spawned',
    /**
     * @beta
     * @remarks
     * Case when an entity is transformed into another entity.
     *
     */
    Transformed = 'Transformed',
}

/**
 * @beta
 * Describes the lifetime state of an Entity. For example,
 * Entities can be loaded or unloaded depending on whether
 * their chunks are loaded or when they move across dimensions.
 */
export enum EntityLifetimeState {
    /**
     * @beta
     * @remarks
     * Corresponding object is loaded.
     *
     */
    Loaded = 'Loaded',
    /**
     * @beta
     * @remarks
     * Corresponding object is now unloaded. Unloaded entities
     * cannot be manipulated. However, if an unloaded Entity later
     * reloads, it becomes valid and can once again be manipulated.
     *
     */
    Unloaded = 'Unloaded',
}

/**
 * @beta
 * The equipment slot of the mob. This includes armor, offhand
 * and mainhand slots.
 */
export enum EquipmentSlot {
    /**
     * @beta
     * @remarks
     * The chest slot. This slot is used to hold items such as
     * Chestplate or Elytra.
     *
     */
    Chest = 'Chest',
    /**
     * @beta
     * @remarks
     * The feet slot. This slot is used to hold items such as
     * Boots.
     *
     */
    Feet = 'Feet',
    /**
     * @beta
     * @remarks
     * The head slot. This slot is used to hold items such as
     * Helmets or Carved Pumpkins.
     *
     */
    Head = 'Head',
    /**
     * @beta
     * @remarks
     * The legs slot. This slot is used to hold items such as
     * Leggings.
     *
     */
    Legs = 'Legs',
    /**
     * @beta
     * @remarks
     * The mainhand slot. For players, the mainhand slot refers to
     * the currently active hotbar slot.
     *
     */
    Mainhand = 'Mainhand',
    /**
     * @beta
     * @remarks
     * The offhand slot. This slot is used to hold items such as
     * shields and maps.
     *
     */
    Offhand = 'Offhand',
}

/**
 * @beta
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 */
export enum FluidType {
    /**
     * @beta
     * @remarks
     * Represents lava as a type of fluid.
     *
     */
    Lava = 'Lava',
    /**
     * @beta
     * @remarks
     * Represents a potion as a type of fluid.
     *
     */
    Potion = 'Potion',
    /**
     * @beta
     * @remarks
     * Represents powder snow as a type of fluid.
     *
     */
    PowderSnow = 'PowderSnow',
    /**
     * @beta
     * @remarks
     * Represents water as a type of fluida.
     *
     */
    Water = 'Water',
}

/**
 * @beta
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
    /**
     * @beta
     * @remarks
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     *
     */
    adventure = 'adventure',
    /**
     * @beta
     * @remarks
     * World is in a full creative mode. In creative mode, the
     * player has all the resources available in the item selection
     * tabs and the survival selection tab. They can also destroy
     * blocks instantly including those which would normally be
     * indestructible. Command and structure blocks can also be
     * used in creative mode. Items also do not lose durability or
     * disappear.
     *
     */
    creative = 'creative',
    /**
     * @beta
     * @remarks
     * World is in spectator mode. In spectator mode, spectators
     * are always flying and cannot become grounded. Spectators can
     * pass through solid blocks and entities without any
     * collisions, and cannot use items or interact with blocks or
     * mobs. Spectators cannot be seen by mobs or other players,
     * except for other spectators; spectators appear as a
     * transparent floating head.
     *
     */
    spectator = 'spectator',
    /**
     * @beta
     * @remarks
     * World is in a survival mode, where players can take damage
     * and entities may not be peaceful. Survival mode is where the
     * player must collect resources, build structures while
     * surviving in their generated world. Activities can, over
     * time, chip away at player health and hunger bar.
     *
     */
    survival = 'survival',
}

/**
 * @beta
 */
export enum ItemComponentTypes {
    Cooldown = 'minecraft:cooldown',
    Durability = 'minecraft:durability',
    Enchants = 'minecraft:enchantments',
    Food = 'minecraft:food',
}

/**
 * @beta
 * Describes how an an item can be moved within a container.
 */
export enum ItemLockMode {
    /**
     * @beta
     * @remarks
     * The item cannot be dropped or crafted with.
     *
     */
    inventory = 'inventory',
    /**
     * @beta
     * @remarks
     * The item has no container restrictions.
     *
     */
    none = 'none',
    /**
     * @beta
     * @remarks
     * The item cannot be moved from its slot, dropped or crafted
     * with.
     *
     */
    slot = 'slot',
}

/**
 * @beta
 * Enum containing the different phases of the moon based on
 * the current day.,Obtain the current MoonPhase using
 * world.getMoonPhase.
 *
 * The fullness of the moon controls various mob behaviors such
 * as the number of slimes that spawn in Swamp biomes, the
 * chance skeletons and zombies have to spawn with armor, as
 * well as the chance for spiders to spawn with certain status
 * effects.
 */
export enum MoonPhase {
    /**
     * @beta
     * @remarks
     * The brightest moon phase. During this phase, cats have a 50%
     * chance of spawning as black cats.
     *
     */
    FullMoon = 0,
    /**
     * @beta
     * @remarks
     * The phase following the Full Moon.
     *
     */
    WaningGibbous = 1,
    /**
     * @beta
     * @remarks
     * The phase following the Waxing Crescent.
     *
     */
    FirstQuarter = 2,
    /**
     * @beta
     * @remarks
     * The phase following the Last Quarter.
     *
     */
    WaningCrescent = 3,
    /**
     * @beta
     * @remarks
     * The darkest moon phase.
     *
     */
    NewMoon = 4,
    /**
     * @beta
     * @remarks
     * The phase following the New Moon.
     *
     */
    WaxingCrescent = 5,
    /**
     * @beta
     * @remarks
     * The phase following the Waning Gibbous.
     *
     */
    LastQuarter = 6,
    /**
     * @beta
     * @remarks
     * The phase following the First Quarter.
     *
     */
    WaxingGibbous = 7,
}

/**
 * @beta
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 */
export enum ObjectiveSortOrder {
    /**
     * @beta
     * @remarks
     * Objective participant list is displayed in ascending (e.g.,
     * A-Z) order.
     *
     */
    Ascending = 0,
    /**
     * @beta
     * @remarks
     * Objective participant list is displayed in descending (e.g.,
     * Z-A) order.
     *
     */
    Descending = 1,
}

/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to an entity.
     *
     */
    Entity = 'Entity',
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     *
     */
    FakePlayer = 'FakePlayer',
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to a player.
     *
     */
    Player = 'Player',
}

/**
 * @beta
 * Describes where the script event originated from.
 */
export enum ScriptEventSource {
    /**
     * @beta
     * @remarks
     * The script event originated from a Block such as a Command
     * Block.
     *
     */
    Block = 'Block',
    /**
     * @beta
     * @remarks
     * The script event originated from an Entity such as a Player,
     * Command Block Minecart or Animation Controller.
     *
     */
    Entity = 'Entity',
    /**
     * @beta
     * @remarks
     * The script event originated from an NPC dialogue.
     *
     */
    NPCDialogue = 'NPCDialogue',
    /**
     * @beta
     * @remarks
     * The script event originated from the server, such as from a
     * runCommand API call or a dedicated server console.
     *
     */
    Server = 'Server',
}

/**
 * @beta
 * Represents a side of a sign.
 */
export enum SignSide {
    /**
     * @beta
     * @remarks
     * The back of the sign.
     *
     */
    Back = 'Back',
    /**
     * @beta
     * @remarks
     * The front of the sign.
     *
     */
    Front = 'Front',
}

/**
 * @beta
 * Provides numeric values for common periods in the Minecraft
 * day.
 */
export enum TimeOfDay {
    Day = 1000,
    Noon = 6000,
    Sunset = 12000,
    Night = 13000,
    Midnight = 18000,
    Sunrise = 23000,
}

/**
 * @beta
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 */
export enum WatchdogTerminateReason {
    /**
     * @beta
     * @remarks
     * Script runtime for a behavior pack is terminated due to
     * non-responsiveness from script (a hang or infinite loop).
     *
     */
    Hang = 'Hang',
    /**
     * @beta
     * @remarks
     * Script runtime for a behavior pack is terminated due to a
     * stack overflow (a long, and potentially infinite) chain of
     * function calls.
     *
     */
    StackOverflow = 'StackOverflow',
}

/**
 * @beta
 * Used to specify the type of weather condition within the
 * world.
 */
export enum WeatherType {
    /**
     * @beta
     * @remarks
     * Specifies a clear weather condition.
     *
     */
    Clear = 'Clear',
    /**
     * @beta
     * @remarks
     * Specifies a rain weather condition.
     *
     */
    Rain = 'Rain',
    /**
     * @beta
     * @remarks
     * Specifies a rain and thunder weather condition.
     *
     */
    Thunder = 'Thunder',
}

/**
 * @beta
 */
export type BlockComponentTypeMap = {
    inventory: BlockInventoryComponent;
    lavaContainer: BlockLavaContainerComponent;
    'minecraft:inventory': BlockInventoryComponent;
    'minecraft:lavaContainer': BlockLavaContainerComponent;
    'minecraft:piston': BlockPistonComponent;
    'minecraft:potionContainer': BlockPotionContainerComponent;
    'minecraft:recordPlayer': BlockRecordPlayerComponent;
    'minecraft:sign': BlockSignComponent;
    'minecraft:snowContainer': BlockSnowContainerComponent;
    'minecraft:waterContainer': BlockWaterContainerComponent;
    piston: BlockPistonComponent;
    potionContainer: BlockPotionContainerComponent;
    recordPlayer: BlockRecordPlayerComponent;
    sign: BlockSignComponent;
    snowContainer: BlockSnowContainerComponent;
    waterContainer: BlockWaterContainerComponent;
};

/**
 * @beta
 */
export type EntityComponentTypeMap = {
    addrider: EntityAddRiderComponent;
    ageable: EntityAgeableComponent;
    breathable: EntityBreathableComponent;
    can_climb: EntityCanClimbComponent;
    can_fly: EntityCanFlyComponent;
    can_power_jump: EntityCanPowerJumpComponent;
    color: EntityColorComponent;
    equippable: EntityEquippableComponent;
    fire_immune: EntityFireImmuneComponent;
    floats_in_liquid: EntityFloatsInLiquidComponent;
    flying_speed: EntityFlyingSpeedComponent;
    friction_modifier: EntityFrictionModifierComponent;
    ground_offset: EntityGroundOffsetComponent;
    healable: EntityHealableComponent;
    health: EntityHealthComponent;
    inventory: EntityInventoryComponent;
    is_baby: EntityIsBabyComponent;
    is_charged: EntityIsChargedComponent;
    is_chested: EntityIsChestedComponent;
    is_dyeable: EntityIsDyeableComponent;
    is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
    is_ignited: EntityIsIgnitedComponent;
    is_illager_captain: EntityIsIllagerCaptainComponent;
    is_saddled: EntityIsSaddledComponent;
    is_shaking: EntityIsShakingComponent;
    is_sheared: EntityIsShearedComponent;
    is_stackable: EntityIsStackableComponent;
    is_stunned: EntityIsStunnedComponent;
    is_tamed: EntityIsTamedComponent;
    item: EntityItemComponent;
    lava_movement: EntityLavaMovementComponent;
    leashable: EntityLeashableComponent;
    mark_variant: EntityMarkVariantComponent;
    'minecraft:addrider': EntityAddRiderComponent;
    'minecraft:ageable': EntityAgeableComponent;
    'minecraft:breathable': EntityBreathableComponent;
    'minecraft:can_climb': EntityCanClimbComponent;
    'minecraft:can_fly': EntityCanFlyComponent;
    'minecraft:can_power_jump': EntityCanPowerJumpComponent;
    'minecraft:color': EntityColorComponent;
    'minecraft:equippable': EntityEquippableComponent;
    'minecraft:fire_immune': EntityFireImmuneComponent;
    'minecraft:floats_in_liquid': EntityFloatsInLiquidComponent;
    'minecraft:flying_speed': EntityFlyingSpeedComponent;
    'minecraft:friction_modifier': EntityFrictionModifierComponent;
    'minecraft:ground_offset': EntityGroundOffsetComponent;
    'minecraft:healable': EntityHealableComponent;
    'minecraft:health': EntityHealthComponent;
    'minecraft:inventory': EntityInventoryComponent;
    'minecraft:is_baby': EntityIsBabyComponent;
    'minecraft:is_charged': EntityIsChargedComponent;
    'minecraft:is_chested': EntityIsChestedComponent;
    'minecraft:is_dyeable': EntityIsDyeableComponent;
    'minecraft:is_hidden_when_invisible': EntityIsHiddenWhenInvisibleComponent;
    'minecraft:is_ignited': EntityIsIgnitedComponent;
    'minecraft:is_illager_captain': EntityIsIllagerCaptainComponent;
    'minecraft:is_saddled': EntityIsSaddledComponent;
    'minecraft:is_shaking': EntityIsShakingComponent;
    'minecraft:is_sheared': EntityIsShearedComponent;
    'minecraft:is_stackable': EntityIsStackableComponent;
    'minecraft:is_stunned': EntityIsStunnedComponent;
    'minecraft:is_tamed': EntityIsTamedComponent;
    'minecraft:item': EntityItemComponent;
    'minecraft:lava_movement': EntityLavaMovementComponent;
    'minecraft:leashable': EntityLeashableComponent;
    'minecraft:mark_variant': EntityMarkVariantComponent;
    'minecraft:movement': EntityMovementComponent;
    'minecraft:movement.amphibious': EntityMovementAmphibiousComponent;
    'minecraft:movement.basic': EntityMovementBasicComponent;
    'minecraft:movement.fly': EntityMovementFlyComponent;
    'minecraft:movement.generic': EntityMovementGenericComponent;
    'minecraft:movement.glide': EntityMovementGlideComponent;
    'minecraft:movement.hover': EntityMovementHoverComponent;
    'minecraft:movement.jump': EntityMovementJumpComponent;
    'minecraft:movement.skip': EntityMovementSkipComponent;
    'minecraft:movement.sway': EntityMovementSwayComponent;
    'minecraft:navigation.climb': EntityNavigationClimbComponent;
    'minecraft:navigation.float': EntityNavigationFloatComponent;
    'minecraft:navigation.fly': EntityNavigationFlyComponent;
    'minecraft:navigation.generic': EntityNavigationGenericComponent;
    'minecraft:navigation.hover': EntityNavigationHoverComponent;
    'minecraft:navigation.walk': EntityNavigationWalkComponent;
    'minecraft:onfire': EntityOnFireComponent;
    'minecraft:push_through': EntityPushThroughComponent;
    'minecraft:rideable': EntityRideableComponent;
    'minecraft:riding': EntityRidingComponent;
    'minecraft:scale': EntityScaleComponent;
    'minecraft:skin_id': EntitySkinIdComponent;
    'minecraft:strength': EntityStrengthComponent;
    'minecraft:tameable': EntityTameableComponent;
    'minecraft:tamemount': EntityMountTamingComponent;
    'minecraft:underwater_movement': EntityUnderwaterMovementComponent;
    'minecraft:variant': EntityVariantComponent;
    'minecraft:wants_jockey': EntityWantsJockeyComponent;
    movement: EntityMovementComponent;
    'movement.amphibious': EntityMovementAmphibiousComponent;
    'movement.basic': EntityMovementBasicComponent;
    'movement.fly': EntityMovementFlyComponent;
    'movement.generic': EntityMovementGenericComponent;
    'movement.glide': EntityMovementGlideComponent;
    'movement.hover': EntityMovementHoverComponent;
    'movement.jump': EntityMovementJumpComponent;
    'movement.skip': EntityMovementSkipComponent;
    'movement.sway': EntityMovementSwayComponent;
    'navigation.climb': EntityNavigationClimbComponent;
    'navigation.float': EntityNavigationFloatComponent;
    'navigation.fly': EntityNavigationFlyComponent;
    'navigation.generic': EntityNavigationGenericComponent;
    'navigation.hover': EntityNavigationHoverComponent;
    'navigation.walk': EntityNavigationWalkComponent;
    onfire: EntityOnFireComponent;
    push_through: EntityPushThroughComponent;
    rideable: EntityRideableComponent;
    riding: EntityRidingComponent;
    scale: EntityScaleComponent;
    skin_id: EntitySkinIdComponent;
    strength: EntityStrengthComponent;
    tameable: EntityTameableComponent;
    tamemount: EntityMountTamingComponent;
    underwater_movement: EntityUnderwaterMovementComponent;
    variant: EntityVariantComponent;
    wants_jockey: EntityWantsJockeyComponent;
};

/**
 * @beta
 */
export type ItemComponentTypeMap = {
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    enchantments: ItemEnchantsComponent;
    food: ItemFoodComponent;
    'minecraft:cooldown': ItemCooldownComponent;
    'minecraft:durability': ItemDurabilityComponent;
    'minecraft:enchantments': ItemEnchantsComponent;
    'minecraft:food': ItemFoodComponent;
};

/**
 * @beta
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
    private constructor();
    /**
     * @remarks
     * Returns the dimension that the block is within.
     *
     */
    readonly dimension: Dimension;
    /**
     * @beta
     * @remarks
     * Returns true if this block is an air block (i.e., empty
     * space).
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isAir: boolean;
    /**
     * @beta
     * @remarks
     * Returns true if this block is a liquid block - (e.g., a
     * water block and a lava block are liquid, while an air block
     * and a stone block are not. Water logged blocks are not
     * liquid blocks).
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isLiquid: boolean;
    /**
     * @beta
     * @remarks
     * Returns true if this block is solid and impassible - (e.g.,
     * a cobblestone block and a diamond block are solid, while a
     * ladder block and a fence block are not).
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isSolid: boolean;
    /**
     * @beta
     * @remarks
     * Returns or sets whether this block has a liquid on it.
     *
     * This property can't be edited in read-only mode.
     *
     */
    isWaterlogged: boolean;
    /**
     * @remarks
     * Coordinates of the specified block.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Additional block configuration data that describes the
     * block.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly permutation: BlockPermutation;
    /**
     * @beta
     * @remarks
     * Gets the type of block.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly 'type': BlockType;
    /**
     * @beta
     * @remarks
     * Identifier of the type of block for this block.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * X coordinate of the block.
     *
     */
    readonly x: number;
    /**
     * @remarks
     * Y coordinate of the block.
     *
     */
    readonly y: number;
    /**
     * @remarks
     * Z coordinate of the block.
     *
     */
    readonly z: number;
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} above this block (positive in the
     * Y direction).
     *
     * @param steps
     * Number of steps above to step before returning.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    above(steps?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} below this block (negative in the
     * Y direction).
     *
     * @param steps
     * Number of steps below to step before returning.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * Returns the {@link @minecraft/server.Location} of the center
     * of this block on the X and Z axis.
     *
     */
    bottomCenter(): Vector3;
    /**
     * @beta
     * @remarks
     * Checks to see whether it is valid to place the specified
     * block type or block permutation, on a specified face on this
     * block
     *
     * @param blockToPlace
     * Block type or block permutation to check placement for.
     * @param faceToPlaceOn
     * Optional specific face of this block to check placement
     * against.
     * @returns
     * Returns `true` if the block type or permutation can be
     * placed on this block, else `false`.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;
    /**
     * @beta
     * @remarks
     * Returns the {@link @minecraft/server.Location} of the center
     * of this block on the X, Y, and Z axis.
     *
     */
    center(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the east of this block
     * (positive in the X direction).
     *
     * @param steps
     * Number of steps to the east to step before returning.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for a block - for example, an inventory component of a chest
     * block.
     *
     * @param componentId
     * The identifier of the component (e.g.,
     * 'minecraft:inventory'). If no namespace prefix is specified,
     * 'minecraft:' is assumed. Available component IDs can be
     * found as part of the {@link BlockComponentTypes} enum.
     * @returns
     * Returns the component if it exists on the block, otherwise
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example getBlockInventoryComponent.js
     * ```js
     * const getEntityInventoryComponent = block.getComponent("inventory");
     * const inventoryContainer = getEntityInventoryComponent.container;
     *
     * // Custom function to add an item to the inventory
     * function addItemToInventory(itemStack) {
     *     return inventoryContainer.addItem(itemStack);
     * }
     *
     * // Custom function to move an item within the inventory
     * function moveItemWithinInventory(fromSlot, toSlot) {
     *     inventoryContainer.moveItem(fromSlot, toSlot, inventoryContainer);
     * }
     *
     * // Custom function to transfer an item from inventory to another container
     * function transferItemToContainer(fromSlot, targetContainer) {
     *     return inventoryContainer.transferItem(fromSlot, targetContainer);
     * }
     *
     * // Example usage of the custom functions
     * const newItemStack = new ItemStack("apple", 10); // Assuming "apple" is a valid item
     * const addedItem = addItemToInventory(newItemStack);
     * if (addedItem) {
     *     console.log("Item added to inventory:", addedItem);
     * }
     *
     * const sourceSlot = 2;
     * const destinationSlot = 5;
     * moveItemWithinInventory(sourceSlot, destinationSlot);
     *
     * const targetContainer = someOtherContainer; // Assuming 'someOtherContainer' is an instance of another container
     * const transferredItem = transferItemToContainer(0, targetContainer);
     * if (transferredItem) {
     *     console.log("Item transferred to another container:", transferredItem);
     * }
     * ```
     */
    getComponent<T extends keyof BlockComponentTypeMap>(componentId: T): BlockComponentTypeMap[T] | undefined;
    /**
     * @beta
     * @remarks
     * Creates a prototype item stack based on this block that can
     * be used with Container/ContainerSlot APIs.
     *
     * @param amount
     * Number of instances of this block to place in the item
     * stack.
     * @param withData
     * Whether additional data facets of the item stack are
     * included.
     * @returns
     * An itemStack with the specified amount of items and data.
     * Returns undefined if block type is incompatible.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;
    /**
     * @beta
     * @remarks
     * Returns the net redstone power of this block.
     *
     * @returns
     * Returns undefined if redstone power is not applicable to
     * this block.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;
    /**
     * @beta
     * @remarks
     * Returns a set of tags for a block.
     *
     * @returns
     * The list of tags that the block has.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     * Checks to see if the permutation of this block has a
     * specific tag.
     *
     * @param tag
     * Tag to check for.
     * @returns
     * Returns `true` if the permutation of this block has the tag,
     * else `false`.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example check_block_tags.js
     * ```typescript
     * import { world } from "@minecraft/server";
     *
     * // Fetch the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *
     * console.log(`Block is dirt: ${block.hasTag("dirt")}`);
     * console.log(`Block is wood: ${block.hasTag("wood")}`);
     * console.log(`Block is stone: ${block.hasTag("stone")}`);
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Returns true if this reference to a block is still valid
     * (for example, if the block is unloaded, references to that
     * block will no longer be valid.)
     *
     * @returns
     * True if this block object is still working and valid.
     */
    isValid(): boolean;
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the north of this block
     * (negative in the Z direction).
     *
     * @param steps
     * Number of steps to the north to step before returning.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    north(steps?: number): Block | undefined;
    /**
     * @beta
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    offset(offset: Vector3): Block | undefined;
    /**
     * @remarks
     * Sets the block in the dimension to the state of the
     * permutation.
     *
     * This function can't be called in read-only mode.
     *
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @beta
     * @remarks
     * Sets the type of block.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockType
     * Identifier of the type of block to apply - for example,
     * minecraft:powered_repeater.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setType(blockType: BlockType | string): void;
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the south of this block
     * (positive in the Z direction).
     *
     * @param steps
     * Number of steps to the south to step before returning.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    south(steps?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * Tries to set the block in the dimension to the state of the
     * permutation by first checking if the placement is valid.
     *
     * This function can't be called in read-only mode.
     *
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @returns
     * Returns `true` if the block permutation data was
     * successfully set, else `false`.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the west of this block
     * (negative in the X direction).
     *
     * @param steps
     * Number of steps to the west to step before returning.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;
}

/**
 * @beta
 * Holds information for expressing the net size of a volume of
 * blocks.
 */
export class BlockAreaSize {
    /**
     * @remarks
     * X size (west to east) component of this block area.
     *
     */
    x: number;
    /**
     * @remarks
     * Y size (down to up) of this block area size.
     *
     */
    y: number;
    /**
     * @remarks
     * Z size (south to north) of this block area size.
     *
     */
    z: number;
    /**
     * @remarks
     * Creates a new BlockAreaSize object.
     *
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Tests whether this block area size is equal to another
     * BlockAreaSize object.
     *
     */
    equals(other: BlockAreaSize): boolean;
}

/**
 * @beta
 * Base type for components associated with blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @beta
     * @remarks
     * Block instance that this component pertains to.
     *
     */
    readonly block: Block;
}

/**
 * @beta
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * Block impacted by this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * Dimension that contains the block that is the subject of
     * this event.
     *
     */
    readonly dimension: Dimension;
}

/**
 * @beta
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Description of the block that has exploded.
     *
     */
    readonly explodedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    readonly source?: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void;
}

/**
 * @beta
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * The container which holds an {@link ItemStack}.
     *
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * @beta
 * Represents a fluid container block that currently contains
 * lava.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:lavaContainer';
}

/**
 * @beta
 * For blocks that can contain a liquid (e.g., a cauldron),
 * this is a base component for liquid containers.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLiquidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Relative fill level of the liquid container.
     *
     * This property can't be edited in read-only mode.
     *
     */
    fillLevel: number;
    /**
     * @remarks
     * Returns true if this reference to a liquid container is
     * still valid and contains the liquid of the type you have a
     * reference for (for example, if the block is unloaded, no
     * longer a liquid container or contains lava when you have a
     * potion container component, isValidLiquid will not be true.)
     *
     * @returns
     * True if this liquid container still exists, is valid and
     * contains the expected liquid type.
     */
    isValidLiquid(): boolean;
}

/**
 * @beta
 * A BlockLocationIterator returns the next block location of
 * the block volume across which it is iterating.
 * The BlockLocationIterator is used to abstract the shape of
 * the block volume it was fetched from (so it can represent
 * all the block locations that make up rectangles, cubes,
 * spheres, lines and complex shapes).
 * Each iteration pass returns the next valid block location in
 * the parent shape.
 * Unless otherwise specified by the parent shape - the
 * BlockLocationIterator will iterate over a 3D space in the
 * order of increasing X, followed by increasing Z followed by
 * increasing Y.
 * (Effectively stepping across the XZ plane, and when all the
 * locations in that plane are exhausted, increasing the Y
 * coordinate to the next XZ slice)
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<Vector3>;
}

/**
 * @beta
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}).
 */
export class BlockPermutation {
    private constructor();
    /**
     * @beta
     * @remarks
     * The {@link BlockType} that the permutation has.
     *
     */
    readonly 'type': BlockType;
    /**
     * @beta
     * @remarks
     * Creates a copy of this permutation.
     *
     * @returns
     * A copy of the permutation.
     */
    clone(): BlockPermutation;
    /**
     * @beta
     * @remarks
     * Returns all available block states associated with this
     * block.
     *
     * @returns
     * Returns the list of all of the block states that the
     * permutation has.
     */
    getAllStates(): Record<string, boolean | number | string>;
    /**
     * @beta
     * @remarks
     * Retrieves a prototype item stack based on this block
     * permutation that can be used with item
     * Container/ContainerSlot APIs.
     *
     * @param amount
     * Number of instances of this block to place in the prototype
     * item stack.
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /**
     * @beta
     * @remarks
     * Gets a state for the permutation.
     *
     * @param stateName
     * Name of the block state who's value is to be returned.
     * @returns
     * Returns the state if the permutation has it, else
     * `undefined`.
     */
    getState(stateName: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Creates a copy of the permutation.
     *
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     * Checks to see if the permutation has a specific tag.
     *
     * @returns
     * Returns `true` if the permutation has the tag, else `false`.
     * @example check_block_tags.js
     * ```typescript
     * import { world } from "@minecraft/server";
     *
     * // Fetch the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const blockPerm = block.getPermutation();
     *
     * console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
     * console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
     * console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns a boolean whether a specified permutation matches
     * this permutation. If states is not specified, matches checks
     * against the set of types more broadly.
     *
     * @param blockName
     * An optional set of states to compare against.
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @beta
     * @remarks
     * Returns a derived BlockPermutation with a specific property
     * set.
     *
     * @param name
     * Identifier of the block property.
     * @param value
     * Value of the block property.
     * @throws This function can throw errors.
     */
    withState(name: string, value: boolean | number | string): BlockPermutation;
    /**
     * @remarks
     * Given a type identifier and an optional set of properties,
     * will return a BlockPermutation object that is usable in
     * other block APIs (e.g., block.setPermutation)
     *
     * @param blockName
     * Identifier of the block to check.
     * @throws This function can throw errors.
     * @example addBlockColorCube.ts
     * ```typescript
     *   const allColorNames: string[] = [
     *     "white",
     *     "orange",
     *     "magenta",
     *     "light_blue",
     *     "yellow",
     *     "lime",
     *     "pink",
     *     "gray",
     *     "silver",
     *     "cyan",
     *     "purple",
     *     "blue",
     *     "brown",
     *     "green",
     *     "red",
     *     "black",
     *   ];
     *
     *   const cubeDim = 7;
     *
     *   let colorIndex = 0;
     *
     *   for (let x = 0; x <= cubeDim; x++) {
     *     for (let y = 0; y <= cubeDim; y++) {
     *       for (let z = 0; z <= cubeDim; z++) {
     *         colorIndex++;
     *         overworld
     *           .getBlock({ x: targetLocation.x + x, y: targetLocation.y + y, z: targetLocation.z + z })
     *           ?.setPermutation(
     *             mc.BlockPermutation.resolve("minecraft:wool", {
     *               color: allColorNames[colorIndex % allColorNames.length],
     *             })
     *           );
     *       }
     *     }
     *   }
     * ```
     */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

/**
 * @beta
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Whether the piston is fully expanded.
     *
     * @throws This property can throw when used.
     */
    readonly isExpanded: boolean;
    /**
     * @remarks
     * Whether the piston is in the process of expanding.
     *
     * @throws This property can throw when used.
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * Whether the piston is in the process of expanding or
     * retracting.
     *
     * @throws This property can throw when used.
     */
    readonly isMoving: boolean;
    /**
     * @remarks
     * Whether the piston is fully retracted.
     *
     * @throws This property can throw when used.
     */
    readonly isRetracted: boolean;
    /**
     * @remarks
     * Whether the piston is in the process of retracting.
     *
     * @throws This property can throw when used.
     */
    readonly isRetracting: boolean;
    static readonly componentId = 'minecraft:piston';
    /**
     * @remarks
     * Retrieves a set of blocks that this piston is connected
     * with.
     *
     * @throws This function can throw errors.
     */
    getAttachedBlocks(): Vector3[];
}

/**
 * @beta
 * Represents a fluid container block that currently contains a
 * potion.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:potionContainer';
    /**
     * @remarks
     * Sets the potion type based on an item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setPotionType(itemStack: ItemStack): void;
}

/**
 * @beta
 * Represents a block that can play a record.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:recordPlayer';
    /**
     * @remarks
     * Clears the currently playing record of this record-playing
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /**
     * @remarks
     * Returns true if the record-playing block is currently
     * playing a record.
     *
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * Sets and plays a record based on an item type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setRecord(recordItemType: ItemType | string): void;
}

/**
 * @beta
 * Represents a block that can display text on it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Whether or not players can edit the sign. This happens if a
     * sign has had a honeycomb used on it or `setWaxed` was called
     * on the sign.
     *
     * @throws This property can throw when used.
     */
    readonly isWaxed: boolean;
    static readonly componentId = 'minecraft:sign';
    /**
     * @remarks
     * Returns the RawText of the sign if `setText` was called with
     * a RawMessage or a RawText object, otherwise returns
     * undefined.
     *
     * @param side
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * @throws This function can throw errors.
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @remarks
     * Returns the text of the sign if `setText` was called with a
     * string, otherwise returns undefined.
     *
     * @param side
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * @throws This function can throw errors.
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @remarks
     * Gets the dye that is on the text or undefined if the sign
     * has not been dyed.
     *
     * @param side
     * The side of the sign to read the dye from. If not provided,
     * this will return the dye on the front side of the sign.
     * @throws This function can throw errors.
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks
     * Sets the text of the sign component.
     *
     * This function can't be called in read-only mode.
     *
     * @param message
     * The message to set on the sign. If set to a string, then
     * call `getText` to read that string. If set to a RawMessage,
     * then calling `getRawText` will return a RawText. If set to a
     * RawText, then calling `getRawText` will return the same
     * object that was passed in.
     * @param side
     * The side of the sign the message will be set on. If not
     * provided, the message will be set on the front side of the
     * sign.
     * @throws This function can throw errors.
     * @example SetRawMessage.ts
     * ```typescript
     * const helloWorldMessage: RawMessage = { text: 'Hello World' };
     * sign.setText(helloWorldMessage);
     *
     * // Sign text will be saved as a RawText
     * const result: RawText = sign.getRawText();
     * JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
     * ```
     * @example SetRawText.ts
     * ```typescript
     * const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
     * sign.setText(helloWorldText);
     *
     * // There will be no data transformation unlike calling setText with a RawMessage
     * const result: RawText = sign.getRawText();
     * JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
     * ```
     * @example SetString.ts
     * ```typescript
     * // Set sign to say 'Hello'
     * sign.setText('Hello');
     * sign.getText(); // 'Hello'
     * ```
     */
    setText(message: RawMessage | RawText | string, side?: SignSide): void;
    /**
     * @remarks
     * Sets the dye color of the text.
     *
     * This function can't be called in read-only mode.
     *
     * @param color
     * The dye color to apply to the sign or undefined to clear the
     * dye on the sign.
     * @param side
     * The side of the sign the color will be set on. If not
     * provided, the color will be set on the front side of the
     * sign.
     * @throws This function can throw errors.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks
     * Makes it so players cannot edit this sign.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setWaxed(): void;
}

/**
 * @beta
 * Represents a fluid container block that currently contains
 * snow.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:snowContainer';
}

/**
 * @beta
 * Enumerates all {@link BlockStateType}s.
 */
export class BlockStates {
    private constructor();
    /**
     * @remarks
     * Retrieves a specific block state instance.
     *
     * @returns
     * Returns the {@link Block} state instance if it is found. If
     * the block state instance is not found returns undefined.
     */
    static get(stateName: string): BlockStateType | undefined;
    /**
     * @remarks
     * Retrieves a set of all available block states.
     *
     */
    static getAll(): BlockStateType[];
}

/**
 * @beta
 * Represents a configurable state value of a block instance.
 * For example, the facing direction of stairs is accessible as
 * a block state.
 */
export class BlockStateType {
    private constructor();
    /**
     * @remarks
     * Identifier of the block property.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * A set of valid values for the block property.
     *
     */
    readonly validValues: (boolean | number | string)[];
}

/**
 * @beta
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
    private constructor();
    /**
     * @remarks
     * Represents whether this type of block can be waterlogged.
     *
     */
    readonly canBeWaterlogged: boolean;
    /**
     * @remarks
     * Block type name - for example, `minecraft:acacia_stairs`.
     *
     */
    readonly id: string;
}

/**
 * @beta
 * Contains a catalog of Minecraft Block Types that are
 * available in this world.
 */
export class BlockTypes {
    private constructor();
    /**
     * @remarks
     * Returns a BlockType object for the specified identifier.
     *
     * @param typeName
     * Identifier of the block type. Should follow a namespace:id
     * pattern, such as minecraft:dirt.
     * @returns
     * BlockType object, or undefined if the block type is not
     * available within this world.
     */
    static get(typeName: string): BlockType | undefined;
    /**
     * @remarks
     * Returns a collection of all available block types.
     *
     */
    static getAll(): BlockType[];
}

/**
 * @beta
 * Block Volume Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * @minecraft-server.BlockVolume} objects
 */
export class BlockVolumeUtils {
    private constructor();
    /**
     * @remarks
     * Check to see if the given location is directly adjacent to
     * the outer surface of a BlockVolume.
     *
     *
     * This function can't be called in read-only mode.
     *
     * @param volume
     * The volume to test against
     * @param pos
     * The world block location to test
     * @returns
     * If the location is either inside or more than 0 blocks away,
     * the function will return false.
     * If the location is directly contacting the outer surface of
     * the BlockVolume, the function will return true.
     */
    static doesLocationTouchFaces(volume: BlockVolume, pos: Vector3): boolean;
    /**
     * @remarks
     * Check to see if a two block volumes are directly adjacent
     * and two faces touch.
     *
     * This function can't be called in read-only mode.
     *
     * @param volume
     * The volume to test against
     * @param other
     * The volume to test
     * @returns
     * If the outer faces of both block volumes touch and are
     * directly adjacent at any point, return true.
     */
    static doesVolumeTouchFaces(volume: BlockVolume, other: BlockVolume): boolean;
    /**
     * @remarks
     * Test the equality of two block volumes
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Return true if two block volumes are identical
     */
    static equals(volume: BlockVolume, other: BlockVolume): boolean;
    /**
     * @remarks
     * Fetch a {@link BlockLocationIterator} that represents all of
     * the block world locations within the specified volume
     *
     * This function can't be called in read-only mode.
     *
     */
    static getBlockLocationIterator(volume: BlockVolume): BlockLocationIterator;
    /**
     * @remarks
     * Return a {@link BoundingBox} object which represents the
     * validated min and max coordinates of the volume
     *
     * This function can't be called in read-only mode.
     *
     */
    static getBoundingBox(volume: BlockVolume): BoundingBox;
    /**
     * @remarks
     * Return the capacity (volume) of the BlockVolume (W*D*H)
     *
     * This function can't be called in read-only mode.
     *
     */
    static getCapacity(volume: BlockVolume): number;
    /**
     * @remarks
     * Get the largest corner position of the volume (guaranteed to
     * be >= min)
     *
     * This function can't be called in read-only mode.
     *
     */
    static getMax(volume: BlockVolume): Vector3;
    /**
     * @remarks
     * Get the smallest corner position of the volume (guaranteed
     * to be <= max)
     *
     * This function can't be called in read-only mode.
     *
     */
    static getMin(volume: BlockVolume): Vector3;
    /**
     * @remarks
     * Get a {@link Vector3} object where each component represents
     * the number of blocks along that axis
     *
     * This function can't be called in read-only mode.
     *
     */
    static getSpan(volume: BlockVolume): Vector3;
    /**
     * @remarks
     * Return an enumeration which represents the intersection
     * between two BlockVolume objects
     *
     * This function can't be called in read-only mode.
     *
     */
    static intersects(volume: BlockVolume, other: BlockVolume): BlockVolumeIntersection;
    /**
     * @remarks
     * Check to see if a given world block location is inside a
     * BlockVolume
     *
     * This function can't be called in read-only mode.
     *
     */
    static isInside(volume: BlockVolume, pos: Vector3): boolean;
    /**
     * @remarks
     * Move a BlockVolume by a specified amount
     *
     * This function can't be called in read-only mode.
     *
     * @param delta
     * Amount of blocks to move by
     * @returns
     * Returns a new BlockVolume object which represents the new
     * volume
     */
    static translate(volume: BlockVolume, delta: Vector3): BlockVolume;
}

/**
 * @beta
 * Represents a fluid container block that currently contains
 * water.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:waterContainer';
    /**
     * @remarks
     * Adds an item and colors the water based on a dye item type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
    /**
     * @remarks
     * Retrieves a custom base color used for the sign text.
     *
     * @returns
     * Color that is used as the base color for sign text.
     * @throws This function can throw errors.
     */
    getCustomColor(): RGBA;
    /**
     * @remarks
     * Sets a custom base color used for the sign text.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCustomColor(color: RGBA): void;
}

/**
 * @beta
 * Bounding Box Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * @minecraft-server.BoundingBox} objects
 */
export class BoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * Create a validated instance of a {@link
     * @minecraft-server.BoundingBox} where the min and max
     * components are guaranteed to be (min <= max)
     *
     * This function can't be called in read-only mode.
     *
     * @param min
     * A corner world location
     * @param max
     * A corner world location diametrically opposite
     */
    static createValid(min: Vector3, max: Vector3): BoundingBox;
    /**
     * @remarks
     * Expand a {@link @minecraft-server.BoundingBox} by a given
     * amount along each axis.
     * Sizes can be negative to perform contraction.
     * Note: corners can be inverted if the contraction size is
     * greater than the span, but the min/max relationship will
     * remain correct
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Return a new {@link @minecraft-server.BoundingBox} object
     * representing the changes
     */
    static dilate(box: BoundingBox, size: Vector3): BoundingBox;
    /**
     * @remarks
     * Check if two {@link @minecraft-server.BoundingBox} objects
     * are identical
     *
     * This function can't be called in read-only mode.
     *
     */
    static equals(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * @remarks
     * Expand the initial box object bounds to include the 2nd box
     * argument.  The resultant {@link
     * @minecraft-server.BoundingBox} object will be a BoundingBox
     * which exactly encompasses the two boxes.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * A new {@link @minecraft-server.BoundingBox} instance
     * representing the smallest possible bounding box which can
     * encompass both
     */
    static expand(box: BoundingBox, other: BoundingBox): BoundingBox;
    /**
     * @remarks
     * Calculate the center block of a given {@link
     * @minecraft-server.BoundingBox} object.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Note that {@link @minecraft-server.BoundingBox} objects
     * represent whole blocks, so the center of boxes which have
     * odd numbered bounds are not mathematically centered...
     * i.e. a BoundingBox( 0,0,0 -> 3,3,3 )  would have a center of
     * (1,1,1)  (not (1.5, 1.5, 1.5) as expected)
     */
    static getCenter(box: BoundingBox): Vector3;
    /**
     * @remarks
     * Calculate the BoundingBox which represents the union area of
     * two intersecting BoundingBoxes
     *
     * This function can't be called in read-only mode.
     *
     */
    static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined;
    /**
     * @remarks
     * Get the Span of each of the BoundingBox Axis components
     *
     * This function can't be called in read-only mode.
     *
     */
    static getSpan(box: BoundingBox): Vector3;
    /**
     * @remarks
     * Check to see if two BoundingBox objects intersect
     *
     * This function can't be called in read-only mode.
     *
     */
    static intersects(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * @remarks
     * Check to see if a given coordinate is inside a BoundingBox
     *
     * This function can't be called in read-only mode.
     *
     */
    static isInside(box: BoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * Check to see if a BoundingBox is valid (i.e. (min <= max))
     *
     * This function can't be called in read-only mode.
     *
     */
    static isValid(box: BoundingBox): boolean;
    /**
     * @remarks
     * Move a BoundingBox by a given amount
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Return a new BoundingBox object which represents the change
     */
    static translate(box: BoundingBox, delta: Vector3): BoundingBox;
}

/**
 * @beta
 * Contains information related to changes to a button push.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Optional source that triggered the button push.
     *
     */
    readonly source: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when a button is
 * pushed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
    private constructor();
}

/**
 * @beta
 * Contains methods relating to the active camera for the
 * specified player.
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * Clears the active camera for the specified player. Causes
     * the specified players to end any in-progress camera
     * perspectives, including any eased camera motions, and return
     * to their normal perspective.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * Begins a camera fade transition. A fade transition is a
     * full-screen color that fades-in, holds, and then fades-out.
     *
     * This function can't be called in read-only mode.
     *
     * @param fadeCameraOptions
     * Additional options around camera fade operations.
     * @throws This function can throw errors.
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * Sets the current active camera for the specified player.
     *
     * This function can't be called in read-only mode.
     *
     * @param cameraPreset
     * Identifier of a camera preset file defined within JSON.
     * @param setOptions
     * Additional options for the camera.
     * @throws This function can throw errors.
     */
    setCamera(
        cameraPreset: string,
        setOptions?:
            | CameraDefaultOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions,
    ): void;
}

/**
 * @beta
 * An event that fires as players enter chat messages.
 */
export class ChatSendAfterEvent {
    private constructor();
    /**
     * @remarks
     * Message that is being broadcast. In a beforeChat event
     * handler, _message_ can be updated with edits before the
     * message is displayed to players.
     *
     */
    message: string;
    /**
     * @remarks
     * Player that sent the chat message.
     *
     */
    sender: Player;
    /**
     * @remarks
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     *
     */
    sendToTargets: boolean;
    /**
     * @remarks
     * List of players that will receive this message.
     *
     * @returns
     * List of player objects.
     */
    getTargets(): Player[];
}

/**
 * @beta
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when new chat messages
     * are sent.
     *
     * This function can't be called in read-only mode.
     *
     * @example custom_command.js
     * ```typescript
     * const chatCallback = World.beforeEvents.chatSend.subscribe((eventData) => {
     *   if (eventData.message.includes("cancel")) {
     *     // Cancel event if the message contains "cancel"
     *     eventData.canceled = true;
     *   } else {
     *     // Modify chat message being sent
     *     eventData.message = `Modified '${eventData.message}'`;
     *   }
     * });
     * ```
     */
    subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when new chat messages
     * are sent.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void;
}

/**
 * @beta
 * An event that fires as players enter chat messages.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ChatSendBeforeEvent extends ChatSendAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true in a beforeChat event handler, this message
     * is not broadcast out.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Sets an updated list of players that will receive this
     * message.
     *
     * @param players
     * Updated array of players that should receive this message.
     */
    setTargets(players: Player[]): void;
}

/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 */
export class ChatSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before new chat messages
     * are sent.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ChatSendBeforeEvent) => void): (arg: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatSendBeforeEvent) => void): void;
}

/**
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     *
     */
    readonly successCount: number;
}

/**
 * @beta
 * Base class for downstream Component implementations.
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * Identifier of the component.
     *
     */
    readonly typeId: string;
    /**
     * @beta
     * @remarks
     * Returns whether the component is valid. A component is
     * considered valid if its owner is valid, in addition to any
     * addition to any additional validation required by the
     * component.
     *
     * @returns
     * Whether the component is valid.
     */
    isValid(): boolean;
}

/**
 * @beta
 * The Compound Block Volume is a collection of individual
 * block volume definitions which, as a collection, define a
 * larger volume of (sometimes non-contiguous) irregular
 * shapes.
 * This class is loosely based on the concept of CSG
 * (Computational Solid Geometry) and allows a user to create
 * complex volumes by building a stack of volumes and voids to
 * make a larger single volume.
 * For example - normally a creator would create a hollow cube
 * by creating 6 "wall" surfaces for each face.
 * With a Compound Block Volume, a creator can define a hollow
 * cube by creating a single outer solid cube, and then
 * defining a further single 'void' cube inside the larger one.
 * Similarly, the Compound Block Volume can represent irregular
 * shaped volumes (e.g. a tree consists of a trunk and lots of
 * leaf cubes which are not necessarily contiguously placed).
 * Each of the volumes added to the CompoundBlockVolume are (by
 * default) relative to the origin set (either at construction
 * or via one of the set functions).
 * However, it is also possible to push volumes to the compound
 * collection which are absolute in nature and are not affected
 * by origin changes.
 */
export class CompoundBlockVolume {
    /**
     * @remarks
     * Return the 'capacity' of the bounding rectangle which
     * represents the collection of volumes in the stack
     *
     */
    readonly capacity: number;
    /**
     * @remarks
     * Return the number of volumes (positive and negative) in the
     * volume stack
     *
     */
    readonly volumeCount: number;
    /**
     * @remarks
     * Create a CompoundBlockVolume object
     *
     * @param origin
     * An optional world space origin on which to center the
     * compound volume.
     * If not specified, the origin is set to (0,0,0)
     */
    constructor(origin?: Vector3);
    /**
     * @remarks
     * Clear the contents of the volume stack
     *
     * This function can't be called in read-only mode.
     *
     */
    clear(): void;
    /**
     * @remarks
     * Fetch a Block Location Iterator for the Compound Block
     * Volume.  This iterator will allow a creator to iterate
     * across all of the selected volumes within the larger
     * bounding area.
     * Areas of a volume which have been overridden by a
     * subtractive volume will not be included in the iterator
     * step.
     * (i.e. if you push a cube to the stack, and then push a
     * subtractive volume to the same location, then the iterator
     * will step over the initial volume because it is considered
     * negative space)
     * Note that the Block Locations returned by this iterator are
     * in absolute world space (irrespective of whether the
     * compound volume items pushed are absolute or relative)
     *
     * This function can't be called in read-only mode.
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks
     * Get the largest bounding box that represents a container for
     * all of the volumes on the stack
     * Note that the bounding box returned is represented in
     * absolute world space  (irrespective of whether the compound
     * volume items pushed are absolute or relative)
     *
     * This function can't be called in read-only mode.
     *
     */
    getBoundingBox(): BoundingBox;
    /**
     * @remarks
     * Get the max block location of the outermost bounding
     * rectangle which represents the volumes on the stack.
     * Note that the max location returned is in absolute world
     * space (irrespective of whether the compound volume items
     * pushed are absolute or relative)
     *
     * This function can't be called in read-only mode.
     *
     */
    getMax(): Vector3;
    /**
     * @remarks
     * Get the min block location of the outermost bounding
     * rectangle which represents the volumes on the stack.
     * Note that the min location returned is in absolute world
     * space (irrespective of whether the compound volume items
     * pushed are absolute or relative)
     *
     * This function can't be called in read-only mode.
     *
     */
    getMin(): Vector3;
    /**
     * @remarks
     * Fetch the origin in world space of the compound volume
     *
     * This function can't be called in read-only mode.
     *
     */
    getOrigin(): Vector3;
    /**
     * @remarks
     * Return a boolean which signals if there are any volume items
     * pushed to the volume
     *
     * This function can't be called in read-only mode.
     *
     */
    isEmpty(): boolean;
    /**
     * @remarks
     * Return a boolean representing whether or not a given
     * absolute world space block location is inside a positive
     * block volume.
     * E.g. if the stack contains a large cube followed by a
     * slightly smaller negative cube, and the test location is
     * within the negative cube - the function will return false
     * because it's not 'inside' a volume (it IS inside the
     * bounding rectangle, but it is not inside a positively
     * defined location)
     *
     * This function can't be called in read-only mode.
     *
     */
    isInside(worldLocation: Vector3): boolean;
    /**
     * @remarks
     * Inspect the last entry pushed to the volume stack without
     * affecting the stack contents.
     *
     * This function can't be called in read-only mode.
     *
     * @param forceRelativity
     * Determine whether the function returns a
     * CompoundBlockVolumeItem which is forced into either relative
     * or absolute coordinate system.
     * `true` = force returned item to be relative to volume origin
     * `false` = force returned item to be absolute world space
     * location
     *
     * If no flag is specified, the item returned retains whatever
     * relativity it had when it was pushed
     * @returns
     * Returns undefined if the stack is empty
     */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * Remove the last entry from the volume stack.  This will
     * reduce the stack size by one
     *
     * This function can't be called in read-only mode.
     *
     */
    popVolume(): boolean;
    /**
     * @remarks
     * Push a volume item to the stack.  The volume item contains
     * an 'action' parameter which determines whether this volume
     * is a positive or negative space.
     * The item also contains a `locationRelativity` which
     * determines whether it is relative or absolute to the
     * compound volume origin
     *
     * This function can't be called in read-only mode.
     *
     * @param item
     * Item to push to the end of the stack
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * If the volume stack is empty, this function will push the
     * specified item to the stack.
     * If the volume stack is NOT empty, this function will replace
     * the last item on the stack with the new item.
     *
     * This function can't be called in read-only mode.
     *
     * @param item
     * Item to add or replace
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * @remarks
     * Set the origin of the compound volume to an absolute world
     * space location
     *
     * This function can't be called in read-only mode.
     *
     * @param preserveExistingVolumes
     * This optional boolean flag determines whether the relative
     * `CompoundBlockVolumeItem`'s are frozen in place, or are
     * affected by the new origin.
     * Imagine a scenario where you have a series of relative
     * locations around an origin which make up a sphere; all of
     * these locations are in the range of -2 to 2.
     * Push each of these locations to the compound volume as
     * relative items.
     * Now, move the origin and all of the locations representing
     * the sphere move accordingly.
     * However, let's say you want to add a 2nd sphere next to the
     * 1st.
     * In this case, set the new origin a few locations over, but
     * 'preserveExistingVolumes' = true.
     * This will set a new origin, but the existing sphere
     * locations will remain relative to the original origin.
     * Now, you can push the relative sphere locations again (this
     * time they will be relative to the new origin) - resulting in
     * 2 spheres next to each other.
     */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /**
     * @remarks
     * Similar to {@link
     * @minecraft-server/CompoundBlockVolume.setOrigin} - this
     * function will translate the origin by a given delta to a new
     * position
     *
     * This function can't be called in read-only mode.
     *
     * @param preserveExistingVolumes
     * See the description for the arguments to {@link
     * @minecraft-server/CompoundBlockVolume.setOrigin}
     */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}

/**
 * @beta
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 */
export class Container {
    private constructor();
    /**
     * @remarks
     * Count of the slots in the container that are empty.
     *
     * @throws
     * Throws if the container is invalid.
     */
    readonly emptySlotsCount: number;
    /**
     * @remarks
     * The number of slots in this container. For example, a
     * standard single-block chest has a size of 27. Note, a
     * player's inventory container contains a total of 36 slots, 9
     * hotbar slots plus 27 inventory slots.
     *
     * @throws
     * Throws if the container is invalid.
     */
    readonly size: number;
    /**
     * @remarks
     * Adds an item to the container. The item is placed in the
     * first available slot(s) and can be stacked with existing
     * items of the same type. Note, use {@link Container.setItem}
     * if you wish to set the item in a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     * @example add_diamond_sword.ts
     * ```ts
     * import {
     *     EntityInventoryComponent,
     *     ItemStack,
     *     MinecraftItemTypes,
     *     world,
     * } from "@minecraft/server";
     * for (const player of world.getAllPlayers()) {
     *     const inventory = player.getComponent(
     *         "inventory"
     *     ) as EntityInventoryComponent;
     *     const item = new ItemStack(MinecraftItemTypes.diamondSword, 10);
     *     inventory.container.addItem(item);
     * }
     * ```
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * Clears all inventory items in the container.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the container is invalid.
     */
    clearAll(): void;
    /**
     * @remarks
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`. This method does
     * not change or clear the contents of the specified slot. To
     * get a reference to a particular slot, see {@link
     * Container.getSlot}.
     *
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @example getItem.ts
     * ```typescript
     * // Get a copy of the first item in the player's hotbar
     * const inventory = player.getComponent("inventory") as EntityInventoryComponent;
     * const itemStack = inventory.container.getItem(0);
     * ```
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @beta
     * @remarks
     * Returns a container slot. This acts as a reference to a slot
     * at the given index for this container.
     *
     * @param slot
     * The index of the slot to return. This index must be within
     * the bounds of the container.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @beta
     * @remarks
     * Returns whether a container object (or the entity or block
     * that this container is associated with) is still available
     * for use in this context.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toSlot
     * Zero-based index of the slot to transfer an item to, on
     * `toContainer`.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * @example moveItem.ts
     * ```typescript
     * // Move an item from the first slot of fromPlayer's inventory to the fifth slot of toPlayer's inventory
     * const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     * const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
     * fromInventory.container.moveItem(0, 4, toInventory.container);
     * ```
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot. Setting
     * `itemStack` to undefined will clear the slot.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @example set_mainhand.ts
     * ```ts
     * import {
     *     EntityInventoryComponent,
     *     ItemStack,
     *     MinecraftItemTypes,
     *     world,
     * } from "@minecraft/server";
     * for (const player of world.getAllPlayers()) {
     *     const inventory = player.getComponent(
     *         "inventory"
     *     ) as EntityInventoryComponent;
     *     const item = new ItemStack(MinecraftItemTypes.diamondSword, 10);
     *     inventory.container.setItem(0, item);
     * }
     * ```
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws
     * Throws if either this container or `otherContainer` are
     * invalid or if the `slot` or `otherSlot` are out of bounds.
     * @example swapItems.ts
     * ```typescript
     * // Swaps an item between slots 0 and 4 in the player's inventory
     * const inventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     * inventory.container.swapItems(0, 4, inventory);
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks
     * Moves an item from one slot to another container, or to the
     * first available slot in the same container.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @returns
     * An itemStack with the items that couldn't be transferred.
     * Returns undefined if all items were transferred.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * @example transferItem.ts
     * ```typescript
     * // Transfer an item from the first slot of fromPlayer's inventory to toPlayer's inventory
     * const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     * const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
     * fromInventory.container.transferItem(0, toInventory.container);
     * ```
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

/**
 * @beta
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
    private constructor();
    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * Gets or sets whether the item is kept on death.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * The type of the item.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly typeId?: string;
    /**
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * Returns a copy of the item in the slot. Returns undefined if
     * the slot is empty.
     * @throws This function can throw errors.
     */
    getItem(): ItemStack | undefined;
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     * @throws
     * Throws if the slot's container is invalid.
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns all tags for the item in the slot.
     *
     * @returns
     * Returns all tags for the item in the slot. Return an empty
     * array if the the slot is empty.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns whether the item in the slot slot has the given tag.
     *
     * @param tag
     * The item tag.
     * @returns
     * Returns false when the slot is empty or the item in the slot
     * does not have the given tag.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     * @param itemStack
     * The ItemStack that is being compared.
     * @returns
     * Returns whether this item stack can be stacked with the
     * given `itemStack`.
     * @throws
     * Throws if the slot's container is invalid.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * Returns whether the ContainerSlot is valid. The container
     * slot is valid if the container exists and is loaded, and the
     * slot index is valid.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * The list of blocks, given by their identifiers.
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * The list of blocks, given by their identifiers.
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * Sets the given ItemStack in the slot, replacing any existing
     * item.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * The ItemStack to be placed in the slot.
     * @throws This function can throw errors.
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     *
     * This function can't be called in read-only mode.
     *
     * @param loreList
     * A list of lore strings. Setting this argument to undefined
     * will clear the lore.
     * @throws
     * Throws if the slot's container is invalid.
     */
    setLore(loreList?: string[]): void;
}

/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that the event triggered on.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * Name of the data driven event being triggered.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * An updateable list of modifications to component state that
     * are the effect of this triggered event.
     *
     * This function can't be called in read-only mode.
     *
     */
    getModifiers(): DefinitionModifier[];
}

/**
 * @beta
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a data driven
     * entity event is triggered.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called after a data driven
     * entity event is triggered.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this entity event is not triggered.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Entity that the event triggered on.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * Name of the data driven event being triggered.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * An updateable list of modifications to component state that
     * are the effect of this triggered event.
     *
     */
    getModifiers(): DefinitionModifier[];
    /**
     * @remarks
     * Changes a list of modifications to component state that are
     * the effect of this triggered event.
     *
     * @param modifiers
     * An updated list of modifications to component state.
     */
    setModifiers(modifiers: DefinitionModifier[]): void;
}

/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a data driven
     * entity event is triggered.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called before a data driven
     * entity event is triggered.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export class DefinitionModifier {
    /**
     * @remarks
     * Retrieves the list of component groups that will be added
     * via this definition modification.
     *
     */
    getComponentGroupsToAdd(): string[];
    /**
     * @remarks
     * Retrieves the list of component groups that will be removed
     * via this definition modification.
     *
     */
    getComponentGroupsToRemove(): string[];
    /**
     * @remarks
     * Retrieves the list of entity definition events that will be
     * fired via this update.
     *
     */
    getTriggers(): Trigger[];
    /**
     * @remarks
     * Updates the list of component groups that will be added via
     * this definition modification.
     *
     */
    setComponentGroupsToAdd(newGroups: string[]): void;
    /**
     * @remarks
     * Updates the list of component groups that will be removed
     * via this definition modification.
     *
     */
    setComponentGroupsToRemove(removedGroups: string[]): void;
    /**
     * @remarks
     * Updates the list of entity definition events that will be
     * fired via this update.
     *
     */
    setTriggers(newTriggers: Trigger[]): void;
}

/**
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
    private constructor();
    /**
     * @beta
     * @remarks
     * Height range of the dimension.
     *
     * @throws This property can throw when used.
     */
    readonly heightRange: NumberRange;
    /**
     * @remarks
     * Identifier of the dimension.
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Creates an explosion at the specified location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location of the explosion.
     * @param radius
     * Radius, in blocks, of the explosion to create.
     * @param explosionOptions
     * Additional configurable options for the explosion.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example createExplosion.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   log("Creating an explosion of radius 10.");
     *   overworld.createExplosion(targetLocation, 10);
     * ```
     * @example createFireAndWaterExplosions.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   const explosionLoc = { x: targetLocation.x + 0.5, y: targetLocation.y + 0.5, z: targetLocation.z + 0.5};
     *
     *   log("Creating an explosion of radius 15 that causes fire.");
     *   overworld.createExplosion(explosionLoc, 15, { causesFire: true });
     *
     *   const belowWaterLoc = { x: targetLocation.x + 3, y: targetLocation.y + 1,z: targetLocation.z + 3};
     *
     *   log("Creating an explosion of radius 10 that can go underwater.");
     *   overworld.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
     * ```
     * @example createNoBlockExplosion.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   const explodeNoBlocksLoc = {
     *     x: Math.floor(targetLocation.x + 1),
     *     y: Math.floor(targetLocation.y + 2),
     *     z: Math.floor(targetLocation.z + 1)
     *   };
     *
     *   log("Creating an explosion of radius 15 that does not break blocks.");
     *   overworld.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): void;
    /**
     * @beta
     * @remarks
     * Fills an area between begin and end with block of type
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @param begin
     * The lower northwest starting corner of the area.
     * @param end
     * The upper southeast ending corner of the area.
     * @param block
     * Type of block to fill the volume with.
     * @param options
     * A set of additional options, such as a matching block to
     * potentially replace this fill block with.
     * @returns
     *  Returns number of blocks placed.
     * @throws This function can throw errors.
     */
    fillBlocks(
        begin: Vector3,
        end: Vector3,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): number;
    /**
     * @beta
     * @remarks
     * Returns a block instance at the given location.
     *
     * @param location
     * The location at which to return a block.
     * @returns
     * Block at the specified location, or 'undefined' if asking
     * for a block at an unloaded chunk.
     * @throws
     * PositionInUnloadedChunkError: Exception thrown when trying
     * to interact with a Block object that isn't in a loaded and
     * ticking chunk anymore
     *
     * PositionOutOfWorldBoundariesError: Exception thrown when
     * trying to interact with a position outside of dimension
     * height range
     *
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @beta
     * @remarks
     * Gets the first block that intersects with a vector emanating
     * from a location.
     *
     * @param location
     * Location from where to initiate the ray check.
     * @param direction
     * Vector direction to cast the ray.
     * @param options
     * Additional options for processing this raycast query.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @beta
     * @remarks
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * entities returned.
     * @returns
     * An entity array.
     * @throws This function can throw errors.
     * @example bounceSkeletons.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     overworld.spawnEntity(mobs[i % mobs.length], targetLocation);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     type: "skeleton",
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.applyKnockback(0, 0, 0, 1);
     *   }
     * ```
     * @example tagsQuery.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     let mobTypeId = mobs[i % mobs.length];
     *     let entity = overworld.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag("mobparty." + mobTypeId);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     tags: ["mobparty.skeleton"],
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * ```
     * @example testThatEntityIsFeatherItem.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   const items = overworld.getEntities({
     *     location: targetLocation,
     *     maxDistance: 20,
     *   });
     *
     *   for (const item of items) {
     *     const itemComp = item.getComponent("item") as mc.EntityItemComponent;
     *
     *     if (itemComp) {
     *       if (itemComp.itemStack.typeId.endsWith("feather")) {
     *         log("Success! Found a feather", 1);
     *       }
     *     }
     *   }
     * ```
     * @example getFilteredEntities.ts
     * ```ts
     * const entityQueryOptions: EntityQueryOptions = {
     *     families: ["mob", "animal"],
     *     excludeTypes: ["cow"],
     *     maxDistance: 50,
     *     excludeGameModes: [GameMode.Creative, GameMode.Spectator],
     * };
     *
     * const filteredEntities = world
     *     .getDimension("overworld")
     *     .getEntities(entityQueryOptions);
     * console.log(
     *     "Filtered Entities:",
     *     filteredEntities.map((entity) => entity.typeId)
     * );
     * ```
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @beta
     * @remarks
     * Returns a set of entities at a particular location.
     *
     * @param location
     * The location at which to return entities.
     * @returns
     * Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @beta
     * @remarks
     * Gets entities that intersect with a specified vector
     * emanating from a location.
     *
     * @param options
     * Additional options for processing this raycast query.
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @beta
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws This function can throw errors.
     * @example getFilteredPlayersInOverworld.ts
     * ```ts
     * const entityQueryOptions: EntityQueryOptions = {
     *     maxDistance: 100,
     *     scoreOptions: [
     *         { objective: "kills", minScore: 10 },
     *         { objective: "deaths", maxScore: 5 },
     *     ],
     * };
     *
     * const filteredPlayers = world
     *     .getDimension("overworld")
     *     .getPlayers(entityQueryOptions);
     * console.log(
     *     "Filtered Players in Overworld:",
     *     filteredPlayers.map((player) => player.name)
     * );
     * ```
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    getWeather(): WeatherType;
    /**
     * @beta
     * @remarks
     * Runs a command synchronously using the context of the
     * broader dimenion.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * Returns a command result with a count of successful values
     * from the command.
     * @throws
     * Throws an exception if the command fails due to incorrect
     * parameters or command syntax, or in erroneous cases for the
     * command. Note that in many cases, if the command does not
     * operate (e.g., a target selector found no matches), this
     * method will not throw an exception.
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * the broader dimension.  Note that there is a maximum queue
     * of 128 asynchronous commands that can be run in a given
     * tick.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws
     * Throws an exception if the command fails due to incorrect
     * parameters or command syntax, or in erroneous cases for the
     * command. Note that in many cases, if the command does not
     * operate (e.g., a target selector found no matches), this
     * method will not throw an exception.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * Sets the current weather within the dimension
     *
     * This function can't be called in read-only mode.
     *
     * @param weatherType
     * Set the type of weather to apply.
     * @param duration
     * Sets the duration of the weather (in ticks). If no duration
     * is provided, the duration will be set to a random duration
     * between 300 and 900 seconds.
     * @throws This function can throw errors.
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /**
     * @beta
     * @remarks
     * Creates a new entity (e.g., a mob) at the specified
     * location.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * Identifier of the type of entity to spawn. If no namespace
     * is specified, 'minecraft:' is assumed.
     * @param location
     * The location at which to create the entity.
     * @returns
     * Newly created entity at the specified location.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example createOldHorse.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   log("Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult");
     *   overworld.spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", targetLocation);
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   const fox = overworld.spawnEntity("minecraft:fox", {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *
     *   fox.addEffect("speed", 10, {
     *     amplifier: 2,
     *   });
     *   log("Created a fox.");
     *
     *   const wolf = overworld.spawnEntity("minecraft:wolf", {
     *     x: targetLocation.x + 4,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *   wolf.addEffect("slowness", 10, {
     *     amplifier: 2,
     *   });
     *   wolf.isSneaking = true;
     *   log("Created a sneaking wolf.", 1);
     * ```
     * @example triggerEvent.ts
     * ```typescript
     *   const creeper = overworld.spawnEntity("minecraft:creeper", targetLocation);
     *
     *   creeper.triggerEvent("minecraft:start_exploding_forced");
     * ```
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /**
     * @beta
     * @remarks
     * Creates a new item stack as an entity at the specified
     * location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location at which to create the item stack.
     * @returns
     * Newly created item stack entity at the specified location.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example itemStacks.ts
     * ```typescript
     * const overworld = mc.world.getDimension('overworld');
     *
     * const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
     * const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
     * const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };
     *
     * const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.Emerald, 1);
     * const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.DiamondPickaxe, 1);
     * const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.Emerald, 5);
     *
     * log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
     * overworld.spawnItem(oneEmerald, oneItemLoc);
     *
     * log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
     * overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
     *
     * log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
     * overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
     * ```
     * @example spawnItem.ts
     * ```typescript
     * const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.Feather, 1);
     *
     * overworld.spawnItem(featherItem, targetLocation);
     * log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
     * ```
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @beta
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     * @param molangVariables
     * A set of optional, customizable variables that can be
     * adjusted for this particle.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnParticle.ts
     * ```typescript
     *   for (let i = 0; i < 100; i++) {
     *     const molang = new mc.MolangVariableMap();
     *
     *     molang.setColorRGB("variable.color", { red: Math.random(), green: Math.random(), blue: Math.random(), alpha: 1 });
     *
     *     let newLocation = {
     *       x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
     *       y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
     *       z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
     *     };
     *     overworld.spawnParticle("minecraft:colored_flame_particle", newLocation, molang);
     *   }
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
}

/**
 * @beta
 * Represents a type of dimension.
 */
export class DimensionType {
    private constructor();
    /**
     * @remarks
     * Identifier of the dimension type.
     *
     */
    readonly typeId: string;
}

/**
 * @beta
 * Used for accessing all available dimension types.
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves a dimension type using a string-based identifier.
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * Retrieves an array of all dimension types.
     *
     */
    static getAll(): DimensionType[];
}

/**
 * @beta
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     *
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Gets the player-friendly name of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * Gets the entire specified duration, in ticks, of this
     * effect. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets the type id of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * @remarks
     * Returns whether an effect instance is available for use in
     * this context.
     *
     */
    isValid(): boolean;
}

/**
 * @beta
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddAfterEvent {
    private constructor();
    /**
     * @remarks
     * Additional properties and details of the effect.
     *
     * This property can't be edited in read-only mode.
     *
     */
    effect: Effect;
    /**
     * @remarks
     * Entity that the effect is being added to.
     *
     * This property can't be edited in read-only mode.
     *
     */
    entity: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an effect is added
     * to an entity.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EffectAddAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * When set to true will cancel the event.
     *
     */
    cancel: boolean;
    duration: number;
    /**
     * @remarks
     * The type of the effect that is being added.
     *
     */
    readonly effectType: string;
    /**
     * @remarks
     * Entity that the effect is being added to.
     *
     */
    readonly entity: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an effect is added
     * to an entity.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void;
}

/**
 * @beta
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectType {
    private constructor();
    /**
     * @remarks
     * Identifier name of this effect type.
     *
     * @returns
     * Identifier of the effect type.
     */
    getName(): string;
}

/**
 * @beta
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectTypes {
    private constructor();
    /**
     * @remarks
     * Effect type for the given identifier.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Effect type for the given identifier or undefined if the
     * effect does not exist.
     */
    static get(identifier: string): EffectType | undefined;
    /**
     * @remarks
     * Gets all effects.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * A list of all effects.
     */
    static getAll(): EffectType[];
}

/**
 * @beta
 * This class represents a specific leveled enchantment that is
 * applied to an item.
 */
export class Enchantment {
    /**
     * @remarks
     * The level of this enchantment instance.
     *
     * This property can't be edited in read-only mode.
     *
     */
    level: number;
    /**
     * @remarks
     * The enchantment type of this instance.
     *
     */
    readonly 'type': EnchantmentType;
    /**
     * @remarks
     * Creates a new particular type of enchantment configuration.
     *
     * @param enchantmentType
     * Type of the enchantment.
     * @param level
     * Level of the enchantment.
     * @throws This function can throw errors.
     */
    constructor(enchantmentType: EnchantmentType | string, level?: number);
}

/**
 * @beta
 * This class represents a collection of enchantments that can
 * be applied to an item.
 */
export class EnchantmentList implements Iterable<Enchantment> {
    /**
     * @remarks
     * The item slot/type that this collection is applied to.
     *
     */
    readonly slot: number;
    /**
     * @remarks
     * Creates a new EnchantmentList.
     *
     */
    constructor(enchantmentSlot: number);
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<Enchantment>;
    /**
     * @remarks
     * Attempts to add the enchantment to this collection. Returns
     * true if successful.
     *
     * This function can't be called in read-only mode.
     *
     */
    addEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns whether or not the provided EnchantmentInstance can
     * be added to this collection.
     *
     * This function can't be called in read-only mode.
     *
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns an enchantment associated with a type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * If this collection has an EnchantmentInstance with type,
     * returns the level of the enchantment. Returns 0 if not
     * present.
     *
     * @throws This function can throw errors.
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): number;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<Enchantment>;
    /**
     * @remarks
     * Removes an EnchantmentInstance with type from this
     * collection if present.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

/**
 * @beta
 * This enum represents the item slot or type that an
 * enchantment can be applied to.
 */
export class EnchantmentSlot {
    private constructor();
    static readonly all = -1;
    static readonly armorFeet = 4;
    static readonly armorHead = 1;
    static readonly armorLegs = 8;
    static readonly armorTorso = 2;
    static readonly axe = 512;
    static readonly bow = 32;
    static readonly carrotStick = 8192;
    static readonly cosmeticHead = 262144;
    static readonly crossbow = 65536;
    static readonly elytra = 16384;
    static readonly fishingRod = 4096;
    static readonly flintsteel = 256;
    static readonly gArmor = 15;
    static readonly gDigging = 3648;
    static readonly gTool = 131520;
    static readonly hoe = 64;
    static readonly none = 0;
    static readonly pickaxe = 1024;
    static readonly shears = 128;
    static readonly shield = 131072;
    static readonly shovel = 2048;
    static readonly spear = 32768;
    static readonly sword = 16;
}

/**
 * @beta
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
    private constructor();
    /**
     * @remarks
     * The name of the enchantment type.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The maximum level this type of enchantment can have.
     *
     */
    readonly maxLevel: number;
}

/**
 * @beta
 * Provides a list of enchantment types.
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves an enchantment with the specified identifier.
     *
     * @param enchantmentId
     * Identifier of the enchantment.  For example,
     * "minecraft:flame".
     * @returns
     * If available, returns an EnchantmentType object that
     * represents the specified enchantment.
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
}

/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    private constructor();
    /**
     * @beta
     * @remarks
     * Dimension that the entity is currently within.
     *
     * @throws This property can throw when used.
     */
    readonly dimension: Dimension;
    /**
     * @beta
     * @remarks
     * The distance an entity has fallen. The value is reset when
     * the entity is teleported. The value is always 1 when gliding
     * with Elytra.
     *
     * @throws This property can throw when used.
     */
    readonly fallDistance: number;
    /**
     * @remarks
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it. This
     * property is accessible even if {@link Entity.isValid} is
     * false.
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Whether the entity is touching a climbable block. For
     * example, a player next to a ladder or a spider next to a
     * stone wall.
     *
     * @throws This property can throw when used.
     */
    readonly isClimbing: boolean;
    /**
     * @beta
     * @remarks
     * Whether the entity has a fall distance greater than 0, or
     * greater than 1 while gliding.
     *
     * @throws This property can throw when used.
     */
    readonly isFalling: boolean;
    /**
     * @beta
     * @remarks
     * Whether any part of the entity is inside a water block.
     *
     * @throws This property can throw when used.
     */
    readonly isInWater: boolean;
    /**
     * @beta
     * @remarks
     * Whether the entity is on top of a solid block.
     *
     * @throws This property can throw when used.
     */
    readonly isOnGround: boolean;
    /**
     * @beta
     * @remarks
     * If true, the entity is currently sleeping.
     *
     * @throws This property can throw when used.
     */
    readonly isSleeping: boolean;
    /**
     * @beta
     * @remarks
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     *
     * This property can't be edited in read-only mode.
     *
     */
    isSneaking: boolean;
    /**
     * @beta
     * @remarks
     * Whether the entity is sprinting. For example, a player using
     * the sprint action, an ocelot running away or a pig boosting
     * with Carrot on a Stick.
     *
     * @throws This property can throw when used.
     */
    readonly isSprinting: boolean;
    /**
     * @beta
     * @remarks
     * Whether the entity is in the swimming state. For example, a
     * player using the swim action or a fish in water.
     *
     * @throws This property can throw when used.
     */
    readonly isSwimming: boolean;
    /**
     * @beta
     * @remarks
     * Whether the entity reference that you have is valid or not.
     * For example, an entity may be unloaded if it moves into a
     * chunk that is unloaded, but may be reactivated if the chunk
     * it is within gets reloaded.
     *
     */
    readonly lifetimeState: EntityLifetimeState;
    /**
     * @beta
     * @remarks
     * Current location of the entity.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @beta
     * @remarks
     * Given name of the entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    nameTag: string;
    /**
     * @beta
     * @remarks
     * Returns a scoreboard identity that represents this entity.
     * Will remain valid when the entity is killed.
     *
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @beta
     * @remarks
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking.
     *
     * @throws This property can throw when used.
     */
    readonly target: Entity;
    /**
     * @remarks
     * Identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     */
    readonly typeId: string;
    /**
     * @beta
     * @remarks
     * Adds or updates an effect, like poison, to the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply. There are
     * 20 ticks per second. Use {@link TicksPerSecond} constant to
     * convert between ticks and seconds. The value must be within
     * the range [0, 20000000].
     * @param options
     * Additional options for the effect.
     * @returns
     * Returns nothing if the effect was added or updated
     * successfully. This can throw an error if the duration or
     * amplifier are outside of the valid ranges, or if the effect
     * does not exist.
     * @throws This function can throw errors.
     * @example addEffect.js
     * ```typescript
     * const villagerId = 'minecraft:villager_v2<minecraft:ageable_grow_up>';
     * const villagerLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
     * const villager = test.spawn(villagerId, villagerLoc);
     * const duration = 20;
     *
     * villager.addEffect(EffectTypes.get('poison'), duration, { amplifier: 1 });
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   const fox = overworld.spawnEntity("minecraft:fox", {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *
     *   fox.addEffect("speed", 10, {
     *     amplifier: 2,
     *   });
     *   log("Created a fox.");
     *
     *   const wolf = overworld.spawnEntity("minecraft:wolf", {
     *     x: targetLocation.x + 4,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *   wolf.addEffect("slowness", 10, {
     *     amplifier: 2,
     *   });
     *   wolf.isSneaking = true;
     *   log("Created a sneaking wolf.", 1);
     * ```
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void;
    /**
     * @beta
     * @remarks
     * Adds a specified tag to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Content of the tag to add. The tag must be less than 256
     * characters.
     * @returns
     * Returns true if the tag was added successfully. This can
     * fail if the tag already exists on the entity.
     * @throws This function can throw errors.
     * @example tagsQuery.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     let mobTypeId = mobs[i % mobs.length];
     *     let entity = overworld.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag("mobparty." + mobTypeId);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     tags: ["mobparty.skeleton"],
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * ```
     */
    addTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Applies a set of damage to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Amount of damage to apply.
     * @param options
     * Additional options about the source of damage, which may add
     * additional effects or spur additional behaviors on this
     * entity.
     * @returns
     * Whether the entity takes any damage. This can return false
     * if the entity is invulnerable or if the damage applied is
     * less than or equal to 0.
     * @throws This function can throw errors.
     * @example applyDamageThenHeal.ts
     * ```typescript
     *   const skelly = overworld.spawnEntity("minecraft:skeleton", targetLocation);
     *
     *   skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton
     *
     *   mc.system.runTimeout(() => {
     *     let health = skelly.getComponent("health") as mc.EntityHealthComponent;
     *     log("Skeleton health before heal: " + health.currentValue);
     *     health.resetToMaxValue();
     *     log("Skeleton health after heal: " + health.currentValue);
     *   }, 20);
     * ```
     * @example applyWither.js
     * ```js
     * import { world, EntityDamageCause } from "@minecraft/server";
     * const player = world.getAllPlayers()[0];
     * player.applyDamage(1000, {
     *     cause: EntityDamageCause.wither,
     * });
     * ```
     * @example damageEntity.js
     * ```js
     * const damageApplied = entity.applyDamage(10);
     * console.log(`Damage applied: ${damageApplied}`);
     * ```
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @beta
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param vector
     * Impulse vector.
     * @throws This function can throw errors.
     * @example applyImpulse.ts
     * ```typescript
     *   const zombie = overworld.spawnEntity("minecraft:zombie", targetLocation);
     *
     *   zombie.clearVelocity();
     *
     *   // throw the zombie up in the air
     *   zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * ```
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @beta
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param directionX
     * X direction in horizontal plane.
     * @param directionZ
     * Z direction in horizontal plane.
     * @param horizontalStrength
     * Knockback strength for the horizontal vector.
     * @param verticalStrength
     * Knockback strength for the vertical vector.
     * @throws This function can throw errors.
     * @example bounceSkeletons.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     overworld.spawnEntity(mobs[i % mobs.length], targetLocation);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     type: "skeleton",
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.applyKnockback(0, 0, 0, 1);
     *   }
     * ```
     */
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    /**
     * @beta
     * @throws This function can throw errors.
     */
    clearDynamicProperties(): void;
    /**
     * @beta
     * @remarks
     * Sets the current velocity of the Entity to zero. Note that
     * this method may not have an impact on Players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example applyImpulse.ts
     * ```typescript
     *   const zombie = overworld.spawnEntity("minecraft:zombie", targetLocation);
     *
     *   zombie.clearVelocity();
     *
     *   // throw the zombie up in the air
     *   zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * ```
     */
    clearVelocity(): void;
    /**
     * @beta
     * @remarks
     * Extinguishes the fire if the entity is on fire. Note that
     * you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * This function can't be called in read-only mode.
     *
     * @param useEffects
     * Whether to show any visual effects connected to the
     * extinguishing.
     * @returns
     * Returns whether the entity was on fire.
     * @throws This function can throw errors.
     * @example setOnFire.ts
     * ```typescript
     *   const skelly = overworld.spawnEntity("minecraft:skeleton", targetLocation);
     *
     *   skelly.setOnFire(20, true);
     *
     *   mc.system.runTimeout(() => {
     *     let onfire = skelly.getComponent("onfire") as mc.EntityOnFireComponent;
     *     log(onfire.onFireTicksRemaining + " fire ticks remaining.");
     *
     *     skelly.extinguishFire(true);
     *     log("Never mind. Fire extinguished.");
     *   }, 20);
     * ```
     * @example teleport.ts
     * ```typescript
     *   const cow = overworld.spawnEntity("minecraft:cow", targetLocation);
     *
     *   mc.system.runTimeout(() => {
     *     cow.teleport(
     *       { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 },
     *       {
     *         facingLocation: targetLocation,
     *       }
     *     );
     *   }, 20);
     * ```
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     * @throws This function can throw errors.
     * @example facingBlock.js
     * ```js
     * const blockHit = entity.getBlockFromViewDirection();
     *
     * if (blockHit) {
     *     console.log("Block Hit:");
     *     console.log("Block:", blockHit.block);
     *     console.log("Face:", blockHit.face);
     *     console.log("Face Location:", JSON.stringify(blockHit.faceLocation));
     * } else {
     *     console.log("No block in view direction.");
     * }
     * ```
     * @example setBedrock.js
     * ```js
     * import { BlockPermutation, world } from "@minecraft/server";
     *
     * const entity = world
     *     .getDimension("overworld")
     *     .spawnEntity("minecraft:fox", { x: 0, y: 0, z: 0 });
     * const blockHit = entity.getBlockFromViewDirection();
     *
     * if (blockHit) {
     *     blockHit.block.setPermutation(
     *         BlockPermutation.resolve("minecraft:bedrock")
     *     );
     * } else {
     *     console.log("No block in view direction.");
     * }
     * ```
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @beta
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:health').
     * If no namespace prefix is specified, 'minecraft:' is
     * assumed. Available component IDs can be found as part of the
     * {@link EntityComponentTypes} enum.
     * @returns
     * Returns the component if it exists on the entity, otherwise
     * undefined.
     * @example getEntityHealthComponent.js
     * ```js
     * const getEntityHealthComponent = entity.getComponent("health");
     * getEntityHealthComponent.currentValue;
     * getEntityHealthComponent.defaultValue;
     * getEntityHealthComponent.effectiveMax;
     * getEntityHealthComponent.effectiveMin;
     * getEntityHealthComponent.resetToDefaultValue();
     * getEntityHealthComponent.resetToMaxValue();
     * getEntityHealthComponent.resetToMinValue();
     * getEntityHealthComponent.setCurrentValue(100); // Assuming 100 as an example value
     *
     * // Custom function to check if the health attribute is within a valid range
     * function isValidHealthValue(value) {
     *     return (
     *         value >= getEntityHealthComponent.effectiveMin &&
     *         value <= getEntityHealthComponent.effectiveMax
     *     );
     * }
     *
     * // Example usage of the custom isValidHealthValue function
     * const newHealthValue = 80;
     * if (isValidHealthValue(newHealthValue)) {
     *     getEntityHealthComponent.setCurrentValue(newHealthValue);
     * }
     * ```
     * @example getEntityInventoryComponent.js
     * ```js
     * const getEntityInventoryComponent = entity.getComponent("inventory");
     * getEntityInventoryComponent.additionalSlotsPerStrength;
     * getEntityInventoryComponent.canBeSiphonedFrom;
     * const inventoryContainer = getEntityInventoryComponent.container;
     * getEntityInventoryComponent.containerType;
     * getEntityInventoryComponent.inventorySize;
     * getEntityInventoryComponent.private;
     * getEntityInventoryComponent.restrictToOwner;
     * getEntityInventoryComponent.isValid();
     *
     * // Custom function to add an item to the inventory
     * function addItemToInventory(itemStack) {
     *     return inventoryContainer.addItem(itemStack);
     * }
     *
     * // Custom function to move an item within the inventory
     * function moveItemWithinInventory(fromSlot, toSlot) {
     *     inventoryContainer.moveItem(fromSlot, toSlot, inventoryContainer);
     * }
     *
     * // Custom function to transfer an item from inventory to another container
     * function transferItemToContainer(fromSlot, targetContainer) {
     *     return inventoryContainer.transferItem(fromSlot, targetContainer);
     * }
     *
     * // Example usage of the custom functions
     * const newItemStack = new ItemStack("apple", 10); // Assuming "apple" is a valid item
     * const addedItem = addItemToInventory(newItemStack);
     * if (addedItem) {
     *     console.log("Item added to inventory:", addedItem);
     * }
     *
     * const sourceSlot = 2;
     * const destinationSlot = 5;
     * moveItemWithinInventory(sourceSlot, destinationSlot);
     *
     * const targetContainer = someOtherContainer; // Assuming 'someOtherContainer' is an instance of another container
     * const transferredItem = transferItemToContainer(0, targetContainer);
     * if (transferredItem) {
     *     console.log("Item transferred to another container:", transferredItem);
     * }
     * ```
     * @example getEntityItemComponent.js
     * ```js
     * const getEntityItemComponent = itemEntity.getComponent("item");
     * getEntityItemComponent.itemStack;
     * getEntityItemComponent.isValid();
     * ```
     */
    getComponent<T extends keyof EntityComponentTypeMap>(componentId: T): EntityComponentTypeMap[T] | undefined;
    /**
     * @beta
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     *
     * @returns
     * Returns all components that are both present on this entity
     * and supported by the API.
     * @example getComponents.js
     * ```js
     * const components = entity.getComponents();
     * console.log(
     *     `Number of components: ${components.length}: ${components.map(
     *         (component) => component.typeId
     *     )}`
     * );
     * ```
     */
    getComponents(): EntityComponent[];
    /**
     * @beta
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @beta
     * @throws This function can throw errors.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @beta
     * @throws This function can throw errors.
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @beta
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, undefined if the effect is not present, or throws an
     * error if the effect does not exist.
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Effect object for the specified effect, undefined if the
     * effect is not present, or throws an error if the effect does
     * not exist.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @beta
     * @remarks
     * Returns a set of effects applied to this entity.
     *
     * @returns
     * List of effects.
     * @throws This function can throw errors.
     */
    getEffects(): Effect[];
    /**
     * @beta
     * @remarks
     * Gets the entities that this entity is looking at by
     * performing a ray cast from the view of this entity.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns a set of entities from the direction that this
     * entity is looking at.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @beta
     * @remarks
     * Returns the current location of the head component of this
     * entity.
     *
     * @returns
     * Returns the current location of the head component of this
     * entity.
     * @throws This function can throw errors.
     */
    getHeadLocation(): Vector3;
    /**
     * @beta
     * @remarks
     * Gets an entity Property value. If the property was set using
     * the setProperty function within the same tick, the updated
     * value will not be reflected until the subsequent tick.
     *
     * @param identifier
     * The entity Property identifier.
     * @returns
     * Returns the current property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * Throws if the entity is invalid.
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Returns the current rotation component of this entity.
     *
     * @returns
     * Returns a Vec2 containing the rotation of this entity (in
     * degrees).
     * @throws This function can throw errors.
     */
    getRotation(): Vector2;
    /**
     * @beta
     * @remarks
     * Returns all tags associated with an entity.
     *
     * @returns
     * Returns the current rotation component of this entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     * Returns the current velocity vector of the entity.
     *
     * @returns
     * Returns the current velocity vector of the entity.
     * @throws This function can throw errors.
     * @example getFireworkVelocity.ts
     * ```typescript
     *   const fireworkRocket = overworld.spawnEntity("minecraft:fireworks_rocket", targetLocation);
     *
     *   mc.system.runTimeout(() => {
     *     let velocity = fireworkRocket.getVelocity();
     *
     *     log("Velocity of firework is: (x: " + velocity.x + ", y:" + velocity.y + ", z:" + velocity.z + ")");
     *   }, 5);
     * ```
     */
    getVelocity(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns the current view direction of the entity.
     *
     * @returns
     * Returns the current view direction of the entity.
     * @throws This function can throw errors.
     */
    getViewDirection(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     * @returns
     * Returns true if the specified component is present on this
     * entity.
     * @example hasComponents.js
     * ```js
     * entity.hasComponent("tameable");
     * entity.hasComponent("inventory");
     * entity.hasComponent("addrider");
     * entity.hasComponent("is_tamed");
     * ```
     */
    hasComponent(componentId: string): boolean;
    /**
     * @beta
     * @remarks
     * Returns whether an entity has a particular tag.
     *
     * @param tag
     * Identifier of the tag to test for.
     * @returns
     * Returns whether an entity has a particular tag.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Returns whether the entity can be manipulated by script. A
     * Player is considered valid when it's EntityLifetimeState is
     * set to Loaded.
     *
     * @returns
     * Whether the entity is valid.
     */
    isValid(): boolean;
    /**
     * @beta
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns true if entity can be killed (even if it is already
     * dead), otherwise it returns false.
     * @throws This function can throw errors.
     * @example tagsQuery.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     let mobTypeId = mobs[i % mobs.length];
     *     let entity = overworld.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag("mobparty." + mobTypeId);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     tags: ["mobparty.skeleton"],
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * ```
     */
    kill(): boolean;
    /**
     * @beta
     * @throws This function can throw errors.
     */
    matches(options: EntityQueryOptions): boolean;
    /**
     * @beta
     * @remarks
     * Cause the entity to play the given animation.
     *
     * This function can't be called in read-only mode.
     *
     * @param animationName
     * The animation identifier. e.g. animation.creeper.swelling
     * @param options
     * Additional options to control the playback and transitions
     * of the animation.
     * @throws This function can throw errors.
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @beta
     * @remarks
     * Immediately removes the entity from the world. The removed
     * entity will not perform a death animation or drop loot upon
     * removal.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    remove(): void;
    /**
     * @beta
     * @remarks
     * Removes the specified EffectType on the entity, or returns
     * false if the effect is not present.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Returns true if the effect has been removed. Returns false
     * if the effect is not found or does not exist.
     * @throws This function can throw errors.
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @beta
     * @remarks
     * Removes a specified tag from an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Content of the tag to remove.
     * @returns
     * Returns whether the tag existed on the entity.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Resets an Entity Property back to its default value, as
     * specified in the Entity's definition. This property change
     * is not applied until the next tick.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * The Entity Property identifier.
     * @returns
     * Returns the default property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    resetProperty(identifier: string): boolean | number | string;
    /**
     * @beta
     * @remarks
     * Runs a synchronous command on the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * The command string. Note: This should not include a leading
     * forward slash.
     * @returns
     * A command result containing whether the command was
     * successful.
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link Error}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity. Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * Sets a specified property to a value.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @beta
     * @remarks
     * Sets an entity on fire (if it is not in water or rain). Note
     * that you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * This function can't be called in read-only mode.
     *
     * @param seconds
     * Length of time to set the entity on fire.
     * @param useEffects
     * Whether side-effects should be applied (e.g. thawing freeze)
     * and other conditions such as rain or fire protection should
     * be taken into consideration.
     * @returns
     * Whether the entity was set on fire. This can fail if seconds
     * is less than or equal to zero, the entity is wet or the
     * entity is immune to fire.
     * @throws This function can throw errors.
     * @example setOnFire.ts
     * ```typescript
     *   const skelly = overworld.spawnEntity("minecraft:skeleton", targetLocation);
     *
     *   skelly.setOnFire(20, true);
     *
     *   mc.system.runTimeout(() => {
     *     let onfire = skelly.getComponent("onfire") as mc.EntityOnFireComponent;
     *     log(onfire.onFireTicksRemaining + " fire ticks remaining.");
     *
     *     skelly.extinguishFire(true);
     *     log("Never mind. Fire extinguished.");
     *   }, 20);
     * ```
     * @example teleport.ts
     * ```typescript
     *   const cow = overworld.spawnEntity("minecraft:cow", targetLocation);
     *
     *   mc.system.runTimeout(() => {
     *     cow.teleport(
     *       { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 },
     *       {
     *         facingLocation: targetLocation,
     *       }
     *     );
     *   }, 20);
     * ```
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Sets an Entity Property to the provided value. This property
     * change is not applied until the next tick.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * The Entity Property identifier.
     * @param value
     * The property value. The provided type must be compatible
     * with the type specified in the entity's definition.
     * @throws
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the
     * property type.
     * Throws if the provided value is outside the expected range
     * (int, float properties).
     * Throws if the provided string value does not match the set
     * of accepted enum values (enum properties
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @beta
     * @remarks
     * Sets the main rotation of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param rotation
     * The x and y rotation of the entity (in degrees). For most
     * mobs, the x rotation controls the head tilt and the y
     * rotation controls the body rotation.
     * @throws This function can throw errors.
     */
    setRotation(rotation: Vector2): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected entity to a new location
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * New location for the entity.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @throws This function can throw errors.
     * @example teleportMovement.ts
     * ```typescript
     *   const pig = overworld.spawnEntity("minecraft:pig", targetLocation);
     *
     *   let inc = 1;
     *   let runId = mc.system.runInterval(() => {
     *     pig.teleport(
     *       { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
     *       {
     *         facingLocation: targetLocation,
     *       }
     *     );
     *
     *     if (inc > 100) {
     *       mc.system.clearRun(runId);
     *     }
     *     inc++;
     *   }, 4);
     * ```
     * @example teleport.js
     * ```js
     * player.teleport(
     *     { x: 0, y: 0, z: 0 },
     *     { dimension: world.getDimension("nether") }
     * );
     * ```
     * @example teleportFacing.js
     * ```js
     * player.teleport(
     *     { x: 0, y: 0, z: 0 },
     *     {
     *         dimension: world.getDimension("nether"),
     *         teleportFacing: { x: 100, y: 100, z: 100 },
     *     }
     * );
     * ```
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @beta
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     *
     * This function can't be called in read-only mode.
     *
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws
     * If the event is not defined in the definition of the entity,
     * an error will be thrown.
     * @example triggerEvent.ts
     * ```typescript
     *   const creeper = overworld.spawnEntity("minecraft:creeper", targetLocation);
     *
     *   creeper.triggerEvent("minecraft:start_exploding_forced");
     * ```
     */
    triggerEvent(eventName: string): void;
    /**
     * @beta
     * @remarks
     * Attempts to try a teleport, but may not complete the
     * teleport operation (for example, if there are blocks at the
     * destination.)
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * Location to teleport the entity to.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @returns
     * Returns whether the teleport succeeded. This can fail if the
     * destination chunk is unloaded or if the teleport would
     * result in intersecting with blocks.
     * @throws This function can throw errors.
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

/**
 * @beta
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 * @example getEntityAddRiderComponent.js
 * ```js
 * const getAddRiderComponent = entity.getComponent("addrider");
 * getAddRiderComponent.entityType;
 * getAddRiderComponent.spawnEvent;
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     *
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * @remarks
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}

/**
 * @beta
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 * @example getEntityAgeableComponent.js
 * ```js
 * const getAgeableComponent = entity.getComponent("ageable");
 * getAgeableComponent.duration;
 * const growUp = getAgeableComponent.growUp;
 * getAgeableComponent.getDropItems();
 * getAgeableComponent.getFeedItems();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * Event to run when this entity grows up.
     *
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * List of items that the entity drops when it grows up.
     *
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /**
     * @remarks
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     *
     * @throws This function can throw errors.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}

/**
 * @beta
 * This is a base abstract class for any entity component that
 * centers around a number and can have a minimum, maximum, and
 * default defined value.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of this attribute for this instance.
     *
     * @throws This property can throw when used.
     */
    readonly currentValue: number;
    /**
     * @remarks
     * Returns the default defined value for this attribute.
     *
     * @throws This property can throw when used.
     */
    readonly defaultValue: number;
    /**
     * @remarks
     * Returns the effective max of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     */
    readonly effectiveMax: number;
    /**
     * @remarks
     * Returns the effective min of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     */
    readonly effectiveMin: number;
    /**
     * @remarks
     * Resets the current value of this attribute to the defined
     * default value.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the current value of this attribute to the maximum
     * defined value.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the current value of this attribute to the minimum
     * defined value.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of this attribute.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCurrentValue(value: number): boolean;
}

/**
 * @beta
 * Base class for a family of entity movement events.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Maximum turn rate for this movement modality of the mob.
     *
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
}

/**
 * @beta
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 * @example getEntityBreathableComponent.js
 * ```js
 * const getBreathableComponent = entity.getComponent("breathable");
 * getBreathableComponent.breathesAir;
 * getBreathableComponent.breathesLava;
 * getBreathableComponent.breathesSolids;
 * getBreathableComponent.breathesWater;
 * getBreathableComponent.generatesBubbles;
 * getBreathableComponent.inhaleTime;
 * getBreathableComponent.suffocateTime;
 * getBreathableComponent.totalSupply;
 * getBreathableComponent.getBreatheBlocks();
 * getBreathableComponent.getNonBreatheBlocks();
 * getBreathableComponent.setAirSupply(100); // Assuming 100 as an example value
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * If true, this entity can breathe in air.
     *
     * @throws This property can throw when used.
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in lava.
     *
     * @throws This property can throw when used.
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in solid blocks.
     *
     * @throws This property can throw when used.
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in water.
     *
     * @throws This property can throw when used.
     */
    readonly breathesWater: boolean;
    /**
     * @remarks
     * If true, this entity will have visible bubbles while in
     * water.
     *
     * @throws This property can throw when used.
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * Time in seconds to recover breath to maximum.
     *
     * @throws This property can throw when used.
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * Time in seconds between suffocation damage.
     *
     * @throws This property can throw when used.
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * Time in seconds the entity can hold its breath.
     *
     * @throws This property can throw when used.
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * List of blocks this entity can breathe in, in addition to
     * the separate properties for classes of blocks.
     *
     * @throws This function can throw errors.
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * List of blocks this entity can't breathe in.
     *
     * @throws This function can throw errors.
     */
    getNonBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * Sets the current air supply of the entity.
     *
     * @param value
     * New air supply for the entity.
     * @throws This function can throw errors.
     */
    setAirSupply(value: number): void;
}

/**
 * @beta
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_climb';
}

/**
 * @beta
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}

/**
 * @beta
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_power_jump';
}

/**
 * @beta
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (e.g., sheep, llama,
 * shulker).
 * @example getEntityColorComponent.js
 * ```js
 * const getEntityColorComponent = entity.getComponent("color");
 * getEntityColorComponent.value;
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular color.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}

/**
 * @beta
 * Base class for downstream entity components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
    /**
     * @beta
     * @remarks
     * The entity that owns this component.
     *
     */
    readonly entity: Entity;
}

/**
 * @beta
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * The amount by which an entity's age will increase when fed
     * this item. Values usually range between 0 and 1.
     *
     */
    readonly growth: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
}

/**
 * @beta
 * Contains data related to the death of an entity in the game.
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * If specified, provides more information on the source of
     * damage that caused the death of this entity.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * Now-dead entity object.
     *
     */
    readonly deadEntity: Entity;
}

/**
 * @beta
 * Supports registering for an event that fires after an entity
 * has died.
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to an event that fires when an entity dies.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function to call when an entity dies.
     * @param options
     * Additional filtering options for when the subscription
     * fires.
     * @returns
     * Returns the closure that can be used in future downstream
     * calls to unsubscribe.
     */
    subscribe(
        callback: (arg: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * Stops this event from calling your function when an entity
     * dies.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void;
}

/**
 * @beta
 * Provides access to a mob's equipment slots. This component
 * exists for all mob entities.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:equippable';
    /**
     * @remarks
     * Gets the equipped item for the given EquipmentSlot.
     *
     * This function can't be called in read-only mode.
     *
     * @param equipmentSlot
     * The equipment slot. e.g. "head", "chest", "offhand"
     * @returns
     * Returns the item equipped to the given EquipmentSlot. If
     * empty, returns undefined.
     * @throws This function can throw errors.
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @beta
     * @remarks
     * Gets the ContainerSlot corresponding to the given
     * EquipmentSlot.
     *
     * This function can't be called in read-only mode.
     *
     * @param equipmentSlot
     * The equipment slot. e.g. "head", "chest", "offhand".
     * @returns
     * Returns the ContainerSlot corresponding to the given
     * EquipmentSlot.
     * @throws This function can throw errors.
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * Replaces the item in the given EquipmentSlot.
     *
     * This function can't be called in read-only mode.
     *
     * @param equipmentSlot
     * The equipment slot. e.g. "head", "chest", "offhand".
     * @param itemStack
     * The item to equip. If undefined, clears the slot.
     * @throws This function can throw errors.
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}

/**
 * @beta
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:fire_immune';
}

/**
 * @beta
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:floats_in_liquid';
}

/**
 * @beta
 * Represents the flying speed of an entity.
 * @example getEntityFlyingSpeedComponent.js
 * ```js
 * const getEntityFlyingSpeedComponent = entity.getComponent("flying_speed");
 * getEntityFlyingSpeedComponent.value;
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of the flying speed of the associated entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:flying_speed';
}

/**
 * @beta
 * Defines how much friction affects this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of the friction modifier of the associated
     * entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}

/**
 * @beta
 * Sets the offset from the ground that the entity is actually
 * at.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular ground offset. Note that this value
     * is effectively read only; setting the ground offset value
     * will not have an impact on the related entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:ground_offset';
}

/**
 * @beta
 * Defines the interactions with this entity for healing it.
 * @example getEntityHealableComponent.js
 * ```js
 * const getEntityHealableComponent = entity.getComponent("healable");
 * getEntityHealableComponent.filters;
 * getEntityHealableComponent.forceUse;
 * getEntityHealableComponent.getFeedItems();
 * getEntityHealableComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @beta
     * @remarks
     * A set of filters that healable items might be associated
     * with.
     *
     * @throws This property can throw when used.
     */
    readonly filters: FilterGroup;
    /**
     * @remarks
     * Determines if an item can be used regardless of the entity
     * being at full health.
     *
     * @throws This property can throw when used.
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * A set of items that can specifically heal this entity.
     *
     * @returns
     * Entity that this component is associated with.
     * @throws This function can throw errors.
     */
    getFeedItems(): FeedItem[];
}

/**
 * @beta
 * Contains information related to an entity when its health
 * changes. Warning: don't change the health of an entity in
 * this event, or it will cause an infinite loop!
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity whose health changed.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * New health value of the entity.
     *
     */
    readonly newValue: number;
    /**
     * @remarks
     * Old health value of the entity.
     *
     */
    readonly oldValue: number;
}

/**
 * @beta
 * Manages callbacks that are connected to when the health of
 * an entity changes.
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the health of an
     * entity changes.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when the health of an
     * entity changes.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void;
}

/**
 * @beta
 * Defines the health properties of an entity.
 * @example getEntityHealthComponent.js
 * ```js
 * const getEntityHealthComponent = entity.getComponent("health");
 * getEntityHealthComponent.currentValue;
 * getEntityHealthComponent.defaultValue;
 * getEntityHealthComponent.effectiveMax;
 * getEntityHealthComponent.effectiveMin;
 * getEntityHealthComponent.resetToDefaultValue();
 * getEntityHealthComponent.resetToMaxValue();
 * getEntityHealthComponent.resetToMinValue();
 * getEntityHealthComponent.setCurrentValue(100); // Assuming 100 as an example value
 *
 * // Custom function to check if the health attribute is within a valid range
 * function isValidHealthValue(value) {
 *     return (
 *         value >= getEntityHealthComponent.effectiveMin &&
 *         value <= getEntityHealthComponent.effectiveMax
 *     );
 * }
 *
 * // Example usage of the custom isValidHealthValue function
 * const newHealthValue = 80;
 * if (isValidHealthValue(newHealthValue)) {
 *     getEntityHealthComponent.setCurrentValue(newHealthValue);
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:health';
}

/**
 * @beta
 * Contains information related to an entity hitting a block.
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * Face of the block that was hit.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Entity that made the attack.
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * Block that was hit by the attack.
     *
     */
    readonly hitBlock: Block;
}

/**
 * @beta
 * Manages callbacks that are connected to when an entity hits
 * a block.
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity hits a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that made a hit/melee attack.
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * Entity that was hit by the attack.
     *
     */
    readonly hitEntity: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits
     * another entity.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity makes a
     * melee attack on another entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an entity getting hurt.
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * Describes the amount of damage caused.
     *
     */
    readonly damage: number;
    /**
     * @remarks
     * Source information on the entity that may have applied this
     * damage.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * Entity that was hurt.
     *
     */
    readonly hurtEntity: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity is hurt.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: EntityHurtAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is hurt.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void;
}

/**
 * @beta
 * Defines this entity's inventory properties.
 * @example getEntityInventoryComponent.js
 * ```js
 * const getEntityInventoryComponent = entity.getComponent("inventory");
 * getEntityInventoryComponent.additionalSlotsPerStrength;
 * getEntityInventoryComponent.canBeSiphonedFrom;
 * const inventoryContainer = getEntityInventoryComponent.container;
 * getEntityInventoryComponent.containerType;
 * getEntityInventoryComponent.inventorySize;
 * getEntityInventoryComponent.private;
 * getEntityInventoryComponent.restrictToOwner;
 * getEntityInventoryComponent.isValid();
 *
 * // Custom function to add an item to the inventory
 * function addItemToInventory(itemStack) {
 *     return inventoryContainer.addItem(itemStack);
 * }
 *
 * // Custom function to move an item within the inventory
 * function moveItemWithinInventory(fromSlot, toSlot) {
 *     inventoryContainer.moveItem(fromSlot, toSlot, inventoryContainer);
 * }
 *
 * // Custom function to transfer an item from inventory to another container
 * function transferItemToContainer(fromSlot, targetContainer) {
 *     return inventoryContainer.transferItem(fromSlot, targetContainer);
 * }
 *
 * // Example usage of the custom functions
 * const newItemStack = new ItemStack("apple", 10); // Assuming "apple" is a valid item
 * const addedItem = addItemToInventory(newItemStack);
 * if (addedItem) {
 *     console.log("Item added to inventory:", addedItem);
 * }
 *
 * const sourceSlot = 2;
 * const destinationSlot = 5;
 * moveItemWithinInventory(sourceSlot, destinationSlot);
 *
 * const targetContainer = someOtherContainer; // Assuming 'someOtherContainer' is an instance of another container
 * const transferredItem = transferItemToContainer(0, targetContainer);
 * if (transferredItem) {
 *     console.log("Item transferred to another container:", transferredItem);
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Number of slots that this entity can gain per extra
     * strength.
     *
     * @throws This property can throw when used.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * If true, the contents of this inventory can be removed by a
     * hopper.
     *
     * @throws This property can throw when used.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * Defines the container for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly container: Container;
    /**
     * @remarks
     * Type of container this entity has.
     *
     * @throws This property can throw when used.
     */
    readonly containerType: string;
    /**
     * @remarks
     * Number of slots the container has.
     *
     * @throws This property can throw when used.
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * If true, the entity will not drop it's inventory on death.
     *
     * @throws This property can throw when used.
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     *
     * @throws This property can throw when used.
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * @beta
 * When added, this component signifies that this entity is a
 * baby.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_baby';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * charged.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_charged';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_chested';
}

/**
 * @beta
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}

/**
 * @beta
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}

/**
 * @beta
 * When added, this component signifies that this entity this
 * currently on fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_ignited';
}

/**
 * @beta
 * When added, this component signifies that this entity is an
 * illager captain.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently saddled.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_saddled';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently shaking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_shaking';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently sheared.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_sheared';
}

/**
 * @beta
 * When added, this component signifies that this entity can be
 * stacked.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stackable';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently stunned.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stunned';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently tamed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_tamed';
}

/**
 * @beta
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 * @example getEntityItemComponent.js
 * ```js
 * const getEntityItemComponent = itemEntity.getComponent("item");
 * getEntityItemComponent.itemStack;
 * getEntityItemComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Item stack represented by this entity in the world.
     *
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}

/**
 * @beta
 * This type is usable for iterating over a set of entities.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class EntityIterator implements Iterable<Entity> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<Entity>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Entity in the iteration.
     *
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<Entity>;
}

/**
 * @beta
 * Defines the base movement speed in lava of this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:lava_movement';
}

/**
 * @beta
 * Allows this entity to be leashed and defines the conditions
 * and events for this entity when is leashed.
 * @example getEntityLeashableComponent.js
 * ```js
 * const getEntityLeashableComponent = entity.getComponent("leashable");
 * getEntityLeashableComponent.softDistance;
 * getEntityLeashableComponent.leash(leashHolderEntity); // Assuming you have an 'leashHolderEntity' instance
 * getEntityLeashableComponent.unleash();
 * getEntityLeashableComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     *
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * Leashes this entity to another entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param leashHolder
     * The entity to leash this entity to.
     * @throws This function can throw errors.
     */
    leash(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unleash(): void;
}

/**
 * @beta
 * Contains data related to an entity loaded within the world.
 * This could happen when an unloaded chunk is reloaded, or
 * when an entity changes dimensions.
 */
export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that was loaded.
     *
     * This property can't be edited in read-only mode.
     *
     */
    entity: Entity;
}

/**
 * @beta
 * Registers a script-based event handler for handling what
 * happens when an entity loads.
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity loads.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function that handles the load event.
     */
    subscribe(callback: (arg: EntityLoadAfterEvent) => void): (arg: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityLoadAfterEvent) => void): void;
}

/**
 * @beta
 * Additional variant value. Can be used to further
 * differentiate variants.
 * @example getEntityMarkVariantComponent.js
 * ```js
 * const getEntityMarkVariantComponent = entity.getComponent("mark_variant");
 * getEntityMarkVariantComponent.value;
 * getEntityMarkVariantComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the mark variant value for this entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:mark_variant';
}

/**
 * @beta
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMountTamingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     *
     * This function can't be called in read-only mode.
     *
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    setTamed(showParticles: boolean): void;
}

/**
 * @beta
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}

/**
 * @beta
 * This component accents the movement of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.basic';
}

/**
 * @beta
 * Defines the general movement speed of this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement';
}

/**
 * @beta
 * When added, this move control causes the mob to fly.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.fly';
}

/**
 * @beta
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.generic';
}

/**
 * @beta
 * When added, this movement control allows the mob to glide.
 * @example getEntityMovementGlideComponent.js
 * ```js
 * const getEntityMovementGlideComponent = entity.getComponent("movement.glide");
 * getEntityMovementGlideComponent.speedWhenTurning;
 * getEntityMovementGlideComponent.startSpeed;
 * getEntityMovementGlideComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * Speed in effect when the entity is turning.
     *
     * @throws This property can throw when used.
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * Start speed during a glide.
     *
     * @throws This property can throw when used.
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}

/**
 * @beta
 * When added, this move control causes the mob to hover.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.hover';
}

/**
 * @beta
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.jump';
}

/**
 * @beta
 * When added, this move control causes the mob to hop as it
 * moves.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.skip';
}

/**
 * @beta
 * When added, this move control causes the mob to sway side to
 * side giving the impression it is swimming.
 * @example getEntityMovementSwayComponent.js
 * ```js
 * const getEntityMovementSwayComponent = entity.getComponent("movement.sway");
 * getEntityMovementSwayComponent.swayAmplitude;
 * getEntityMovementSwayComponent.swayFrequency;
 * getEntityMovementSwayComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * Amplitude of the sway motion.
     *
     * @throws This property can throw when used.
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * Amount of sway frequency.
     *
     * @throws This property can throw when used.
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}

/**
 * @beta
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}

/**
 * @beta
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 * @example getEntityNavigationComponent.js
 * ```js
 * const getEntityNavigationComponent = entity.getComponent("navigation");
 * getEntityNavigationComponent.avoidDamageBlocks;
 * getEntityNavigationComponent.avoidPortals;
 * getEntityNavigationComponent.avoidSun;
 * getEntityNavigationComponent.avoidWater;
 * getEntityNavigationComponent.canBreach;
 * getEntityNavigationComponent.canBreakDoors;
 * getEntityNavigationComponent.canFloat;
 * getEntityNavigationComponent.canJump;
 * getEntityNavigationComponent.canOpenDoors;
 * getEntityNavigationComponent.canOpenIronDoors;
 * getEntityNavigationComponent.canPassDoors;
 * getEntityNavigationComponent.canPathFromAir;
 * getEntityNavigationComponent.canPathOverLava;
 * getEntityNavigationComponent.canPathOverWater;
 * getEntityNavigationComponent.canSink;
 * getEntityNavigationComponent.canSwim;
 * getEntityNavigationComponent.canWalk;
 * getEntityNavigationComponent.canWalkInLava;
 * getEntityNavigationComponent.isAmphibious;
 * getEntityNavigationComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     *
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @remarks
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     *
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * @remarks
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     *
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * @remarks
     * Tells the pathfinder to avoid water when creating a path.
     *
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     *
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     *
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can float.
     *
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can jump up blocks.
     *
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     *
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     *
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @remarks
     * Whether a path can be created through a door.
     *
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can start pathing when in the
     * air.
     *
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     *
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     *
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     *
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     *
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     *
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     *
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     *
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
}

/**
 * @beta
 * Allows this entity to generate paths by flying around the
 * air like the regular Ghast.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.float';
}

/**
 * @beta
 * Allows this entity to generate paths in the air (for
 * example, like Minecraft parrots do.)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.fly';
}

/**
 * @beta
 * Allows this entity to generate paths by walking, swimming,
 * flying and/or climbing around and jumping up and down a
 * block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.generic';
}

/**
 * @beta
 * Allows this entity to generate paths in the air (for
 * example, like the Minecraft Bees do.) Keeps them from
 * falling out of the skies and doing predictive movement.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.hover';
}

/**
 * @beta
 * Allows this entity to generate paths by walking around and
 * jumping up and down a block like regular mobs.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.walk';
}

/**
 * @beta
 * When present on an entity, this entity is on fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The number of ticks remaining before the fire goes out.
     *
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}

/**
 * @beta
 * Sets the distance through which the entity can push through.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the push through distances of this entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:push_through';
}

/**
 * @beta
 * Data for an event that happens when an entity is removed
 * from the world (for example, the entity is unloaded because
 * it is not close to players.)
 */
export class EntityRemoveAfterEvent {
    private constructor();
    /**
     * @remarks
     * Id of the entity that was removed.
     *
     */
    readonly removedEntityId: string;
    /**
     * @remarks
     * Identifier of the type of the entity removed - for example,
     * 'minecraft:skeleton'.
     *
     */
    readonly typeId: string;
}

/**
 * @beta
 * Allows registration for an event that fires when an entity
 * is removed from  the game (for example, unloaded, or a few
 * seconds after they are dead.)
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is removed from
     * the game.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function to call.
     * @param options
     * Additional filtering options for this event.
     * @returns
     * Returns a closure that can be used in subsequent unsubscribe
     * operations.
     */
    subscribe(
        callback: (arg: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes your function from subsequent calls when an
     * entity is removed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityRemoveAfterEvent) => void): void;
}

/**
 * @beta
 * Data for an event that happens when an entity is being
 * removed from the world (for example, the entity is unloaded
 * because it is not close to players.)
 */
export class EntityRemoveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * Reference to an entity that is being removed.
     *
     */
    readonly removedEntity: Entity;
}

/**
 * @beta
 * Allows registration for an event that fires when an entity
 * is being removed from  the game (for example, unloaded, or a
 * few seconds after they are dead.)
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is being
     * removed from the game.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function to call.
     * @returns
     * Returns a closure that can be used in subsequent unsubscribe
     * operations.
     */
    subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * Unsubscribes your function from subsequent calls when an
     * entity is being removed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void;
}

/**
 * @beta
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 * @example getEntityRideableComponent.js
 * ```js
 * const getEntityRideableComponent = entity.getComponent("rideable");
 * getEntityRideableComponent.controllingSeat;
 * getEntityRideableComponent.crouchingSkipInteract;
 * getEntityRideableComponent.interactText;
 * getEntityRideableComponent.pullInEntities;
 * getEntityRideableComponent.riderCanInteract;
 * getEntityRideableComponent.seatCount;
 * getEntityRideableComponent.addRider(riderEntity); // Assuming you have an 'riderEntity' instance
 * getEntityRideableComponent.ejectRider(riderEntity); // Assuming you have an 'riderEntity' instance
 * getEntityRideableComponent.ejectRiders();
 * getEntityRideableComponent.getFamilyTypes();
 * getEntityRideableComponent.getRiders();
 * getEntityRideableComponent.getSeats();
 * getEntityRideableComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Zero-based index of the seat that can used to control this
     * entity.
     *
     * @throws This property can throw when used.
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * Determines whether interactions are not supported if the
     * entity is crouching.
     *
     * @throws This property can throw when used.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     *
     * @throws This property can throw when used.
     */
    readonly interactText: string;
    /**
     * @remarks
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     *
     * @throws This property can throw when used.
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * If true, this entity will be picked when looked at by the
     * rider.
     *
     * @throws This property can throw when used.
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * Number of seats for riders defined for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * Adds an entity to this entity as a rider.
     *
     * This function can't be called in read-only mode.
     *
     * @param rider
     * Entity that will become the rider of this entity.
     * @returns
     * True if the rider entity was successfully added.
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * Ejects the specified rider of this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param rider
     * Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * Ejects all riders of this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    /**
     * @remarks
     * A string-list of entity types that this entity can support
     * as riders.
     *
     * @throws This function can throw errors.
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * Gets a list of the all the entities currently riding this
     * entity.
     *
     * @throws This function can throw errors.
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * Gets a list of positions and number of riders for each
     * position for entities riding this entity.
     *
     * @throws This function can throw errors.
     */
    getSeats(): Seat[];
}

/**
 * @beta
 * This component is added to any entity when it is riding
 * another entity.
 * @example getEntityRidingComponent.js
 * ```js
 * const getEntityRidingComponent = entity.getComponent("riding");
 * getEntityRidingComponent.entityRidingOn;
 * getEntityRidingComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The entity this entity is currently riding on.
     *
     * @throws This property can throw when used.
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = 'minecraft:riding';
}

/**
 * @beta
 * Sets the entity's visual size.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value for the scale property set on entities.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:scale';
}

/**
 * @beta
 * Skin Id value. Can be used to differentiate skins, such as
 * base skins for villagers.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns the value of the skin Id identifier of the entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:skin_id';
}

/**
 * @beta
 * Contains data related to an entity spawning within the
 * world.
 */
export class EntitySpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * Initialization cause (Spawned, Born ...).
     *
     */
    readonly cause: EntityInitializationCause;
    /**
     * @remarks
     * Entity that was spawned.
     *
     * This property can't be edited in read-only mode.
     *
     */
    entity: Entity;
}

/**
 * @beta
 * Registers a script-based event handler for handling what
 * happens when an entity spawns.
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity spawns.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function that handles the spawn event.
     * @example runEntitySpawnEvent.ts
     * ```typescript
     *   // register a new function that is called when a new entity is created.
     *   mc.world.afterEvents.entitySpawn.subscribe((entityEvent: mc.EntitySpawnAfterEvent) => {
     *     if (entityEvent && entityEvent.entity) {
     *       log(`New entity of type '${entityEvent.entity.typeId}' created!`, 1);
     *     } else {
     *       log(`The entity event didn't work as expected.`, -1);
     *     }
     *   });
     *
     *   mc.system.runTimeout(() => {
     *     createOldHorse(log, targetLocation);
     *   }, 20);
     * ```
     */
    subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void;
}

/**
 * @beta
 * Defines the entity's strength to carry items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Maximum strength of this entity, as defined in the entity
     * type definition.
     *
     * @throws This property can throw when used.
     */
    readonly max: number;
    /**
     * @remarks
     * Current value of the strength component that has been set
     * for entities.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:strength';
}

/**
 * @beta
 * Defines the rules for an entity to be tamed by the player.
 * @example getEntityTameableComponent.js
 * ```js
 * const tameable = entity.getComponent("tameable");
 * tameable.probability;
 * tameable.tame();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     *
     * @throws This property can throw when used.
     */
    readonly probability: number;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * Returns a set of items that can be used to tame this entity.
     *
     * @throws This function can throw errors.
     */
    getTameItems(): string[];
    /**
     * @remarks
     * Tames this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(): boolean;
}

/**
 * @beta
 * Represents information about a type of entity.
 */
export class EntityType {
    private constructor();
    /**
     * @remarks
     * Identifier of this entity type - for example,
     * 'minecraft:skeleton'.
     *
     */
    readonly id: string;
}

/**
 * @beta
 * An iterator that loops through available entity types.
 */
export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<EntityType>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<EntityType>;
}

/**
 * @beta
 * Used for accessing all entity types currently available for
 * use within the world.
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves an entity type using a string-based identifier.
     *
     */
    static get(identifier: string): EntityType;
    /**
     * @remarks
     * Retrieves an iterator of all entity types within this world.
     *
     */
    static getAll(): EntityTypeIterator;
}

/**
 * @beta
 * Defines the general movement speed underwater of this
 * entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:underwater_movement';
}

/**
 * @beta
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 * @example getEntityVariantComponent.js
 * ```js
 * const getEntityVariantComponent = entity.getComponent("variant");
 * getEntityVariantComponent.value;
 * getEntityVariantComponent.isValid();
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value for variant for this entity, as specified via
     * components.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}

/**
 * @beta
 * When added, this component signifies that this entity wants
 * to become a jockey.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:wants_jockey';
}

/**
 * @beta
 * Contains information regarding an explosion that has
 * happened.
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where the explosion has occurred.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * A collection of blocks impacted by this explosion event.
     *
     */
    getImpactedBlocks(): Block[];
}

/**
 * @beta
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information regarding an explosion that has
 * happened.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the explosion event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Updates a collection of blocks impacted by this explosion
     * event.
     *
     * @param blocks
     * New list of blocks that are impacted by this explosion.
     */
    setImpactedBlocks(blocks: Block[]): void;
}

/**
 * @beta
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called from before when an
     * explosion would occur.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void;
}

/**
 * @beta
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * As part of the Healable component, an optional collection of
     * side effects that can occur from being fed an item.
     *
     */
    getEffects(): FeedItemEffect[];
}

/**
 * @beta
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * Gets the duration, in ticks, of this effect.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     *
     */
    readonly name: string;
}

/**
 * @beta
 * Represents a set of filters for when an event should occur.
 */
export class FilterGroup {
    private constructor();
}

/**
 * @beta
 * Represents constants related to fluid containers.
 */
export class FluidContainer {
    private constructor();
    /**
     * @remarks
     * Constant that represents the maximum fill level of a fluid
     * container.
     *
     */
    static readonly maxFillLevel = 6;
    /**
     * @remarks
     * Constant that represents the minimum fill level of a fluid
     * container.
     *
     */
    static readonly minFillLevel = 0;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires when a button is pushed.
 */
export class IButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a lever is used.
 */
export class ILeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player joins a world.
 */
export class IPlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player leaves a world.
 */
export class IPlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player spawns.
 */
export class IPlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that has completed charging.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * @beta
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * completes charging.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}

/**
 * @beta
 * Base class for item components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

/**
 * @beta
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * Represents the cooldown category that this item is
     * associated with.
     *
     * @throws This property can throw when used.
     */
    readonly cooldownCategory: string;
    /**
     * @remarks
     * Amount of time, in ticks, that remain for this item
     * cooldown.
     *
     * @throws This property can throw when used.
     */
    readonly cooldownTicks: number;
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * Starts a new cooldown period for this item.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
}

/**
 * @beta
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
export class ItemDefinitionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: ItemDefinitionTriggeredAfterEvent) => void,
    ): (arg: ItemDefinitionTriggeredAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemDefinitionTriggeredAfterEvent) => void): void;
}

/**
 * @beta
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
export class ItemDefinitionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void,
    ): (arg: ItemDefinitionTriggeredBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains information related to a custom item having a data
 * definition change being triggered.
 */
export class ItemDefinitionTriggeredAfterEvent {
    private constructor();
    /**
     * @remarks
     * Name of the data-driven item event that is triggering this
     * change.
     *
     */
    readonly eventName: string;
    /**
     * @remarks
     * Related item stack that the definitional change has been
     * triggered upon.
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source?: Player;
}

/**
 * @beta
 * Contains information related to a triggering of a custom
 * item definition change.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDefinitionTriggeredBeforeEvent extends ItemDefinitionTriggeredAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, will cancel the application of this item
     * definition change.
     *
     */
    cancel: boolean;
}

/**
 * @beta
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * Returns the current damage level of this particular item.
     *
     * This property can't be edited in read-only mode.
     *
     */
    damage: number;
    /**
     * @remarks
     * Represents the amount of damage that this item can take
     * before breaking.
     *
     * @throws This property can throw when used.
     */
    readonly maxDurability: number;
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking level.
     *
     * This function can't be called in read-only mode.
     *
     * @param unbreaking
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be greater than
     * 0.
     * @throws This function can throw errors.
     */
    getDamageChance(unbreaking?: number): number;
    /**
     * @remarks
     * A range of numbers that describes the chance of the item
     * losing durability.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getDamageRange(): NumberRange;
}

/**
 * @beta
 * When present on an item, this item has applied enchantment
 * effects. Note that this component only applies to
 * data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantsComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * Returns a collection of the enchantments applied to this
     * item stack.
     *
     * This property can't be edited in read-only mode.
     *
     */
    enchantments: EnchantmentList;
    static readonly componentId = 'minecraft:enchantments';
    /**
     * @remarks
     * Removes all enchantments applied to this item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
}

/**
 * @beta
 * When present on an item, this item is consumable by
 * entities. Note that this component only applies to
 * data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * If true, the player can always eat this item (even when not
     * hungry).
     *
     * @throws This property can throw when used.
     */
    readonly canAlwaysEat: boolean;
    /**
     * @remarks
     * Represents how much nutrition this food item will give an
     * entity when eaten.
     *
     * @throws This property can throw when used.
     */
    readonly nutrition: number;
    /**
     * @remarks
     * When an item is eaten, this value is used according to this
     * formula (nutrition * saturation_modifier * 2) to apply a
     * saturation buff.
     *
     * @throws This property can throw when used.
     */
    readonly saturationModifier: number;
    /**
     * @remarks
     * When specified, converts the active item to the one
     * specified by this property.
     *
     * @throws This property can throw when used.
     */
    readonly usingConvertsTo: string;
    static readonly componentId = 'minecraft:food';
}

/**
 * @beta
 * Contains information related to a chargeable item when the
 * player has finished using the item and released the build
 * action.
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that triggered this item event.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * @beta
 * Manages callbacks that are connected to the releasing of
 * charging for a chargeable item.
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * is released from charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * is released from charging.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void;
}

/**
 * @beta
 * Defines a collection of items.
 */
export class ItemStack {
    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * Gets or sets whether the item is kept on death.
     *
     * This property can't be edited in read-only mode.
     *
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * This property can't be edited in read-only mode.
     *
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * @remarks
     * The type of the item.
     *
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * Creates a new instance of a stack of items for use in the
     * world.
     *
     * @param itemType
     * Type of item to create. See the {@link
     * @minecraft/vanilla-data.MinecraftItemTypes} enumeration for
     * a list of standard item types in Minecraft experiences.
     * @param amount
     * Number of items to place in the stack, between 1-255. The
     * provided value will be clamped to the item's maximum stack
     * size. Note that certain items can only have one item in the
     * stack.
     * @throws
     * Throws if `itemType` is invalid, or if `amount` is outside
     * the range of 1-255.
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @beta
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * Returns a copy of this item stack.
     */
    clone(): ItemStack;
    /**
     * @beta
     * @remarks
     * Get the list of block types this item can break in Adventure
     * mode.
     *
     * This function can't be called in read-only mode.
     *
     */
    getCanDestroy(): string[];
    /**
     * @beta
     * @remarks
     * Get the list of block types this item can be placed on in
     * Adventure mode.
     *
     * This function can't be called in read-only mode.
     *
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food'). If
     * no namespace prefix is specified, 'minecraft:' is assumed.
     * Available component IDs can be found as part of the {@link
     * ItemComponentTypes} enum.
     * @returns
     * Returns the component if it exists on the item stack,
     * otherwise undefined.
     * @example durability.ts
     * ```typescript
     * // Get the maximum durability of a custom sword item
     * const itemStack = new ItemStack('custom:sword');
     * const durability = itemStack.getComponent(ItemComponentTypes.Durability);
     * const maxDurability = durability.maxDurability;
     * ```
     * @example maxDurability.js
     * ```js
     * let durabilityComp = itemStack.getComponent("durability");
     * durabilityComp.damage;
     * durabilityComp.maxDurability;
     * ```
     */
    getComponent<T extends keyof ItemComponentTypeMap>(componentId: T): ItemComponentTypeMap[T] | undefined;
    /**
     * @remarks
     * Returns all components that are both present on this item
     * stack and supported by the API.
     *
     */
    getComponents(): ItemComponent[];
    /**
     * @beta
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * An array of lore lines. If the item does not have lore,
     * returns an empty array.
     */
    getLore(): string[];
    /**
     * @beta
     * @remarks
     * Returns a set of tags associated with this item stack.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @beta
     * @remarks
     * Checks whether this item stack has a particular tag
     * associated with it.
     *
     * @param tag
     * Tag to search for.
     * @returns
     * True if the Item Stack has the tag associated with it, else
     * false.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     * @param itemStack
     * ItemStack to check stacking compatability with.
     * @returns
     * True if the Item Stack is stackable with the itemStack
     * passed in.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @beta
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * String list of block types that the item can destroy.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @example example.ts
     * ```typescript
     * // Creates a diamond pickaxe that can destroy cobblestone and obsidian
     * const specialPickaxe = new ItemStack("minecraft:diamond_pickaxe");
     * specialPickaxe.setCanDestroy(["minecraft:cobblestone", "minecraft:obsidian"]);
     * ```
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @beta
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * String list of block types that the item can be placed on.
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @example example.ts
     * ```typescript
     * // Creates a gold block that can be placed on grass and dirt
     * const specialGoldBlock = new ItemStack("minecraft:gold_block");
     * specialPickaxe.setCanPlaceOn(["minecraft:grass", "minecraft:dirt"]);
     * ```
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @beta
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack. The lore list is cleared if set to an empty
     * string or undefined.
     *
     * This function can't be called in read-only mode.
     *
     * @param loreList
     * List of lore lines. Each element in the list represents a
     * new line. The maximum lore line count is 20. The maximum
     * lore line length is 50 characters.
     * @throws This function can throw errors.
     * @example diamondAwesomeSword.ts
     * ```typescript
     *   const diamondAwesomeSword = new mc.ItemStack(mc.MinecraftItemTypes.diamondSword, 1);
     *   let players = mc.world.getAllPlayers();
     *
     *   diamondAwesomeSword.setLore(["§c§lDiamond Sword of Awesome§r", "+10 coolness", "§p+4 shiny§r"]);
     *
     *   // hover over/select the item in your inventory to see the lore.
     *   const inventory = players[0].getComponent("inventory") as mc.EntityInventoryComponent;
     *   inventory.container.setItem(0, diamondAwesomeSword);
     *
     *   let item = inventory.container.getItem(0);
     *
     *   if (item) {
     *     let enchants = item.getComponent("minecraft:enchantments") as mc.ItemEnchantsComponent;
     *     let knockbackEnchant = new mc.Enchantment("knockback", 3);
     *     enchants.enchantments.addEnchantment(knockbackEnchant);
     *   }
     * ```
     * @example multilineLore.ts
     * ```typescript
     * // Set the lore of an item to multiple lines of text
     * const itemStack = new ItemStack("minecraft:diamond_sword");
     * itemStack.setLore(["Line 1", "Line 2", "Line 3"]);
     * ```
     */
    setLore(loreList?: string[]): void;
    /**
     * @beta
     * @remarks
     * Triggers an item type event. For custom items, a number of
     * events are defined in an items' definition for key item
     * behaviors.
     *
     * This function can't be called in read-only mode.
     *
     * @param eventName
     * Name of the item type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     */
    triggerEvent(eventName: string): void;
}

/**
 * @beta
 * Contains information related to a chargeable item starting
 * to be charged.
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is starting to be charged.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * @beta
 * Manages callbacks that are connected to the start of
 * charging for a chargeable item.
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * starts charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * starts charging.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item being used on a
 * block. This event fires when a player presses the the Use
 * Item / Place Block button to successfully use an item or
 * place a block. Fires for the first block that is interacted
 * with when performing a build action. Note: This event cannot
 * be used with Hoe or Axe items.
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * The impacted item stack that is starting to be used.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to a chargeable item has
 * finished an items use cycle, or when the player has released
 * the use action with the item.
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is stopping being charged.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * @beta
 * Manages callbacks that are connected to the stopping of
 * charging for an item that has a registered
 * minecraft:chargeable component.
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * stops charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * stops charging.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item that has stopped
 * being used on a block. This event fires when a player
 * successfully uses an item or places a block by pressing the
 * Use Item / Place Block button. If multiple blocks are
 * placed, this event will only occur once at the beginning of
 * the block placement. Note: This event cannot be used with
 * Hoe or Axe items.
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item stops being
     * used on a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void;
}

/**
 * @beta
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     *
     */
    readonly id: string;
}

/**
 * @beta
 * Returns the set of item types registered within Minecraft.
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * Returns a specific item type, if available within Minecraft.
     *
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * Retrieves all available item types registered within
     * Minecraft.
     *
     */
    static getAll(): ItemType[];
}

/**
 * @beta
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers an entity interaction.
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is being used.
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item being used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this will cancel the item use behavior.
     *
     */
    cancel: boolean;
}

/**
 * @beta
 * Manages callbacks that fire before an item is used.
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers a block interaction.
 */
export class ItemUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to an item being used
 * on a block event.
 */
export class ItemUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item being used on a
 * block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this will cancel the item use behavior.
     *
     */
    cancel: boolean;
}

/**
 * @beta
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
export class ItemUseOnBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used
     * on a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains information related to changes to a lever
 * activating or deactivating.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * True if the lever is activated (that is, transmitting
     * power).
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * Optional player that triggered the lever activation.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal {
    private constructor();
}

/**
 * @beta
 * A specific currently-internal event used for passing
 * messages from client to server.
 */
export class MessageReceiveAfterEvent {
    private constructor();
    /**
     * @remarks
     * The message identifier.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * The message.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * The player who sent the message.
     *
     */
    readonly player: Player;
}

/**
 * DEPRECATED
 * Use @minecraft/vanilla-data.MinecraftDimensionTypes
 * A collection of default Minecraft dimension types.
 */
export class MinecraftDimensionTypes {
    private constructor();
    /**
     * @remarks
     * The Nether is a collection of biomes separate from the
     * Overworld, including Soul Sand Valleys and Crimson forests.
     * Nether fortresses contain exclusive resources. Mobs such as
     * Blaze, Hoglins, Piglins, and Ghasts congregate here.
     *
     */
    static readonly nether = 'minecraft:nether';
    /**
     * @remarks
     * The overworld is a collection of biomes, including forests,
     * plains, jungles, mountains, deserts, taiga, and more. This
     * is the default starter dimension for Minecraft. Mobs such as
     * Axolotl, Cows, Creepers, and Zombies congregate here.
     *
     */
    static readonly overworld = 'minecraft:overworld';
    /**
     * @remarks
     * The End is separate from the Overworld and the Nether and is
     * generated whenever you create an End portal. Here, a giant
     * center island is surrounded by several smaller areas and
     * islands. You can find Endermen here. End midlands are larger
     * areas that transition you from the center to the outer edges
     * of the End. They contain Shulkers, Endermen, End gateway
     * portals, and End cities. End gateway portals are commonly
     * found at the outermost edge of the void. You usually find
     * End barrens toward the edges of the main areas or land in
     * the End.
     *
     */
    static readonly theEnd = 'minecraft:the_end';
}

/**
 * @beta
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 */
export class MolangVariableMap {
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     *
     * @throws This function can throw errors.
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * - `<variable_name>.a` - Alpha (transparency) color value
     * [0-1]
     *
     * @throws This function can throw errors.
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * @remarks
     * Sets a numeric (decimal) value within the Molang variable
     * map.
     *
     * @param variableName
     * Name of the float-based number to set.
     * @param number
     * Value for the Molang-based variable to set.
     * @throws This function can throw errors.
     */
    setFloat(variableName: string, number: number): void;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.speed` - Speed number provided
     * - `<variable_name>.direction_x` - X value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_y` - Y value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_z` - Z value from the {@link
     * Vector3} provided
     *
     * @throws This function can throw errors.
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.x` - X value from the {@link Vector3}
     * provided
     * - `<variable_name>.y` - Y value from the {@link Vector3}
     * provided
     * - `<variable_name>.z` - Z value from the {@link Vector3}
     * provided
     *
     * @throws This function can throw errors.
     */
    setVector3(variableName: string, vector: Vector3): void;
}

/**
 * @beta
 * Contains data resulting from a navigation operation,
 * including whether the navigation is possible and the path of
 * navigation.
 */
export class NavigationResult {
    private constructor();
    /**
     * @remarks
     * Whether the navigation result contains a full path,
     * including to the requested destination.
     *
     */
    readonly isFullPath: boolean;
    /**
     * @remarks
     * A set of block locations that comprise the navigation route.
     *
     */
    getPath(): Vector3[];
}

/**
 * @beta
 * Contains information related to changes to a piston
 * expanding or retracting.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * True if the piston is the process of expanding.
     *
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * Contains additional properties and details of the piston.
     *
     */
    readonly piston: BlockPistonComponent;
}

/**
 * @beta
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a piston expands or
     * retracts.
     *
     * This function can't be called in read-only mode.
     *
     * @example pistonAfterEvent.ts
     * ```typescript
     *   // set up a couple of piston blocks
     *   let piston = overworld.getBlock(targetLocation);
     *   let button = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });
     *
     *   if (piston === undefined || button === undefined) {
     *     log("Could not find block at location.");
     *     return -1;
     *   }
     *
     *   piston.setPermutation(mc.BlockPermutation.resolve('piston').withState('facing_direction', 3));
     *   button.setPermutation(mc.BlockPermutation.resolve('acacia_button').withState('facing_direction', 1));
     *
     *   mc.world.afterEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateAfterEvent) => {
     *     let eventLoc = pistonEvent.piston.block.location;
     *
     *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
     *       log(
     *         "Piston event at " +
     *           mc.system.currentTick +
     *           (pistonEvent.piston.isMoving ? " Moving" : "") +
     *           (pistonEvent.piston.isExpanding ? " Expanding" : "") +
     *           (pistonEvent.piston.isExpanded ? " Expanded" : "") +
     *           (pistonEvent.piston.isRetracting ? " Retracting" : "") +
     *           (pistonEvent.piston.isRetracted ? " Retracted" : "")
     *       );
     *     }
     *   });
     * ```
     * @example pistonEvent.ts
     * ```typescript
     * let canceled = false;
     *
     * const pistonLoc: mc.Vector3 = {
     *   x: Math.floor(targetLocation.x) + 1,
     *   y: Math.floor(targetLocation.y) + 2,
     *   z: Math.floor(targetLocation.z) + 1,
     * };
     *
     * const pistonCallback = mc.world.beforeEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateBeforeEvent) => {
     *   if (pistonEvent.piston.location.equals(pistonLoc)) {
     *     log("Cancelling piston event");
     *     pistonEvent.cancel = true;
     *     canceled = true;
     *   }
     * });
     *
     * ```
     */
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to changes before a piston
 * expands or retracts.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If this is set to true within an event handler, the piston
     * activation is canceled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * True if the piston is the process of expanding.
     *
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * Contains additional properties and details of the piston.
     *
     */
    readonly piston: BlockPistonComponent;
}

/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before a piston is activated.
 */
export class PistonActivateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a piston expands
     * or retracts.
     *
     * This function can't be called in read-only mode.
     *
     * @example pistonBeforeEvent.ts
     * ```typescript
     *   // set up a couple of piston blocks
     *   let piston = overworld.getBlock(targetLocation);
     *   let button = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });
     *
     *   if (piston === undefined || button === undefined) {
     *     log("Could not find block at location.");
     *     return -1;
     *   }
     *
     *   piston.setPermutation(mc.BlockPermutation.resolve('piston').withState('facing_direction', 3));
     *   button.setPermutation(mc.BlockPermutation.resolve('acacia_button').withState('facing_direction', 1));
     *
     *   const uncanceledPistonLoc = {
     *     x: Math.floor(targetLocation.x) + 2,
     *     y: Math.floor(targetLocation.y),
     *     z: Math.floor(targetLocation.z) + 2,
     *   };
     *
     *   // this is our control.
     *   let uncanceledPiston = overworld.getBlock(uncanceledPistonLoc);
     *   let uncanceledButton = overworld.getBlock({
     *     x: uncanceledPistonLoc.x,
     *     y: uncanceledPistonLoc.y + 1,
     *     z: uncanceledPistonLoc.z,
     *   });
     *
     *   if (uncanceledPiston === undefined || uncanceledButton === undefined) {
     *     log("Could not find block at location.");
     *     return -1;
     *   }
     *
     *   uncanceledPiston.setPermutation(mc.BlockPermutation.resolve('piston').withState('facing_direction', 3));
     *   uncanceledButton.setPermutation(mc.BlockPermutation.resolve('acacia_button').withState('facing_direction', 1));
     *
     *   mc.world.beforeEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateBeforeEvent) => {
     *     let eventLoc = pistonEvent.piston.block.location;
     *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
     *       log("Cancelling piston event");
     *       pistonEvent.cancel = true;
     *     }
     *   });
     * ```
     */
    subscribe(callback: (arg: PistonActivateBeforeEvent) => void): (arg: PistonActivateBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a piston expands
     * or retracts.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateBeforeEvent) => void): void;
}

/**
 * Represents a player within the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @beta
     * @remarks
     * The player's Camera.
     *
     * @throws This property can throw when used.
     */
    readonly camera: Camera;
    /**
     * @beta
     * @remarks
     * If true, the player is currently emoting.
     *
     * @throws This property can throw when used.
     */
    readonly isEmoting: boolean;
    /**
     * @beta
     * @remarks
     * Whether the player is flying. For example, in Creative or
     * Spectator mode.
     *
     * @throws This property can throw when used.
     */
    readonly isFlying: boolean;
    /**
     * @beta
     * @remarks
     * Whether the player is gliding with Elytra.
     *
     * @throws This property can throw when used.
     */
    readonly isGliding: boolean;
    /**
     * @beta
     * @remarks
     * Whether the player is jumping. This will remain true while
     * the player is holding the jump action.
     *
     * @throws This property can throw when used.
     */
    readonly isJumping: boolean;
    /**
     * @beta
     * @remarks
     * The current overall level for the player, based on their
     * experience.
     *
     * @throws This property can throw when used.
     */
    readonly level: number;
    /**
     * @remarks
     * Name of the player.
     *
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @beta
     * @remarks
     * Contains methods for manipulating the on-screen display of a
     * Player.
     *
     * @throws This property can throw when used.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @beta
     * @remarks
     * Manages the selected slot in the player's hotbar.
     *
     * This property can't be edited in read-only mode.
     *
     */
    selectedSlot: number;
    /**
     * @beta
     * @remarks
     * The overall total set of experience needed to achieve the
     * next level for a player.
     *
     * @throws This property can throw when used.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @beta
     * @remarks
     * The current set of experience achieved for the player.
     *
     * @throws This property can throw when used.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @beta
     * @remarks
     * Adds/removes experience to/from the Player and returns the
     * current experience of the Player.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Amount of experience to add. Note that this can be negative.
     * Min/max bounds at -2^24 ~ 2^24
     * @returns
     * Returns the current experience of the Player.
     * @throws This function can throw errors.
     * @example addXp.js
     * ```js
     * const xpAdded = player.addExperience(100);
     * console.log(`Player ${player.name} now has ${xpAdded} experience points.`);
     * ```
     */
    addExperience(amount: number): number;
    /**
     * @beta
     * @remarks
     * Adds/removes level to/from the Player and returns the
     * current level of the Player.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Amount to add to the player. Min/max bounds at -2^24 ~ 2^24
     * @returns
     * Returns the current level of the Player.
     * @throws This function can throw errors.
     * @example addLevels.js
     * ```js
     * const levels = player.addLevels(5);
     * console.log(`Player ${player.name} now has ${levels} levels.`);
     * ```
     */
    addLevels(amount: number): number;
    /**
     * @beta
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     *
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     * @example getEquipmentCooldown.js
     * ```js
     * const cooldown = player.getItemCooldown("equipment");
     * console.log(`Cooldown for the equipment category: ${cooldown} seconds.`);
     * ```
     */
    getItemCooldown(itemCategory: string): number;
    /**
     * @beta
     * @remarks
     * Gets the current spawn point of the player.
     *
     * @throws This function can throw errors.
     * @example getSpawnPoint.js
     * ```js
     * const spawnPoint = player.getSpawnPoint();
     * if (spawnPoint) {
     *     console.log(
     *         `Spawn point location: ${spawnPoint.x} ${spawnPoint.y} ${spawnPoint.z} at ${spawnPoint.dimension.id}`
     *     );
     * } else {
     *     console.log(`No spawn point set.`);
     * }
     * ```
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @beta
     * @remarks
     *  Gets the total experience of the Player.
     *
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     *
     * @throws This function can throw errors.
     */
    isOp(): boolean;
    /**
     * @beta
     * @remarks
     * Plays a music track that only this particular player can
     * hear.
     *
     * This function can't be called in read-only mode.
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Plays a sound that only this particular player can hear.
     *
     * This function can't be called in read-only mode.
     *
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     * @example playMusicAndSound.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   const musicOptions: mc.MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   mc.world.playMusic("music.menu", musicOptions);
     *
     *   const worldSoundOptions: mc.WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: mc.PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound("bucket.fill_water", playerSoundOptions);
     * ```
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * @beta
     * @remarks
     * This is an internal-facing method for posting a system
     * message to downstream clients.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @beta
     * @remarks
     * Queues an additional music track that only this particular
     * player can hear. If a track is not playing, a music track
     * will play.
     *
     * This function can't be called in read-only mode.
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Resets the level of the player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /**
     * @beta
     * @remarks
     * Sends a message to the player.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     * // Displays "Apple or Coal"
     * let rawMessage = {
     *   translate: "accessibility.list.or.two",
     *   with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     * };
     * player.sendMessage(rawMessage);
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: "*", objective: "obj" } };
     * world.sendMessage(rawMessage);
     * ```
     * @example sendBasicMessage.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].sendMessage("Hello World!");
     * ```
     * @example sendTranslatedMessage.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
     * ```
     * @example simpleString.ts
     * ```typescript
     * // Displays "Hello, world!"
     * world.sendMessage("Hello, world!");
     * ```
     * @example translation.ts
     * ```typescript
     * // Displays "First or Second"
     * const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     * player.sendMessage(rawMessage);
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @beta
     * @remarks
     * Will change the specified players permissions, and whether
     * they are operator or not.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setOp(isOp: boolean): void;
    /**
     * @beta
     * @remarks
     * Sets the current starting spawn point for this particular
     * player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @beta
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    /**
     * @beta
     * @remarks
     * Stops any music tracks from playing for this particular
     * player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopMusic(): void;
}

/**
 * @beta
 * Contains information regarding an event after a player
 * breaks a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Returns permutation information about this block before it
     * was broken.
     *
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The item stack that was used to break the block after the
     * block was broken, or undefined if empty hand.
     *
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * @remarks
     * The item stack that was used to break the block before the
     * block was broken, or undefined if empty hand.
     *
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * @remarks
     * Player that broke the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to when a player breaks
 * a block.
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player breaks a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information regarding an event before a player
 * breaks a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the block break event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The item stack that is being used to break the block, or
     * undefined if empty hand.
     *
     */
    itemStack?: ItemStack;
    /**
     * @remarks
     * Player breaking the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to before a player
 * breaks a block.
 */
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a block is broken
     * by a player.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player breaks
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains information related to changes to a player's
 * dimension having been changed.
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The dimension the player is changing from.
     *
     */
    readonly fromDimension: Dimension;
    /**
     * @remarks
     * The location the player was at before changing dimensions.
     *
     */
    readonly fromLocation: Vector3;
    /**
     * @remarks
     * Handle to the player that is changing dimensions.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The dimension that the player is changing to.
     *
     */
    readonly toDimension: Dimension;
    /**
     * @remarks
     * The location the player will spawn to after changing
     * dimensions.
     *
     */
    readonly toLocation: Vector3;
}

/**
 * @beta
 * Manages callbacks that are connected to successful player
 * dimension changes.
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes the specified callback to a player dimension
     * change after event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): (arg: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from a player dimension
     * change after event.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information regarding an event after a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that will be interacted with.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that is being interacted with.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerInteractWithBlockAfterEvent) => void,
    ): (arg: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information regarding an event before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    /**
     * @remarks
     * The block that will be interacted with.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that is being interacted with.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * If set to true the interaction will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains information regarding an event after a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The entity that will be interacted with.
     *
     */
    readonly target: Entity;
}

/**
 * @beta
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information regarding an event before a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the interaction will be cancelled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The entity that will be interacted with.
     *
     */
    readonly target: Entity;
}

/**
 * @beta
 */
export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerInteractWithEntityBeforeEvent) => void,
    ): (arg: PlayerInteractWithEntityBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): void;
}

/**
 * @beta
 * This type is usable for iterating over a set of players.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class PlayerIterator implements Iterable<Player> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<Player>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Player in the iteration.
     *
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<Player>;
}

/**
 * @beta
 * Contains information regarding a player that has joined.
 * See the playerSpawn event for more detailed information that
 * could be returned after the first time a player has spawned
 * within the game.
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * Opaque string identifier of the player that joined the game.
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * Name of the player that has joined.
     *
     */
    readonly playerName: string;
}

/**
 * @beta
 * Manages callbacks that are connected to a player joining the
 * world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal {
    private constructor();
}

/**
 * @beta
 * Contains information regarding a player that has left the
 * world.
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * Opaque string identifier of the player that has left the
     * event.
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * Player that has left the world.
     *
     */
    readonly playerName: string;
}

/**
 * @beta
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal {
    private constructor();
}

/**
 * @beta
 */
export class PlayerLeaveBeforeEvent {
    private constructor();
    readonly player: Player;
}

/**
 * @beta
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): (arg: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains information regarding an event where a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Player that placed the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to when a block is
 * placed by a player.
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is placed
     * by a player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the block place event.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The face of the block that the new block is being placed on.
     *
     */
    readonly face: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the new block is being placed onto.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The item being used to place the block.
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * Player that is placing the block for this event.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to before a block is
 * placed by a player.
 */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a block is placed
     * by a player.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an block is
     * placed by a player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void): void;
}

/**
 * @beta
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If true, this is the initial spawn of a player after joining
     * the game.
     *
     * This property can't be edited in read-only mode.
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * Object that represents the player that joined the game.
     *
     * This property can't be edited in read-only mode.
     *
     */
    player: Player;
}

/**
 * @beta
 * Registers an event when a player is spawned (or re-spawned
 * after death) and fully ready within the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal {
    private constructor();
}

/**
 * @beta
 * Contains information related to changes to a pressure plate
 * pop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The redstone power of the pressure plate before it was
     * popped.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * pop.
     *
     */
    readonly redstonePower: number;
}

/**
 * @beta
 * Manages callbacks that are connected to when a pressure
 * plate is popped.
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * popped.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is popped.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to changes to a pressure plate
 * push.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The redstone power of the pressure plate before it was
     * pushed.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * push.
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Source that triggered the pressure plate push.
     *
     */
    readonly source: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when a pressure
 * plate is pushed.
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * pushed.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is pushed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to a projectile hitting a
 * block.
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where this projectile hit took place.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Direction vector of the projectile as it hit a block.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * Location where the projectile hit occurred.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Entity for the projectile that hit a block.
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * Optional source entity that fired the projectile.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * Contains additional information about the block that was hit
     * by the projectile.
     *
     * This function can't be called in read-only mode.
     *
     */
    getBlockHit(): BlockHitInformation;
}

/**
 * @beta
 * Manages callbacks that are connected to when a projectile
 * hits a block.
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): (arg: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to a projectile hitting an
 * entity.
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where this projectile hit took place.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Direction vector of the projectile as it hit an entity.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * Location where the projectile hit occurred.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Entity for the projectile that hit an entity.
     *
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * Optional source entity that fired the projectile.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * Contains additional information about an entity that was
     * hit.
     *
     * This function can't be called in read-only mode.
     *
     */
    getEntityHit(): EntityHitInformation;
}

/**
 * @beta
 * Manages callbacks that are connected to when a projectile
 * hits an entity.
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits
     * an entity.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): (arg: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): void;
}

/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * Adds a new objective to the scoreboard.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example addObjective.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.scoreboard.addObjective("example", "example");
     * ```
     */
    addObjective(objectiveId: string, displayName: string): ScoreboardObjective;
    /**
     * @remarks
     * Clears the objective that occupies a display slot.
     *
     * This function can't be called in read-only mode.
     *
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * Returns a specific objective (by id).
     *
     * @param objectiveId
     * Identifier of the objective.
     * @example getPlayerMoneyObjective.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * const money = world.scoreboard.getObjective("money");
     * ```
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * Returns an objective that occupies the specified display
     * slot.
     *
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * Returns all defined objectives.
     *
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * Returns all defined scoreboard identities.
     *
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Removes an objective from the scoreboard.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example removeMoney.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.scoreboard.removeObjective("money");
     * ```
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * Sets an objective into a display slot with specified
     * additional display settings.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns the previous `ScoreboardObjective` set at the
     * display slot, if no objective was previously set it returns
     * `undefined`.
     * @throws This function can throw errors.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}

/**
 * @beta
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * Returns the player-visible name of this identity.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * Identifier of the scoreboard identity.
     *
     */
    readonly id: number;
    /**
     * @remarks
     * Type of the scoreboard identity.
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * If the scoreboard identity is an entity or player, returns
     * the entity that this scoreboard item corresponds to.
     *
     * @throws This function can throw errors.
     */
    getEntity(): Entity | undefined;
    /**
     * @remarks
     * Returns true if the ScoreboardIdentity reference is still
     * valid.
     *
     */
    isValid(): boolean;
}

/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * Returns the player-visible name of this scoreboard
     * objective.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * Identifier of the scoreboard objective.
     *
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @remarks
     * Adds a score to the given participant and objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * Participant to apply the scoreboard value addition to.
     * @throws This function can throw errors.
     * @example addPlayerMoney.js
     * ```js
     * const money = world.scoreboard.getObjective("money");
     * const currentScore = money.addScore(player, 100);
     * player.sendMessage(`Your current score is ${currentScore}`);
     * ```
     * @example removeScore.js
     * ```js
     * const money = world.scoreboard.getObjective("money");
     * const currentScore = money.addScore(player, -100);
     * player.sendMessage(`Your current score is ${currentScore}`);
     * ```
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * Returns all objective participant identities.
     *
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Returns a specific score for a participant.
     *
     * @param participant
     * Identifier of the participant to retrieve a score for.
     * @throws This function can throw errors.
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * Returns specific scores for this objective for all
     * participants.
     *
     * @throws This function can throw errors.
     * @example topPlayer.ts
     * ```ts
     * import { world } from "@minecraft/server";
     *
     * const money = world.scoreboard.getObjective("money");
     * var scoreArray = money.getScores();
     * scoreArray.sort(function (a, b) {
     *     return b.score - a.score;
     * });
     *
     * console.log(scoreArray.map((score) => score.participant.displayName));
     * ```
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * Returns if the specified identity is a participant of the
     * scoreboard objective.
     *
     * @throws This function can throw errors.
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * Returns true if the ScoreboardObjective reference is still
     * valid.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * Removes a participant from this scoreboard objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * Participant to remove from being tracked with this
     * objective.
     * @throws This function can throw errors.
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * Sets a score for a participant.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * Identity of the participant.
     * @param score
     * New value of the score.
     * @throws This function can throw errors.
     * @example resetMoney.js
     * ```js
     * const money = world.scoreboard.getObjective("money");
     * money.setScore(player, 0);
     * player.sendMessage(`Your score has been reset.`);
     * ```
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

/**
 * @beta
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * This scoreboard participant for this score.
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * Score value of the identity for this objective.
     *
     */
    readonly score: number;
}

/**
 * @beta
 * Contains information about user interface elements that are
 * showing up on the screen.
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * Returns true if the current reference to this screen display
     * manager object is valid and functional.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     *
     * This function can't be called in read-only mode.
     *
     * @param text
     * New value for the action bar text.
     * @throws This function can throw errors.
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. Will clear the title if set to empty string. You
     * can optionally specify an additional subtitle as well as
     * fade in, stay and fade out times.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example countdown.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle("Get ready!", {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: "10",
     *   });
     *
     *   let countdown = 10;
     *
     *   let intervalId = mc.system.runInterval(() => {
     *     countdown--;
     *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) {
     *       mc.system.clearRun(intervalId);
     *     }
     *   }, 20);
     * ```
     * @example setTitle.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
     * ```
     * @example setTitleAndSubtitle.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle("Chapter 1", {
     *     stayDuration: 100,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: "Trouble in Block Town",
     *   });
     * ```
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

/**
 * @beta
 * Returns additional data about a /scriptevent command
 * invocation.
 */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /**
     * @remarks
     * Identifier of this ScriptEvent command message.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * Optional additional data passed in with the script event
     * command.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * Source block if this command was triggered via a block
     * (e.g., a commandblock.)
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * Source entity if this command was triggered by an entity
     * (e.g., a NPC).
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * Returns the type of source that fired this command.
     *
     */
    readonly sourceType: ScriptEventSource;
}

/**
 * @beta
 * Allows for registering an event handler that responds to
 * inbound /scriptevent commands.
 */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Registers a new ScriptEvent handler.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes a particular handler for a ScriptEvent event.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void;
}

/**
 * @beta
 * Describes a particular seating position on this rideable
 * entity.
 */
export class Seat {
    private constructor();
    /**
     * @remarks
     * If specified, contains a forced rotation that the riders in
     * this seat are facing.
     *
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * A maximum number of riders that this seat can support.
     *
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     *
     */
    readonly minRiderCount: number;
    /**
     * @remarks
     * Physical location of this seat, relative to the entity's
     * location.
     *
     */
    readonly position: Vector3;
}

/**
 * @beta
 * Manages callbacks that are message passing to a server. This
 * event is not currently fully implemented, and should not be
 * used.
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an internal message
     * is passed.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: MessageReceiveAfterEvent) => void): (arg: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an internal
     * message is passed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: MessageReceiveAfterEvent) => void): void;
}

/**
 * A class that provides system-level events and functions.
 */
export class System {
    private constructor();
    /**
     * @beta
     * @remarks
     * Returns a collection of after-events for system-level
     * operations.
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @beta
     * @remarks
     * Returns a collection of before-events for system-level
     * operations.
     *
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @beta
     * @remarks
     * Represents the current world tick of the server.
     *
     */
    readonly currentTick: number;
    /**
     * @beta
     * @remarks
     * Cancels the execution of a function run that was previously
     * scheduled via the `run` function.
     * @example clearRun.js
     * ```js
     * const runId = system.run(() => {
     *     console.log("Running callback function...");
     * });
     *
     * // Clear the run, so it will not run again.
     * system.clearRun(runId);
     * ```
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at a future time. This is
     * frequently used to implement delayed behaviors and game
     * loops.
     *
     * @param callback
     * Function callback to run when the tickDelay time criteria is
     * met.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     * @example trapTick.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   try {
     *     // Minecraft runs at 20 ticks per second.
     *     if (mc.system.currentTick % 1200 === 0) {
     *       mc.world.sendMessage("Another minute passes...");
     *     }
     *   } catch (e) {
     *     console.warn("Error: " + e);
     *   }
     *
     *   mc.system.run(trapTick);
     * ```
     * @example run.js
     * ```js
     * const runId = system.run(() => {
     *     console.log("Running callback function...");
     * });
     * ```
     */
    run(callback: () => void): number;
    /**
     * @beta
     * @remarks
     * Runs a set of code on an interval.
     *
     * @param callback
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * An interval of every N ticks that the callback will be
     * called upon.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     * @example every30Seconds.ts
     * ```typescript
     *   let intervalRunIdentifier = Math.floor(Math.random() * 10000);
     *
     *   mc.system.runInterval(() => {
     *     mc.world.sendMessage("This is an interval run " + intervalRunIdentifier + " sending a message every 30 seconds.");
     *   }, 600);
     * ```
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @beta
     * @remarks
     * Runs a set of code at a future time specified by tickDelay.
     *
     * @param callback
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * Amount of time, in ticks, before the interval will be
     * called.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     * @example runTimeout.js
     * ```js
     * import { TicksPerSecond } from "@minecraft/server";
     *
     * system.runTimeout(() => {
     *     console.log("Running callback function after delay...");
     * }, TicksPerSecond * 5); // Tick delay of 5 seconds
     * ```
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
}

/**
 * @beta
 * Provides a set of events that fire within the broader
 * scripting system within Minecraft.
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * An event that fires when a /scriptevent command is set. This
     * provides a way for commands and other systems to trigger
     * behavior within script.
     * @example entity.js
     * ```js
     * import { system, world } from "@minecraft/server";
     *
     * system.afterEvents.scriptEventReceive.subscribe((event) => {
     *     const { id, message, sourceEntity, sourceType } = event;
     *
     *     console.log(id); // wiki:test
     *     console.log(message); // Hello World
     *     console.log(sourceEntity); // Player object
     *     console.log(sourceType); // Entity
     * });
     *
     * world.getPlayers().forEach((player) => {
     *     player.runCommand("scriptevent wiki:test Hello World");
     * });
     * ```
     * @example server.js
     * ```js
     * import { system, world } from "@minecraft/server";
     *
     * system.afterEvents.scriptEventReceive.subscribe((event) => {
     *     const { id, message, sourceType } = event;
     *
     *     console.log(id); // wiki:test
     *     console.log(message); // Hello World
     *     console.log(sourceType); // Server
     * });
     *
     * world.getDimension("overworld").runCommand("scriptevent wiki:test Hello World");
     * ```
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

/**
 * @beta
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error.
 */
export class SystemBeforeEvents {
    private constructor();
    /**
     * @remarks
     * Fires when the scripting watchdog shuts down the server. The
     * can be due to using too much memory, or by causing
     * significant slowdown or hang.
     * To prevent shutdown, set the event's cancel property to
     * true.
     * @example cancelTerminate.js
     * ```js
     * import { system } from "@minecraft/server";
     *
     * system.beforeEvents.watchdogTerminate.subscribe((event) => {
     *     event.cancel = true;
     *     console.warn(
     *         `[Watchdog] Canceled critical exception of type '${event.cancelationReason}`
     *     );
     * });
     * ```
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}

/**
 * @beta
 * Contains information related to changes to a target block
 * hit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The position where the source hit the block.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * The redstone power before the block is hit.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power at the time the block is hit.
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Optional source that hit the target block.
     *
     */
    readonly source: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when a target block
 * is hit.
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a target block is
     * hit.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a target block is
     * hit.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void;
}

/**
 * @beta
 * Represents a trigger for firing an event.
 */
export class Trigger {
    /**
     * @remarks
     * Event name of the trigger.
     *
     */
    eventName: string;
    /**
     * @remarks
     * Creates a new trigger.
     *
     */
    constructor(eventName: string);
}

/**
 * @beta
 * Contains information related to changes to a trip wire trip.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Whether or not the block has redstone power.
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * The sources that triggered the trip wire to trip.
     *
     */
    readonly sources: Entity[];
}

/**
 * @beta
 * Manages callbacks that are connected to when a trip wire is
 * tripped.
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a trip wire is
     * tripped.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}

/**
 * @beta
 * Contains a description of a vector.
 */
export class Vector {
    /**
     * @remarks
     * X component of this vector.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this vector.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this vector.
     *
     */
    z: number;
    /**
     * @remarks
     * A constant vector that represents (0, 0, -1).
     *
     */
    static readonly back: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, -1, 0).
     *
     */
    static readonly down: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, 0, 1).
     *
     */
    static readonly forward: Vector;
    /**
     * @remarks
     * A constant vector that represents (-1, 0, 0).
     *
     */
    static readonly left: Vector;
    /**
     * @remarks
     * A constant vector that represents (1, 1, 1).
     *
     */
    static readonly one: Vector;
    /**
     * @remarks
     * A constant vector that represents (1, 0, 0).
     *
     */
    static readonly right: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, 1, 0).
     *
     */
    static readonly up: Vector;
    /**
     * @remarks
     * A constant vector that represents (0, 0, 0).
     *
     */
    static readonly zero: Vector;
    /**
     * @remarks
     * Creates a new instance of an abstract vector.
     *
     * @param x
     * X component of the vector.
     * @param y
     * Y component of the vector.
     * @param z
     * Z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Compares this vector and another vector to one another.
     *
     * @param other
     * Other vector to compare this vector to.
     * @returns
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean;
    /**
     * @remarks
     * Returns the length of this vector.
     *
     */
    length(): number;
    /**
     * @remarks
     * Returns the squared length of this vector.
     *
     */
    lengthSquared(): number;
    /**
     * @remarks
     * Returns this vector as a normalized vector.
     *
     */
    normalized(): Vector;
    /**
     * @remarks
     * Returns the addition of these vectors.
     *
     */
    static add(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     *
     */
    static cross(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the distance between two vectors.
     *
     */
    static distance(a: Vector3, b: Vector3): number;
    /**
     * @remarks
     * Returns the component-wise division of these vectors.
     *
     * @throws This function can throw errors.
     */
    static divide(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     *
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     *
     */
    static max(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     *
     */
    static min(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     *
     */
    static multiply(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     *
     */
    static slerp(a: Vector3, b: Vector3, s: number): Vector;
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     *
     */
    static subtract(a: Vector3, b: Vector3): Vector;
}

/**
 * @beta
 * Contains information related to a script watchdog
 * termination.
 */
export class WatchdogTerminateBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the termination of the script
     * runtime. Note that depending on server configuration
     * settings, cancellation of the termination may not be
     * allowed.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * Contains the reason why a script runtime is to be
     * terminated.
     *
     */
    readonly terminateReason: WatchdogTerminateReason;
}

/**
 * @beta
 * Manages callbacks that are connected to a callback that will
 * be called when a script runtime is being terminated due to a
 * violation of the performance watchdog system.
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a script runtime is
     * being terminated due to a violation of the performance
     * watchdog system.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): (arg: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a script runtime
     * is being terminated due to a violation of the performance
     * watchdog system.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension in which the weather has changed.
     *
     */
    readonly dimension: string;
    /**
     * @remarks
     * Whether it is lightning after the change in weather.
     *
     */
    readonly lightning: boolean;
    /**
     * @remarks
     * Whether it is raining after the change in weather.
     *
     */
    readonly raining: boolean;
}

/**
 * @beta
 * Manages callbacks that are connected to weather changing.
 */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void;
}

/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    private constructor();
    /**
     * @beta
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world.  Event callbacks are called in a deferred
     * manner. Event callbacks are executed in read-write mode.
     * @example sub_and_unsub.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * const callback = world.beforeEvents.itemUse.subscribe((event) => {}); // your event
     * world.beforeEvents.itemUse.unsubscribe(callback); // unsubscribe
     * ```
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * @beta
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world. Event callbacks are called immediately. Event
     * callbacks are executed in read-only mode.
     * @example privilege.js
     * ```js
     * import { world, system, TimeOfDay } from "@minecraft/server";
     *
     * world.beforeEvents.chatSend.subscribe((event) => {
     *     event.cancel = true;
     *     // setTime changes world state, must be run after its execution by a tick
     *     system.run(() => {
     *         world.setTime(TimeOfDay.Night);
     *     });
     * });
     * ```
     * @example sub_and_unsub.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * const callback = world.afterEvents.buttonPush.subscribe((event) => {}); // event
     * world.afterEvents.buttonPush.unsubscribe(callback); // unsubscribe
     * ```
     */
    readonly beforeEvents: WorldBeforeEvents;
    /**
     * @beta
     * @remarks
     * Returns the general global scoreboard that applies to the
     * world.
     * @example getScoreboard.js
     * ```js
     * import { world } from "@minecraft/server";
     * const money = world.scoreboard.getObjective("money");
     * ```
     */
    readonly scoreboard: Scoreboard;
    /**
     * @beta
     * @remarks
     * A method that is internal-only, used for broadcasting
     * specific messages between client and server.
     *
     * This function can't be called in read-only mode.
     *
     * @param id
     * The message identifier.
     * @param value
     * The message.
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @beta
     */
    clearDynamicProperties(): void;
    /**
     * @beta
     * @remarks
     * Returns the absolute time since the start of the world.
     *
     */
    getAbsoluteTime(): number;
    /**
     * @remarks
     * Returns an array of all active players within the world.
     *
     * @throws This function can throw errors.
     */
    getAllPlayers(): Player[];
    /**
     * @beta
     * @remarks
     * Returns the current day.
     *
     * @returns
     * The current day, determined by the world time divided by the
     * number of ticks per day. New worlds start at day 0.
     */
    getDay(): number;
    /**
     * @beta
     * @remarks
     * Returns the default Overworld spawn location.
     *
     * @returns
     * The default Overworld spawn location. By default, the Y
     * coordinate is 32767, indicating a player's spawn height is
     * not fixed and will be determined by surrounding blocks.
     */
    getDefaultSpawnLocation(): Vector3;
    /**
     * @remarks
     * Returns a dimension object.
     *
     * @param dimensionId
     * The name of the dimension. For example, "overworld",
     * "nether" or "the_end".
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     * @example getNether.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.getDimension("nether");
     * ```
     * @example getOverworld.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.getDimension("overworld");
     * ```
     * @example getTheEnd.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.getDimension("the_end");
     * ```
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @beta
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws
     * Throws if the given dynamic property identifier is not
     * defined.
     * @example incrementProperty.ts
     * ```typescript
     *   let number = mc.world.getDynamicProperty("samplelibrary:number");
     *
     *   log("Current value is: " + number);
     *
     *   if (number === undefined) {
     *     number = 0;
     *   }
     *
     *   if (typeof number !== "number") {
     *     log("Number is of an unexpected type.");
     *     return -1;
     *   }
     *
     *   mc.world.setDynamicProperty("samplelibrary:number", number + 1);
     * ```
     * @example incrementPropertyInJsonBlob.ts
     * ```typescript
     *   let paintStr = mc.world.getDynamicProperty("samplelibrary:longerjson");
     *   let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *   log("Current value is: " + paintStr);
     *
     *   if (paintStr === undefined) {
     *     paint = {
     *       color: "purple",
     *       intensity: 0,
     *     };
     *   } else {
     *     if (typeof paintStr !== "string") {
     *       log("Paint is of an unexpected type.");
     *       return -1;
     *     }
     *
     *     try {
     *       paint = JSON.parse(paintStr);
     *     } catch (e) {
     *       log("Error parsing serialized struct.");
     *       return -1;
     *     }
     *   }
     *
     *   if (!paint) {
     *     log("Error parsing serialized struct.");
     *     return -1;
     *   }
     *
     *   paint.intensity++;
     *   paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *   mc.world.setDynamicProperty("samplelibrary:longerjson", paintStr);
     * ```
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @beta
     */
    getDynamicPropertyIds(): string[];
    /**
     * @beta
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @beta
     * @remarks
     * Returns an entity based on the provided id.
     *
     * @param id
     * The id of the entity.
     * @returns
     * The requested entity object.
     * @throws
     * Throws if the given entity id is invalid.
     */
    getEntity(id: string): Entity | undefined;
    /**
     * @beta
     * @remarks
     * Returns the MoonPhase for the current time.
     *
     */
    getMoonPhase(): MoonPhase;
    /**
     * @beta
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws
     * Throws if the provided EntityQueryOptions are invalid.
     * @example getFamily.js
     * ```js
     * import { world } from "@minecraft/server";
     * world.getPlayers({ families: ["player"] });
     * ```
     * @example getFilteredPlayers.ts
     * ```ts
     * const entityQueryOptions: EntityQueryOptions = {
     *     minLevel: 10,
     *     maxLevel: 30,
     *     tags: ["team_red"],
     *     excludeNames: ["Admin"],
     * };
     *
     * const filteredPlayers = world.getPlayers(entityQueryOptions);
     * console.log(
     *     "Filtered Players:",
     *     filteredPlayers.map((player) => player.name)
     * );
     * ```
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @beta
     * @remarks
     * Returns the time of day.
     *
     * @returns
     * The time of day, in ticks, between 0 and 24000.
     */
    getTimeOfDay(): number;
    /**
     * @beta
     * @remarks
     * Plays a particular music track for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example playMusicAndSound.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   const musicOptions: mc.MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   mc.world.playMusic("music.menu", musicOptions);
     *
     *   const worldSoundOptions: mc.WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: mc.PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound("bucket.fill_water", playerSoundOptions);
     * ```
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Plays a sound for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * An error will be thrown if pitch is less than 0.01.
     * An error will be thrown if volume is less than 0.0.
     * @example playMusicAndSound.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   const musicOptions: mc.MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   mc.world.playMusic("music.menu", musicOptions);
     *
     *   const worldSoundOptions: mc.WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: mc.PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound("bucket.fill_water", playerSoundOptions);
     * ```
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @beta
     * @remarks
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     *
     * This function can't be called in read-only mode.
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Sends a message to all players.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     * // Displays "Apple or Coal"
     * let rawMessage = {
     *   translate: "accessibility.list.or.two",
     *   with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     * };
     * world.sendMessage(rawMessage);
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: "*", objective: "obj" } };
     * world.sendMessage(rawMessage);
     * ```
     * @example simpleString.ts
     * ```typescript
     * // Displays "Hello, world!"
     * world.sendMessage("Hello, world!");
     * ```
     * @example translation.ts
     * ```typescript
     * // Displays "First or Second"
     * const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     * world.sendMessage(rawMessage);
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @beta
     * @remarks
     * Sets the world time.
     *
     * This function can't be called in read-only mode.
     *
     * @param absoluteTime
     * The world time, in ticks.
     * @example setDay.js
     * ```js
     * import { TimeOfDay, world } from "@minecraft/server";
     * world.setAbsoluteTime(TimeOfDay.Noon);
     * ```
     */
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @beta
     * @remarks
     * Sets a default spawn location for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @param spawnLocation
     * Location of the spawn point. Note that this is assumed to be
     * within the overworld dimension.
     * @throws
     * Throws if the provided spawn location is out of bounds.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example setWorldSpawn.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.setDefaultSpawnLocation({
     *     x: 0,
     *     y: -64,
     *     z: 0,
     * });
     * ```
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /**
     * @beta
     * @remarks
     * Sets a specified property to a value.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set.
     * @throws
     * Throws if the given dynamic property identifier is not
     * defined.
     * @example incrementProperty.ts
     * ```typescript
     *   let number = mc.world.getDynamicProperty("samplelibrary:number");
     *
     *   log("Current value is: " + number);
     *
     *   if (number === undefined) {
     *     number = 0;
     *   }
     *
     *   if (typeof number !== "number") {
     *     log("Number is of an unexpected type.");
     *     return -1;
     *   }
     *
     *   mc.world.setDynamicProperty("samplelibrary:number", number + 1);
     * ```
     * @example incrementPropertyInJsonBlob.ts
     * ```typescript
     *   let paintStr = mc.world.getDynamicProperty("samplelibrary:longerjson");
     *   let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *   log("Current value is: " + paintStr);
     *
     *   if (paintStr === undefined) {
     *     paint = {
     *       color: "purple",
     *       intensity: 0,
     *     };
     *   } else {
     *     if (typeof paintStr !== "string") {
     *       log("Paint is of an unexpected type.");
     *       return -1;
     *     }
     *
     *     try {
     *       paint = JSON.parse(paintStr);
     *     } catch (e) {
     *       log("Error parsing serialized struct.");
     *       return -1;
     *     }
     *   }
     *
     *   if (!paint) {
     *     log("Error parsing serialized struct.");
     *     return -1;
     *   }
     *
     *   paint.intensity++;
     *   paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *   mc.world.setDynamicProperty("samplelibrary:longerjson", paintStr);
     * ```
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @beta
     * @remarks
     * Sets the time of day.
     *
     * This function can't be called in read-only mode.
     *
     * @param timeOfDay
     * The time of day, in ticks, between 0 and 24000.
     * @throws
     * Throws if the provided time of day is not within the valid
     * range.
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    /**
     * @beta
     * @remarks
     * Stops any music tracks from playing.
     *
     * This function can't be called in read-only mode.
     *
     */
    stopMusic(): void;
}

/**
 * @beta
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     * @example setBlockBack.ts
     * ```ts
     * import { world, BlockExplodeAfterEvent } from "@minecraft/server";
     *
     * world.afterEvents.blockExplode.subscribe((event: BlockExplodeAfterEvent) => {
     *     console.log("Block:", event.block);
     *     console.log("Dimension:", event.dimension);
     *     console.log("Exploded Block Permutation:", event.explodedBlockPermutation);
     *     console.log("Source:", event.source);
     *
     *     // set block back
     *     event.block.setPermutation(event.explodedBlockPermutation);
     * });
     * ```
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a button is pushed.
     * @example subscribe.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.afterEvents.buttonPush.subscribe((event) => {
     *     console.log("Button: ", event.block.typeId);
     *     console.log("Dimension: ", event.dimension.id);
     *     console.log("Source: ", event.source.typeId);
     * });
     * ```
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     * @example subscribe.js
     * ```js
     * import { WeatherType, system, world } from "@minecraft/server";
     *
     * const chatObjective =
     *     world.scoreboard.getObjective("chat") ??
     *     world.scoreboard.addObjective("chat", "chat");
     *
     * world.afterEvents.chatSend.subscribe((event) => {
     *     const { sender } = event;
     *
     *     const score = chatObjective.hasParticipant(sender)
     *         ? chatObjective.getScore(sender.scoreboardIdentity)
     *         : 0;
     *     chatObjective.setScore(sender, score + 1);
     * });
     * ```
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     * @example sheepEventListener.ts
     * ```ts
     * import { world, system, Entity } from "@minecraft/server";
     *
     * const eventId = "minecraft:entity_spawned";
     *
     * system.runInterval(() => {
     *     for (let player of world.getAllPlayers()) {
     *         let [entityRaycaseHit] = player.getEntitiesFromViewDirection({
     *             maxDistance: 150,
     *         });
     *         if (!entityRaycaseHit) continue;
     *         let entity = entityRaycaseHit.entity;
     *
     *         if (entity?.typeId === "minecraft:sheep") {
     *             listenTo(entity);
     *             entity.triggerEvent(eventId);
     *         }
     *     }
     * });
     *
     * function listenTo(entity: Entity) {
     *     const callback = world.afterEvents.dataDrivenEntityTriggerEvent.subscribe(
     *         (data) => {
     *             world.afterEvents.dataDrivenEntityTriggerEvent.unsubscribe(
     *                 callback
     *             );
     *
     *             data.getModifiers().forEach((modifier) => {
     *                 console.log(
     *                     "ComponentGroupsToAdd:",
     *                     modifier.getComponentGroupsToAdd()
     *                 );
     *                 console.log(
     *                     "ComponentGroupsToRemove:",
     *                     modifier.getComponentGroupsToRemove()
     *                 );
     *                 console.log("Triggers:", modifier.getTriggers());
     *             });
     *         },
     *         { entities: [entity], eventTypes: [eventId] }
     *     );
     * }
     * ```
     */
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     * @example effectAdd.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * const effectAddSubscription = world.afterEvents.effectAdd.subscribe(
     *     (event) => {
     *         console.log("Effect:", event.effect);
     *         console.log("Effect State:", event.effectState);
     *         console.log("Entity:", event.entity);
     *
     *         // Your custom handling for the effect added event
     *         // Example: Notify players, update UI, etc.
     *     },
     *     {
     *         // Optionally provide EntityEventOptions to filter entities or entity types
     *         entities: [],
     *         entityTypes: ["minecraft:creeper", "minecraft:player"], // Array of entity type IDs
     *     }
     * );
     *
     * // Later, you can unsubscribe when needed
     * world.afterEvents.effectAdd.unsubscribe(effectAddSubscription);
     * ```
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity dies.
     * @example deathMessage.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.afterEvents.entityDie.subscribe((event) => {
     *     world.sendMessage(
     *         `${event.deadEntity.typeId} died from ${event.damageSource}!`
     *     );
     * });
     * ```
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when entity health changes in any degree.
     * @example logger.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * const healthChangedSubscription =
     *     world.afterEvents.entityHealthChanged.subscribe(
     *         (event) => {
     *             console.log("Entity:", event.entity);
     *             console.log("Old Health:", event.oldValue);
     *             console.log("New Health:", event.newValue);
     *
     *             // Your custom handling for entity health change event
     *             // Example: Display a message, update UI, etc.
     *         },
     *         {
     *             // Optionally provide EntityEventOptions to filter entities or entity types
     *             entities: [],
     *             entityTypes: ["minecraft:player", "minecraft:zombie"], // Array of entity type IDs
     *         }
     *     );
     *
     * // Later, you can unsubscribe when needed
     * world.afterEvents.entityHealthChanged.unsubscribe(healthChangedSubscription);
     * ```
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) a block.
     * @example getDistance.js
     * ```js
     * import { world } from "@minecraft/server";
     * world.afterEvents.entityHitEntity.subscribe((event) => {
     *     const location1 = event.damagingEntity.location;
     *     const location2 = event.hitEntity.location;
     *
     *     const distance = Math.pow(
     *         Math.pow(location2.x - location1.x, 2) +
     *             Math.pow(location2.y - location1.y, 2) +
     *             Math.pow(location2.z - location1.z, 2),
     *         0.5
     *     );
     *
     *     console.log("Distance: " + distance + " blocks");
     * });
     * ```
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) another entity.
     * @example getDistance.js
     * ```js
     * import { world } from "@minecraft/server";
     * world.afterEvents.entityHitBlock.subscribe((event) => {
     *     const location1 = event.damagingEntity.location;
     *     const location2 = event.hitBlock.location;
     *
     *     const distance = Math.pow(
     *         Math.pow(location2.x - location1.x, 2) +
     *             Math.pow(location2.y - location1.y, 2) +
     *             Math.pow(location2.z - location1.z, 2),
     *         0.5
     *     );
     *
     *     console.log("Distance: " + distance + " blocks");
     * });
     * ```
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     * @example entityHurt.js
     * ```js
     * import { Player, world } from "@minecraft/server";
     * world.afterEvents.entityHurt.subscribe((event) => {
     *     if (event.hurtEntity instanceof Player) {
     *         event.hurtEntity.sendMessage(
     *             "You were hurt from " + event.damageSource.cause + "!"
     *         );
     *     }
     * });
     * ```
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @beta
     * @remarks
     * Fires when an entity is loaded.
     * @example inform.ts
     * ```ts
     * // Subscribe to the EntityLoadAfterEvent
     * const entityLoadSubscription = world.afterEvents.entityLoad.subscribe(
     *     (event: EntityLoadAfterEvent) => {
     *         // Handle the entity load event
     *         console.log(`Entity loaded: ${event.entity.typeId}`);
     *     }
     * );
     *
     * // ... Later in your code, when you want to unsubscribe
     * world.afterEvents.entityLoad.unsubscribe(entityLoadSubscription);
     * ```
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @beta
     * @remarks
     * Fires when an entity is removed (for example, potentially
     * unloaded, or removed after being killed).
     *
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity is spawned.
     *
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is fired after an explosion occurs.
     * @example log.ts
     * ```ts
     * // Subscribe to the ExplosionAfterEvent
     * const explosionSubscription = world.afterEvents.explosion.subscribe(
     *     (event: ExplosionAfterEvent) => {
     *         console.log(`Explosion occurred in dimension ${event.dimension.id}`);
     *
     *         if (event.source) {
     *             console.log(`Explosion source: ${event.source.typeId}`);
     *         } else {
     *             console.log(`Explosion source: None`);
     *         }
     *
     *         const impactedBlocks = event.getImpactedBlocks();
     *         console.log(`Impacted blocks: ${JSON.stringify(impactedBlocks)}`);
     *     }
     * );
     *
     * // ... Later in your code, when you want to unsubscribe
     * world.afterEvents.explosion.unsubscribe(explosionSubscription);
     * ```
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item completes charging.
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * For custom items, this event is triggered when the
     * fundamental set of defined components for the item change.
     * Note that this event is only fired for custom data-driven
     * items.
     *
     */
    readonly itemDefinitionEvent: ItemDefinitionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item starts charging.
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a player successfully uses an item or
     * places a block by pressing the Use Item / Place Block
     * button. If multiple blocks are placed, this event will only
     * occur once at the beginning of the block placement. Note:
     * This event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item stops charging.
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an item is used on a block by a
     * player.
     *
     */
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    /**
     * @remarks
     * A lever has been pulled.
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     *
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires for a block that is broken by a player.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @beta
     * @remarks
     * Fires when a player moved to a different dimension.
     *
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * @beta
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @beta
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     * @example subscribe.js
     * ```js
     * import { world } from "@minecraft/server";
     * world.afterEvents.playerJoin.subscribe(({ playerId, playerName }) => {
     *     world.sendMessage(
     *         `Player ${playerName} (${playerId}) has just joined the world.`
     *     );
     * });
     * ```
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player leaves a world.
     * @example subscribe.js
     * ```js
     * import { world } from "@minecraft/server";
     * world.afterEvents.playerLeave.subscribe(({ playerId, playerName }) => {
     *     world.sendMessage(
     *         `Player ${playerName} (${playerId}) has just left the world.`
     *     );
     * });
     * ```
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires for a block that is placed by a player.
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     * @example initialSpawn.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.afterEvents.playerSpawn.subscribe((eventData) => {
     *     let { player, initialSpawn } = eventData;
     *     if (!initialSpawn) return;
     *
     *     // This runs when the player joins the game for the first time!
     * });
     * ```
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A pressure plate has popped back up (i.e., there are no
     * entities on the pressure plate.)
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A pressure plate has pushed (at least one entity has moved
     * onto a pressure plate.)
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a projectile hits a block.
     *
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a projectile hits an entity.
     *
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A target block was hit.
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A trip wire was tripped.
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event will be triggered when the weather changes within
     * Minecraft.
     *
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when the script environment is initialized
     * on a World. In addition, you can register dynamic properties
     * within the scope of a world Initialize event.
     *
     */
    readonly worldInitialize: WorldInitializeAfterEventSignal;
}

/**
 * @beta
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error. (e.g., dimension.spawnEntity)
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     * @example subscribe.js
     * ```js
     * import { WeatherType, system, world } from "@minecraft/server";
     *
     * world.beforeEvents.chatSend.subscribe((event) => {
     *     const { message, sender } = event;
     *     const { dimension } = sender;
     *
     *     if (message === "!weather clear") {
     *         event.cancel = true;
     *         system.run(() => {
     *             dimension.setWeather(WeatherType.Clear);
     *         });
     *     }
     * });
     * ```
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     *
     */
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered after an event has been added to an
     * entity.
     *
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * Fires before an entity is removed from the world (for
     * example, unloaded or removed after being killed.)
     *
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event is fired after an explosion occurs.
     *
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * For custom items, this event is triggered when the
     * fundamental set of defined components for the item change.
     * Note that this event is only fired for custom data-driven
     * items.
     *
     */
    readonly itemDefinitionEvent: ItemDefinitionBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is used on a block by a
     * player.
     * @example subscribe.ts
     * ```ts
     * import {
     *     world,
     *     MinecraftBlockTypes,
     *     MinecraftItemTypes,
     *     Player,
     * } from "@minecraft/server";
     *
     * // Subscribe to the itemUseOn event before it happens
     * world.beforeEvents.itemUseOn.subscribe((event) => {
     *     const { source, block, itemStack } = event;
     *     if (!(source instanceof Player)) return;
     *
     *     source.sendMessage("You used " + itemStack.typeId + " on " + block.typeId);
     *
     *     // If the item is a diamond, set the block to be a diamond block
     *     if (itemStack.typeId === MinecraftItemTypes.diamond.id) {
     *         block.setType(MinecraftBlockTypes.diamondBlock);
     *     }
     * });
     * ```
     */
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a piston expands or retracts.
     *
     */
    readonly pistonActivate: PistonActivateBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires before a block is broken by a player.
     *
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @beta
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @beta
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @beta
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires before a block is placed by a player.
     *
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
}

/**
 * @beta
 * Contains information and methods that can be used at the
 * initialization of the scripting environment for a World.
 * Also, use the supplied propertyRegistry object to register
 * any dynamic properties, within the scope of the World
 * Initialize execution.
 */
export class WorldInitializeAfterEvent {
    private constructor();
}

/**
 * @beta
 * Manages callbacks that are run at the initialization of the
 * scripting environment for a World. Do note that this event
 * may run multiple times within a session in the case that the
 * /reload command is used.
 */
export class WorldInitializeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the scripting
     * environment is initialized for a World.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called the scripting
     * environment is initialized for a World.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void;
}

/**
 * @beta
 * Contains optional parameters for registering a block event.
 */
export interface BlockEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted block's type matches this parameter.
     *
     */
    blockTypes?: string[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted block's permutation matches this parameter.
     *
     */
    permutations?: BlockPermutation[];
}

/**
 * @beta
 * Contains additional options for a block fill operation.
 */
export interface BlockFillOptions {
    /**
     * @remarks
     * When specified, the fill operation will only apply to blocks
     * that match this description.
     *
     */
    matchingBlock?: BlockPermutation;
}

/**
 * @beta
 * Contains more information for events where a block is hit.
 */
export interface BlockHitInformation {
    /**
     * @remarks
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * Face of the block that was hit.
     *
     */
    face: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: Vector3;
}

/**
 * @beta
 * Contains information for block raycast hit results.
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * Face of the block that was hit.
     *
     */
    face: Direction;
    /**
     * @remarks
     * Hit location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: Vector3;
}

/**
 * @beta
 * Contains additional options for configuring a block raycast
 * query.
 */
export interface BlockRaycastOptions {
    /**
     * @remarks
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * @beta
 * A BlockVolume is a simple interface to an object which
 * represents a 3D rectangle of a given size (in blocks) at a
 * world block location.
 * Note that these are not analogous to "min" and "max" values,
 * in that the vector components are not guaranteed to be in
 * any order.
 * In addition, these vector positions are not interchangeable
 * with BlockLocation.
 * If you want to get this volume represented as range of of
 * BlockLocations, you can use the getBoundingBox utility
 * function.
 * This volume class will maintain the ordering of the corner
 * indexes as initially set. imagine that each corner is
 * assigned in Editor - as you move the corner around
 * (potentially inverting the min/max relationship of the
 * bounds) - what
 * you had originally selected as the top/left corner would
 * traditionally become the bottom/right.
 * When manually editing these kinds of volumes, you need to
 * maintain the identity of the corner as you edit - the
 * BlockVolume utility functions do this.
 *
 * Important to note that this measures block sizes (to/from) -
 * a normal AABB (0,0,0) to (0,0,0) would traditionally be of
 * size (0,0,0)
 * However, because we're measuring blocks - the size or span
 * of a BlockVolume would actually be (1,1,1)
 *
 */
export interface BlockVolume {
    /**
     * @remarks
     * A world block location that represents a corner in a 3D
     * rectangle
     *
     */
    from: Vector3;
    /**
     * @remarks
     * A world block location that represents the opposite corner
     * in a 3D rectangle
     *
     */
    to: Vector3;
}

/**
 * @beta
 * A BoundingBox is an interface to an object which represents
 * an AABB aligned rectangle.
 * The BoundingBox assumes that it was created in a valid state
 * (min <= max) but cannot guarantee it (unless it was created
 * using the associated {@link
 * @minecraft-server.BoundingBoxUtils} utility functions.
 * The min/max coordinates represent the diametrically opposite
 * corners of the rectangle.
 * The BoundingBox is not a representation of blocks - it has
 * no association with any type, it is just a mathematical
 * construct - so a rectangle with
 * ( 0,0,0 ) -> ( 0,0,0 )
 * has a size of ( 0,0,0 ) (unlike the very similar {@link
 * BlockVolume} object)
 */
export interface BoundingBox {
    /**
     * @remarks
     * A {@link @minecraft-server.Vector3} that represents the
     * largest corner of the rectangle
     *
     */
    max: Vector3;
    /**
     * @remarks
     * A {@link @minecraft-server.Vector3} that represents the
     * smallest corner of the rectangle
     *
     */
    min: Vector3;
}

/**
 * @beta
 */
export interface CameraDefaultOptions {
    easeOptions: CameraEaseOptions;
}

/**
 * @beta
 * Contains options associated with a camera ease operation.
 */
export interface CameraEaseOptions {
    /**
     * @remarks
     * Time for the ease operation.
     *
     */
    easeTime?: number;
    /**
     * @remarks
     * Type of ease operation to use.
     *
     */
    easeType?: EasingType;
}

/**
 * @beta
 * Used to initiate a full-screen color fade.
 */
export interface CameraFadeOptions {
    /**
     * @remarks
     * Fade color to use.
     *
     */
    fadeColor?: RGB;
    /**
     * @remarks
     * Time in seconds for the fade-in, hold, and fade-out seconds.
     *
     */
    fadeTime?: CameraFadeTimeOptions;
}

/**
 * @beta
 * Contains timings for a fade transition.
 */
export interface CameraFadeTimeOptions {
    /**
     * @remarks
     * Time, in seconds, for a fade-in.
     *
     */
    fadeInTime: number;
    /**
     * @remarks
     * Time, in seconds, for a fade-out.
     *
     */
    fadeOutTime: number;
    /**
     * @remarks
     * Time, in seconds, to hold the full screen color.
     *
     */
    holdTime: number;
}

/**
 * @beta
 */
export interface CameraSetFacingOptions {
    easeOptions?: CameraEaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}

/**
 * @beta
 */
export interface CameraSetLocationOptions {
    easeOptions?: CameraEaseOptions;
    location: Vector3;
}

/**
 * @beta
 */
export interface CameraSetPosOptions {
    easeOptions?: CameraEaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}

/**
 * @beta
 */
export interface CameraSetRotOptions {
    easeOptions?: CameraEaseOptions;
    location?: Vector3;
    rotation: Vector2;
}

/**
 * @beta
 * This interface defines an entry into the {@link
 * @minecraft-server/CompoundBlockVolume} which represents a
 * volume of positive or negative space.
 *
 */
export interface CompoundBlockVolumeItem {
    /**
     * @remarks
     * The 'action' defines how the block volume is represented in
     * the compound block volume stack.
     * 'Add' creates a block volume which is positively selected
     * 'Subtract' creates a block volume which represents a hole or
     * negative space in the overall compound block volume.
     *
     */
    action?: CompoundBlockVolumeAction;
    /**
     * @remarks
     * The relativity enumeration determines whether the
     * BlockVolume specified is positioned relative to the parent
     * compound block volume origin, or in absolute world space.
     *
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /**
     * @remarks
     * The volume of space
     *
     */
    volume: BlockVolume;
}

/**
 * @beta
 * An exact coordinate within the world, including its
 * dimension and location.
 */
export interface DimensionLocation {
    /**
     * @remarks
     * Dimension that this coordinate is associated with.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * X component of this dimension-location.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this dimension-location.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this dimension-location.
     *
     */
    z: number;
}

/**
 * @beta
 * Additional options for when damage has been applied via a
 * projectile.
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * Optional entity that fired the projectile.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * Projectile that caused damage.
     *
     */
    damagingProjectile: Entity;
}

/**
 * @beta
 * Additional descriptions and metadata for a damage event.
 */
export interface EntityApplyDamageOptions {
    /**
     * @remarks
     * Underlying cause of the damage.
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * Optional entity that caused the damage.
     *
     */
    damagingEntity?: Entity;
}

/**
 * @beta
 * Provides information about how damage has been applied to an
 * entity.
 */
export interface EntityDamageSource {
    /**
     * @remarks
     * Cause enumeration of damage.
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * Optional entity that caused the damage.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * Optional projectile that may have caused damage.
     *
     */
    damagingProjectile?: Entity;
}

/**
 * @beta
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     *
     */
    eventTypes?: string[];
}

/**
 * @beta
 * Contains additional options for entity effects.
 */
export interface EntityEffectOptions {
    /**
     * @remarks
     * The strength of the effect.
     *
     */
    amplifier?: number;
    /**
     * @remarks
     * If true, will show particles when effect is on the entity.
     *
     */
    showParticles?: boolean;
}

/**
 * @beta
 * Contains optional parameters for registering an entity
 * event.
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
}

/**
 * @beta
 * Contains additional information about an entity that was
 * hit.
 */
export interface EntityHitInformation {
    /**
     * @remarks
     * Entity that was hit.
     *
     */
    entity: Entity;
}

/**
 * @beta
 * Contains options for selecting entities within an area.
 */
export interface EntityQueryOptions {
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    closest?: number;
    /**
     * @remarks
     * Excludes entities that match one or more of the specified
     * families.
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * Excludes entities that have a name that match one of the
     * specified values.
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * Excludes entities with a tag that matches one of the
     * specified values.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Excludes entities if they are one of the specified types.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * If specified, includes entities that match all of the
     * specified families.
     *
     */
    families?: string[];
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at most this level are
     * returned.
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at least this level are
     * returned.
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at least
     * this vertical rotation.
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * Includes entities with the specified name.
     *
     */
    name?: string;
    /**
     * @remarks
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * Includes entities that match all of the specified tags.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * If defined, entities that match this type are included.
     *
     */
    type?: string;
    /**
     * @beta
     * @remarks
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     *
     */
    volume?: BlockAreaSize;
}

/**
 * @beta
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * If set to true, entities and players within this score range
     * are excluded from query results.
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * If defined, only players that have a score equal to or over
     * minScore are included.
     *
     */
    minScore?: number;
    /**
     * @remarks
     * Identifier of the scoreboard objective to filter on.
     *
     */
    objective?: string;
}

/**
 * @beta
 * Contains information for entity raycast hit results.
 */
export interface EntityRaycastHit {
    /**
     * @remarks
     * Distance from ray origin to entity bounds.
     *
     */
    distance: number;
    /**
     * @remarks
     * Entity that was hit.
     *
     */
    entity: Entity;
}

/**
 * @beta
 * Contains additional options for an entity raycast operation.
 */
export interface EntityRaycastOptions {
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * @beta
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * Whether parts of the explosion also impact underwater.
     *
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * Whether the explosion will break blocks within the blast
     * radius.
     *
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     *
     */
    causesFire?: boolean;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    source?: Entity;
}

/**
 * @beta
 * Additional configuration options for {@link
 * World.playMusic}/{@link World.queueMusic} methods.
 */
export interface MusicOptions {
    /**
     * @remarks
     * Specifies a fade overlap for music at the end of play.
     *
     */
    fade?: number;
    /**
     * @remarks
     * If set to true, this music track will play repeatedly.
     *
     */
    loop?: boolean;
    /**
     * @remarks
     * Relative volume level of the music.
     *
     */
    volume?: number;
}

/**
 * @beta
 * Represents a min/max structure for expressing a potential
 * range of numbers.
 */
export interface NumberRange {
    /**
     * @remarks
     * Maximum value within a range.
     *
     */
    max: number;
    /**
     * @remarks
     * Minimum value within a range.
     *
     */
    min: number;
}

/**
 * @beta
 * Contains additional options for how an animation is played.
 */
export interface PlayAnimationOptions {
    /**
     * @remarks
     * Amount of time to fade out after an animation stops.
     *
     */
    blendOutTime?: number;
    /**
     * @remarks
     * Specifies a controller to use that has been defined on the
     * entity.
     *
     */
    controller?: string;
    /**
     * @remarks
     * Specifies the state to transition to.
     *
     */
    nextState?: string;
    /**
     * @remarks
     * Specifies a Molang expression for when this animation should
     * complete.
     *
     */
    stopExpression?: string;
}

/**
 * @beta
 * Additional options for how a sound plays for a player.
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * Location of the sound; if not specified, the sound is played
     * near a player.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * Optional pitch of the sound.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * Optional volume of the sound.
     *
     */
    volume?: number;
}

/**
 * @beta
 * Defines a JSON structure that is used for more flexible.
 * @example deathMessage.ts
 * ```ts
 * import { RawText, world } from "@minecraft/server";
 *
 * world.afterEvents.entityDie.subscribe((event) => {
 *     const rawtext: RawText = {
 *         rawtext: [
 *             { text: "§a" },
 *             {
 *                 translate: "death.attack.generic",
 *                 with: [event.deadEntity.typeId],
 *             },
 *         ],
 *     };
 *     world.sendMessage(rawtext);
 * });
 * ```
 */
export interface RawMessage {
    /**
     * @remarks
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * Provides a token that will get replaced with the value of a
     * score.
     *
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * Provides a translation token where, if the client has an
     * available resource in the players' language which matches
     * the token, will get translated on the client.
     *
     */
    translate?: string;
    /**
     * @remarks
     * Arguments for the translation token. Can be either an array
     * of strings or RawMessage containing an array of raw text
     * objects.
     *
     */
    with?: string[] | RawMessage;
}

/**
 * @beta
 * Provides a description of a score token to use within a raw
 * message.
 */
export interface RawMessageScore {
    /**
     * @remarks
     * Name of the score value to match.
     *
     */
    name?: string;
    /**
     * @remarks
     * Name of the score value to match.
     *
     */
    objective?: string;
}

/**
 * @beta
 * A `RawMessage` with only the `rawtext` property. When a
 * `RawMessage` is serialized the contents are put into a
 * rawtext property, so this is useful when reading saved
 * RawMessages. See `BlockSignComponent.setText` and
 * `BlockSignComponent.getRawText` for examples.
 */
export interface RawText {
    /**
     * @remarks
     * A serialization of the current value of an associated sign.
     *
     */
    rawtext?: RawMessage[];
}

/**
 * @beta
 * Represents a fully customizable color within Minecraft.
 */
export interface RGB {
    /**
     * @remarks
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     *
     */
    blue: number;
    /**
     * @remarks
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     *
     */
    green: number;
    /**
     * @remarks
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     *
     */
    red: number;
}

/**
 * @beta
 * Represents a fully customizable color within Minecraft.
 */
export interface RGBA {
    /**
     * @remarks
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     *
     */
    alpha: number;
    /**
     * @remarks
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     *
     */
    blue: number;
    /**
     * @remarks
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     *
     */
    green: number;
    /**
     * @remarks
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     *
     */
    red: number;
}

/**
 * @beta
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * @remarks
     * Objective to be displayed.
     *
     */
    objective: ScoreboardObjective;
    /**
     * @remarks
     * The sort order to display the objective items within.
     *
     */
    sortOrder?: ObjectiveSortOrder;
}

/**
 * @beta
 * Contains additional options for registering a script event
 * event callback.
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * Optional list of namespaces to filter inbound script event
     * messages.
     *
     */
    namespaces: string[];
}

/**
 * @beta
 * Contains additional options for teleporting an entity.
 */
export interface TeleportOptions {
    /**
     * @remarks
     * Whether to check whether blocks will block the entity after
     * teleport.
     *
     */
    checkForBlocks?: boolean;
    /**
     * @remarks
     * Dimension to potentially move the entity to.  If not
     * specified, the entity is teleported within the dimension
     * that they reside.
     *
     */
    dimension?: Dimension;
    /**
     * @remarks
     * Location that the entity should be facing after teleport.
     *
     */
    facingLocation?: Vector3;
    /**
     * @remarks
     * Whether to retain the entities velocity after teleport.
     *
     */
    keepVelocity?: boolean;
    /**
     * @remarks
     * Rotation of the entity after teleport.
     *
     */
    rotation?: Vector2;
}

/**
 * @beta
 * Contains additional options for displaying a title and
 * optional subtitle.
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * Fade-in duration for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeInDuration: number;
    /**
     * @remarks
     * Fade-out time for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeOutDuration: number;
    /**
     * @remarks
     * Amount of time for the title and subtitle to stay in place,
     * in ticks. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     */
    stayDuration: number;
    /**
     * @remarks
     * Optional subtitle text.
     *
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

/**
 * @beta
 * Represents a two-directional vector.
 */
export interface Vector2 {
    /**
     * @remarks
     * X component of the two-dimensional vector.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of the two-dimensional vector.
     *
     */
    y: number;
}

/**
 * @beta
 * Contains a description of a vector.
 */
export interface Vector3 {
    /**
     * @remarks
     * X component of this vector.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this vector.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this vector.
     *
     */
    z: number;
}

/**
 * @beta
 * Contains additional options for a world-level playSound
 * occurrence.
 */
export interface WorldSoundOptions {
    /**
     * @remarks
     * Pitch of the sound played at the world level.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * Relative volume and space by which this sound is heard.
     *
     */
    volume?: number;
}

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CommandError extends Error {
    private constructor();
}

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}

/**
 * @beta
 * @remarks
 * Holds the number of MoonPhases
 *
 */
export const MoonPhaseCount = 8;
/**
 * @beta
 */
export const TicksPerDay = 24000;
/**
 * @beta
 * @remarks
 * How many times the server ticks per second of real time.
 *
 */
export const TicksPerSecond = 20;
/**
 * @remarks
 * A class that provides system-level events and functions.
 *
 */
export const system: System;
/**
 * @remarks
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 *
 */
export const world: World;
