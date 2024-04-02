/* eslint-disable @typescript-eslint/brace-style */
import { IPmcConfig } from "@spt-aki/models/spt/config/IPmcConfig";
import ServerPatch from "../models/ServerPatch";
import ModStorage from "../models/ModStorage";
import { DependencyContainer } from "tsyringe";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { ILocations } from "@spt-aki/models/spt/server/ILocations";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { BossLocationSpawn, ILocationBase } from "@spt-aki/models/eft/common/ILocationBase";

export default class BotPatch implements ServerPatch
{
    expiremental: boolean;

    constructor(expiremental?: boolean) { this.expiremental = expiremental; }

    public enable(): boolean | void
    {
        const container = ModStorage.fetchContainer() as DependencyContainer;
        const configServer: ConfigServer = container.resolve<ConfigServer>("ConfigServer");
        const pmc: IPmcConfig = configServer.getConfig<IPmcConfig>(ConfigTypes.PMC);
        const tables = ModStorage.fetchContainer(true) as IDatabaseTables;
        const locations: ILocations = tables.locations;
        this._modifyBosses(locations);
        this._modifyPlayerBots(pmc);
    }

    private _modifyBosses(locations: ILocations)
    {
        const customs: ILocationBase = locations.bigmap.base;
        const factoryDay: ILocationBase = locations.factory4_day.base;
        const factoryNight: ILocationBase = locations.factory4_night.base;
        const interchange: ILocationBase = locations.interchange.base;
        const lighthouse: ILocationBase = locations.lighthouse.base;
        const reserve: ILocationBase = locations.rezervbase.base;
        const shoreline: ILocationBase = locations.shoreline.base;
        const streets: ILocationBase = locations.tarkovstreets.base;
        const woods: ILocationBase = locations.woods.base;

        const locals: ILocationBase[] = [customs, factoryDay, factoryNight, interchange, lighthouse,
            reserve, shoreline, streets, woods]

        for (const map in locals)
        {
            const bosses = locals[map].BossLocationSpawn;
            for (const boss in bosses)
            {
                const bot: BossLocationSpawn = bosses[boss];
                const mapBase: ILocationBase = locals[map];

                if (bot.BossName == "bossKnight" && mapBase == customs)
                { bot.BossChance = ModStorage.getField("CustomsGoonsChance"); }

                if (bot.BossName == "bossBully" && mapBase == customs)
                {
                    bot.BossChance = ModStorage.getField("CustomsReshalaChance");
                    bot.BossEscortAmount = ModStorage.getField("CustomsReshalaFollowers");
                    bot.BossZone = ModStorage.getField("CustomsReshalaLocations");
                }

                if (bot.BossName == "sectantPriest" && mapBase == customs)
                { bot.BossChance = ModStorage.getField("CustomsCultistChance"); }

                if (bot.BossName == "bossTagilla" && mapBase == factoryDay)
                { bot.BossChance = ModStorage.getField("FactoryDayTagillaChance"); }

                if (bot.BossName == "bossTagilla" && mapBase == factoryNight)
                { bot.BossChance = ModStorage.getField("FactoryNightTagillaChance"); }

                if (bot.BossName == "sectantPriest" && mapBase == factoryNight)
                { bot.BossChance = ModStorage.getField("FactoryNightCultistChance"); }

                if (bot.BossName == "bossKilla" && mapBase == interchange)
                {
                    bot.BossChance = ModStorage.getField("InterchangeKillaChance");
                    bot.BossZone = ModStorage.getField("InterchangeKillaLocations");
                }

                if (bot.BossName == "bossKnight" && mapBase == lighthouse)
                {
                    bot.BossChance = ModStorage.getField("LighthouseGoonsChance");
                    bot.BossZone = ModStorage.getField("LighthouseGoonsLocations");
                }

                if (bot.BossName == "bossGluhar" && mapBase == reserve)
                {
                    bot.BossChance = ModStorage.getField("ReserveGluharChance");
                    bot.BossZone = ModStorage.getField("ReserveGluharLocations");
                    for (const follower in bot.Supports)
                    {
                        if (bot.Supports[follower].BossEscortType == "followerGluharAssault")
                        { bot.Supports[follower].BossEscortAmount = ModStorage.getField("ReserveGluharAssaultCount"); }

                        if (bot.Supports[follower].BossEscortType == "followerGluharSecurity")
                        { bot.Supports[follower].BossEscortAmount = ModStorage.getField("ReserveGluharSecurityCount"); }

                        if (bot.Supports[follower].BossEscortType == "followerGluharScout")
                        { bot.Supports[follower].BossEscortAmount = ModStorage.getField("ReserveGluharScoutCount"); }
                    }
                }

                if (bot.BossName == "bossKnight" && mapBase == shoreline)
                { bot.BossChance = ModStorage.getField("ShorelineGoonsChance"); }

                if (bot.BossName == "bossSanitar" && mapBase == shoreline)
                {
                    bot.BossChance = ModStorage.getField("ShorelineSanitarChance");
                    bot.BossZone = ModStorage.getField("ShorelineSanitarLocations");
                    bot.BossEscortAmount = ModStorage.getField("ShorelineSanitarFollowers");
                }

                if (bot.BossName == "sectantPriest" && mapBase == shoreline)
                { bot.BossChance = ModStorage.getField("ShorelineCultistChance"); }

                if (bot.BossName == "bossKolontay" && mapBase == streets)
                {
                    bot.BossChance = ModStorage.getField("StreetsKolontayChance");
                    bot.BossZone = ModStorage.getField("StreetsKolontayLocations");
                    for (const follower in bot.Supports)
                    {
                        if (bot.Supports[follower].BossEscortType == "followerKolontayAssault")
                        { bot.Supports[follower].BossEscortAmount = ModStorage.getField("StreetsKolontayAssaultCount"); }

                        if (bot.Supports[follower].BossEscortType == "followerKolontaySecurity")
                        { bot.Supports[follower].BossEscortAmount = ModStorage.getField("StreetsKolontaySecurityCount"); }
                    }
                }

                if (bot.BossName == "bossBoar" && mapBase == streets)
                {
                    bot.BossChance = ModStorage.getField("StreetsKabanChance");
                    for (const follower in bot.Supports)
                    {
                        if (bot.Supports[follower].BossEscortType == "followerBoar")
                        { bot.Supports[follower].BossEscortAmount = ModStorage.getField("StreetsKabanSecurityCount"); }
                        
                        if (bot.Supports[follower].BossEscortType == "followerBoarClose1")
                        { bot.Supports[follower].BossEscortAmount = ModStorage.getField("StreetsKabanClose1Count"); }

                        if (bot.Supports[follower].BossEscortType == "followerBoarClose2")
                        { bot.Supports[follower].BossEscortAmount = ModStorage.getField("StreetsKabanClose2Count"); }
                    }
                }

                if (bot.BossName == "bossBoarSniper" && mapBase == streets)
                { bot.BossEscortAmount = ModStorage.getField("StreetsKabanSniperCount"); }

                if (bot.BossName == "bossKnight" && mapBase == woods)
                { bot.BossChance = ModStorage.getField("WoodsGoonsChance"); }

                if (bot.BossName == "bossKojaniy" && mapBase == woods)
                {
                    bot.BossChance = ModStorage.getField("WoodsShturmanChance");
                    bot.BossEscortAmount = ModStorage.getField("WoodsShturmanFollowers");
                }

                if (bot.BossName == "sectantPriest" && mapBase == woods)
                { bot.BossChance = ModStorage.getField("WoodsCultistChance"); }
            }
        }
    }

