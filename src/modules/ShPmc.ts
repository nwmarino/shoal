/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { IPmcConfig } from "@spt-aki/models/spt/config/IPmcConfig";
import { ILocationConfig } from "@spt-aki/models/spt/config/ILocationConfig";

export default class sPmc
{
    static exec(container: DependencyContainer, config: any): void
    {
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const pmc = configServer.getConfig<IPmcConfig>(ConfigTypes.PMC);
        const location = configServer.getConfig<ILocationConfig>(ConfigTypes.LOCATION);
        pmc.isUsec = config.UsecToBearRatio;
        pmc.chanceSameSideIsHostilePercent = config.PmcFriendlyChance;
        pmc.maxBackpackLootTotalRub = config.PmcBackpackMaxValue;
        pmc.maxVestLootTotalRub = config.PmcVestMaxValue;
        pmc.convertIntoPmcChance.assault.min = config.ScavengerToPmc;
        pmc.convertIntoPmcChance.assault.max = config.ScavengerToPmc;
        pmc.convertIntoPmcChance.cursedassault.min = config.ScavengerToPmc;
        pmc.convertIntoPmcChance.cursedassault.max = config.ScavengerToPmc;
        pmc.convertIntoPmcChance.pmcbot.min = config.RaiderToPmc;
        pmc.convertIntoPmcChance.pmcbot.max = config.RaiderToPmc;
        pmc.convertIntoPmcChance.exusec.min = config.RogueToPmc;
        pmc.convertIntoPmcChance.exusec.max = config.RogueToPmc;
        location.addCustomBotWavesToMaps = !config.DisableCustomBotWaves;
    }
}