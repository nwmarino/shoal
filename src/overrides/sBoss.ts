/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

export default class sBoss
{
    static exec(container: DependencyContainer, config: any): void
    {
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const customs = tables.locations["bigmap"].base;
        const interchange = tables.locations["interchange"].base;
        const factoryDay = tables.locations["factory4_day"].base;
        const factoryNight = tables.locations["factory4_night"].base;
        const reserve = tables.locations["rezervbase"].base;
        const woods = tables.locations["woods"].base;
        const shoreline = tables.locations["shoreline"].base;
        const lighthouse = tables.locations["lighthouse"].base;
        const streets = tables.locations["tarkovstreets"].base;

        customs.BossLocationSpawn[0].BossChance = +config.CustomsGoonsquadBoss[0];
        customs.BossLocationSpawn[1].BossChance = +config.CustomsReshalaBoss[0];
        customs.BossLocationSpawn[1].BossEscortAmount = config.CustomsReshalaBoss[1];
        customs.BossLocationSpawn[2].BossChance = +config.CustomsCultistBoss[0];
        woods.BossLocationSpawn[0].BossChance = +config.WoodsGoonsquadBoss[0];
        woods.BossLocationSpawn[1].BossChance = +config.WoodsShturmanBoss[0];
        woods.BossLocationSpawn[1].BossEscortAmount = config.WoodsShturmanBoss[1];
        woods.BossLocationSpawn[2].BossChance = +config.WoodsCultistBoss[0];
        interchange.BossLocationSpawn[0].BossChance = +config.InterchangeKillaBoss[0];
        factoryDay.BossLocationSpawn[0].BossChance = +config.DayFactoryTagillaBoss[0];
        factoryNight.BossLocationSpawn[0].BossChance = +config.NightFactoryTagillaBoss[0];
        factoryNight.BossLocationSpawn[1].BossChance = +config.NightFactoryCultistBoss[0];
        lighthouse.BossLocationSpawn[2].BossChance = +config.LighthouseGoonsquadBoss[0];
        reserve.BossLocationSpawn[0].BossChance = +config.ReserveGlukharBoss[0];
        reserve.BossLocationSpawn[0].Supports[0].BossEscortAmount = config.ReserveGlukharBoss[1];
        reserve.BossLocationSpawn[0].Supports[1].BossEscortAmount = config.ReserveGlukharBoss[2];
        reserve.BossLocationSpawn[0].Supports[2].BossEscortAmount = config.ReserveGlukharBoss[0];
        shoreline.BossLocationSpawn[2].BossChance = +config.ShorelineSanitarBoss[0];
        shoreline.BossLocationSpawn[2].BossEscortAmount = config.ShorelineSanitarBoss[1];
        shoreline.BossLocationSpawn[2].BossZone = config.ShorelineSanitarBoss[2];
        shoreline.BossLocationSpawn[1].BossChance = +config.ShorelineGoonsquadBoss[0];
        shoreline.BossLocationSpawn[3].BossChance = +config.ShorelineCultistBoss[0];
        shoreline.BossLocationSpawn[4].BossChance = +config.ShorelineCultistBoss[0];
        streets.BossLocationSpawn[0].BossChance = +config.StreetsKabanBoss[0];
        streets.BossLocationSpawn[0].BossEscortAmount = config.StreetsKabanBoss[1];
        streets.BossLocationSpawn[1].BossChance = +config.StreetsKillaBoss[0];
    }
}