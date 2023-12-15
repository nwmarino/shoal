/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

export default class sTrader {
    static exec(container: DependencyContainer, config: any): void {
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const globals = tables.globals.config;

        if (config.DisableFleaMarket)
            globals.RagFair.enabled = false;

        globals.RagFair.minUserLevel = config.FleaMarketAccessLevel;
    }
}