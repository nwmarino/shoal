/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";

export default class sPmc
{
    static exec(container: DependencyContainer, config: any): void
    {
        const pmc = container.resolve<any>("aki-pmc");
        const location = container.resolve<any>("aki-location");
        pmc.isUsec = config["USEC_BEAR_RATIO"];
        pmc.chanceSameSideIsHostilePercent = config["FRIENDLY_PMC_PERC"];
        pmc.maxBackpackLootTotalRub = config["MAX_BACKPACK_VALUE"];
        pmc.maxPocketLootTotalRub = config["MAX_POCKET_VALUE"];
        pmc.maxVestLootTotalRub = config["MAX_VEST_VALUE"];
        pmc.convertIntoPmcChance.assault.min = config["SCAV_TO_PMC"][0];
        pmc.convertIntoPmcChance.assault.max = config["SCAV_TO_PMC"][1];
        pmc.convertIntoPmcChance.cursedassault.min = config["CURSED_TO_PMC"][0];
        pmc.convertIntoPmcChance.cursedassault.max = config["CURSED_TO_PMC"][1];
        pmc.convertIntoPmcChance.pmcbot.min = config["RAIDER_TO_PMC"][0];
        pmc.convertIntoPmcChance.pmcbot.max = config["RAIDER_TO_PMC"][1];
        pmc.convertIntoPmcChance.exusec.min = config["ROGUE_TO_PMC"][0];
        pmc.convertIntoPmcChance.exusec.max = config["ROGUE_TO_PMC"][1];
        location.addCustomBotWavesToMaps = config["BOT_WAVES"];
    }
}