    private _modifyPlayerBots(pmc: IPmcConfig): void
    {
        pmc.isUsec = ModStorage.getField("UsecBearRatio");
        pmc.chanceSameSideIsHostilePercent = ModStorage.getField("PmcFriendlyChance");
        pmc.maxBackpackLootTotalRub = ModStorage.getField("PmcMaxBackpackValue");
        pmc.maxVestLootTotalRub = ModStorage.getField("PmcMaxVestValue");
        pmc.maxPocketLootTotalRub = ModStorage.getField("PmcMaxPocketValue");

        pmc.convertIntoPmcChance.assault.min = ModStorage.getField("ScavengerToPmc");
        pmc.convertIntoPmcChance.assault.max = ModStorage.getField("ScavengerToPmc");

        pmc.convertIntoPmcChance.cursedassault.min = ModStorage.getField("ScavengerToPmc");
        pmc.convertIntoPmcChance.cursedassault.max = ModStorage.getField("ScavengerToPmc");

        pmc.convertIntoPmcChance.pmcbot.min = ModStorage.getField("RaiderToPmc");
        pmc.convertIntoPmcChance.pmcbot.max = ModStorage.getField("RaiderToPmc");

        pmc.convertIntoPmcChance.exusec.min = ModStorage.getField("RogueToPmc");
        pmc.convertIntoPmcChance.exusec.max = ModStorage.getField("RogueToPmc");
    }
}