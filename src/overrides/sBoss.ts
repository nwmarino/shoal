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

        customs.BossLocationSpawn[0].BossChance = config["CUSTOMS_GOONS"][0];

        customs.BossLocationSpawn[1].BossChance = config["RESHALA"][0];
        customs.BossLocationSpawn[1].BossEscortAmount = config["RESHALA"][1];

        customs.BossLocationSpawn[2].BossChance = config["CUSTOMS_CULTIST"][0];
        customs.BossLocationSpawn[2].BossEscortAmount = config["CUSTOMS_CULTIST"][1];

        woods.BossLocationSpawn[0].BossChance = config["WOODS_GOONS"][0];

        woods.BossLocationSpawn[1].BossChance = config["SHTURMAN"][0];
        woods.BossLocationSpawn[1].BossEscortAmount = config["SHTURMAN"][1];

        woods.BossLocationSpawn[2].BossChance = config["WOODS_CULTIST"][0];
        woods.BossLocationSpawn[2].BossEscortAmount = config["WOODS_CULTIST"][1];
        woods.BossLocationSpawn[2].BossZone = config["WOODS_CULTIST"][2];

        interchange.BossLocationSpawn[0].BossChance = config["INTERCHANGE_KILLA"][0];

        factoryDay.BossLocationSpawn[0].BossChance = config["FACTORY_DAY_TAGILLA"][0];

        factoryNight.BossLocationSpawn[0].BossChance = config["FACTORY_NIGHT_TAGILLA"][0];

        factoryNight.BossLocationSpawn[1].BossChance = config["FACTORY_NIGHT_CULTIST"][0];
        factoryNight.BossLocationSpawn[1].BossEscortAmount = config["FACTORY_NIGHT_CULTIST"][1];

        lighthouse.BossLocationSpawn[0].BossChance = config["ZRYACHIY"][0];
        lighthouse.BossLocationSpawn[0].BossEscortAmount = config["ZRYACHIY"][1];

        lighthouse.BossLocationSpawn[2].BossChance = config["LIGHTHOUSE_GOONS"][0];
        lighthouse.BossLocationSpawn[2].BossZone = config["LIGHTHOUSE_GOONS"][1];

        reserve.BossLocationSpawn[0].BossChance = config["GLUKHAR"][0];
        reserve.BossLocationSpawn[0].Supports[0].BossEscortAmount = config["GLUKHAR"][1];
        reserve.BossLocationSpawn[0].Supports[1].BossEscortAmount = config["GLUKHAR"][2];
        reserve.BossLocationSpawn[0].Supports[2].BossEscortAmount = config["GLUKHAR"][0];

        shoreline.BossLocationSpawn[2].BossChance = config["SANITAR"][0];
        shoreline.BossLocationSpawn[2].BossEscortAmount = config["SANITAR"][1];
        shoreline.BossLocationSpawn[2].BossZone = config["SANITAR"][2];

        shoreline.BossLocationSpawn[1].BossChance = config["SHORELINE_GOONS"][0];

        shoreline.BossLocationSpawn[3].BossChance = config["SHORELINE_CULTIST"][0];
        shoreline.BossLocationSpawn[4].BossChance = config["SHORELINE_CULTIST"][0];
        shoreline.BossLocationSpawn[3].BossEscortAmount = config["SHORELINE_CULTIST"][1];
        shoreline.BossLocationSpawn[4].BossEscortAmount = config["SHORELINE_CULTIST"][1];

        streets.BossLocationSpawn[0].BossChance = config["KABAN"][0];
        streets.BossLocationSpawn[0].BossEscortAmount = config["KABAN"][1];

        streets.BossLocationSpawn[1].BossChance = config["STREETS_KILLA"][0];
    }
}