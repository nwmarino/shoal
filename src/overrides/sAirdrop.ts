/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { IAirdropConfig } from "@spt-aki/models/spt/config/IAirdropConfig";

// airdrop chances
export default class sAirdrop
{
    static exec(container: DependencyContainer, config: any): void
    {
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const airdrop = configServer.getConfig<IAirdropConfig>(ConfigTypes.AIRDROP).airdropChancePercent;

        airdrop.bigmap = config["CUSTOMS"];
        airdrop.woods = config["WOODS"];
        airdrop.lighthouse = config["LIGHTHOUSE"];
        airdrop.shoreline = config["SHORELINE"];
        airdrop.interchange = config["INTERCHANGE"];
        airdrop.reserve = config["RESERVE"];
        airdrop.tarkovStreets = config["STREETS"];
    }
}