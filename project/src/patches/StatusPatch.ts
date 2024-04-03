/* eslint-disable @typescript-eslint/brace-style */
import ServerPatch from "../models/ServerPatch";
import ModStorage from "../models/ModStorage";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { BodyPart, IBotType } from "@spt-aki/models/eft/common/tables/IBotType";
import { IConfig } from "@spt-aki/models/eft/common/IGlobals";

export default class StatusPatch implements ServerPatch
{
    expiremental: boolean;

    constructor(expiremental?: boolean) { this.expiremental = expiremental; }

    public enable(): void
    {
        const tables = ModStorage.fetchContainer(true) as IDatabaseTables;
        const globals: IConfig = tables.globals.config;

        this._modifyPlayerStatus(globals);
        this._modifyBotStatus(tables.bots.types)
    }

    /*private _modifyProfileHealth(profile: IAkiProfile): void
    *{
    *    const bodyParts: BodyPartsHealth = profile.characters.pmc.Health.BodyParts;
    *    bodyParts.Head = ModStorage.getField("PlayerHeadHealth");
    *    bodyParts.Chest = ModStorage.getField("PlayerChestHealth");
    *    bodyParts.Stomach = ModStorage.getField("PlayerStomachHealth");
    *    bodyParts.LeftArm = ModStorage.getField("PlayerLeftArmHealth");
    *    bodyParts.RightArm = ModStorage.getField("PlayerRightArmHealth");
    *    bodyParts.LeftLeg = ModStorage.getField("PlayerLeftLegHealth");
    *    bodyParts.RightLeg = ModStorage.getField("PlayerRightLegHealth");
    }*/

    private _modifyPlayerStatus(globals: IConfig): void
    {
        if (ModStorage.getField("DisableFallDamage"))
        { 
            globals.Health.Falling.DamagePerMeter = 0;
            globals.Health.Falling.SafeHeight = 120;
        }

        if (ModStorage.getField("DisableStatDrain"))
        {
            globals.Health.Effects.Existence.EnergyDamage = 0;
            globals.Health.Effects.Existence.HydrationDamage = 0;
        }
    }

    private _modifyBotStatus(botTypes: Record<string, IBotType>): void
    {
        for (const botType in botTypes) 
        {
            const bodyParts: BodyPart = botTypes[botType].health.BodyParts[0];
            let multiplier: number;

            if (botType.startsWith("assault") || botType.startsWith("cursedassault"))
            { multiplier = ModStorage.getField("ScavHealthMultiplier"); }
            else if (botType.startsWith("exusec") || botType.startsWith("pmcbot"))
            { multiplier = ModStorage.getField("SpecialHealthMultiplier"); }
            else if (botType.startsWith("boss"))
            { multiplier = ModStorage.getField("BossHealthMultiplier"); }
            else if (botType.startsWith("follower"))
            { multiplier = ModStorage.getField("BossFollowerHealthMultiplier"); }
            else
            { multiplier = 1.0; }

            if (multiplier != 1.0)
            {
                for (const bodyPart in bodyParts)
                {
                    bodyParts[bodyPart].min *= multiplier;
                    bodyParts[bodyPart].max *= multiplier;            
                }
            }
        }
    }
}