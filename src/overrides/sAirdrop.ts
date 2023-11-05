/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";

export default class sAirdrop
{
    static exec(container: DependencyContainer, config: any): void
    {
        const airdrop = container.resolve<any>("spt-airdrop").AirdropChancePercent;

        airdrop.bigmap = config["CUSTOMS"];
        airdrop.woods = config["WOODS"];
        airdrop.lighthouse = config["LIGHTHOUSE"];
        airdrop.shoreline = config["SHORELINE"];
        airdrop.interchange = config["INTERCHANGE"];
        airdrop.reserve = config["RESERVE"];
        airdrop.tarkovStreets = config["STREETS"];
    }
}