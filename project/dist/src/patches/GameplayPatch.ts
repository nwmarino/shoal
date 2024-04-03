/* eslint-disable @typescript-eslint/brace-style */
import ModStorage from "../models/ModStorage";
import ServerPatch from "../models/ServerPatch";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { IConfig } from "@spt-aki/models/eft/common/IGlobals";
import { ILocations } from "@spt-aki/models/spt/server/ILocations";
import { IAirdropConfig } from "@spt-aki/models/spt/config/IAirdropConfig";
import { DependencyContainer } from "tsyringe";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";

export default class GameplayPatch implements ServerPatch
{
    expiremental: boolean;

    constructor(expiremental?: boolean) { this.expiremental = expiremental; }

    public enable(): boolean | void
    {
        const container = ModStorage.fetchContainer() as DependencyContainer;
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const airdrops: IAirdropConfig = configServer.getConfig<IAirdropConfig>(ConfigTypes.AIRDROP);
        const tables = ModStorage.fetchContainer(true) as IDatabaseTables;
        const globals: IConfig = tables.globals.config;
        const locals: ILocations = tables.locations;
        this._overrideGlobals(globals);
        this._overrideLocals(locals);
        this._modifyAirdrops(airdrops);
    }

    private _overrideGlobals(globals: IConfig): void
    {
        globals.TimeBeforeDeploy = ModStorage.getField("TimeBeforeDeploy");
        globals.TimeBeforeDeployLocal = ModStorage.getField("TimeBeforeDeploy");

        globals.SavagePlayCooldown = ModStorage.getField("ScavengerModeCooldown");
        
        globals.exp.match_end.survivedMult = ModStorage.getField("ExtractedExperienceMultiplier");
        globals.exp.match_end.killedMult = ModStorage.getField("KilledExperienceMultiplier");
        
        if (ModStorage.getField("DisableSkillFatigue"))
        {
            globals.SkillFatiguePerPoint = 0;
            globals.SkillMinEffectiveness = 1.0;
            globals.SkillFreshEffectiveness = 1.0;
        }
    }

    private _overrideLocals(locals: ILocations): void
    {
        if (ModStorage.getField("AccessLabsWithoutCard"))
        { locals.laboratory.base.AccessKeys = []; }

        if (ModStorage.getField("DisableScavengerMode"))
        {
            for (const loc in locals) 
            {
                try { locals[loc].base.DisabledForScav = true; }
                catch (TypeError) { continue; }
            }
        }

        if (ModStorage.getField("ExtendRaidTimerToHour"))
        {
            for (const loc in locals)
            {
                try { locals[loc].base.EscapeTimeLimit = 60; }
                catch (TypeError) { continue; }
            }
        }
    }

    private _modifyAirdrops(airdrops: IAirdropConfig): void
    {
        airdrops.airdropChancePercent.bigmap = ModStorage.getField("CustomsAirdropChance");
        airdrops.airdropChancePercent.interchange = ModStorage.getField("InterchangeAirdropChance");
        airdrops.airdropChancePercent.lighthouse = ModStorage.getField("LighthouseAirdropChance");
        airdrops.airdropChancePercent.reserve = ModStorage.getField("ReserveAirdropChance");
        airdrops.airdropChancePercent.shoreline = ModStorage.getField("ShorelineAirdropChance");
        airdrops.airdropChancePercent.tarkovStreets = ModStorage.getField("StreetsAirdropChance");
        airdrops.airdropChancePercent.woods = ModStorage.getField("WoodsAirdropChance");
    }
}