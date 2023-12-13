/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

export default class sTrader {
    static exec(container: DependencyContainer, config: any): void {
        const configServer = container.resolve<ConfigServer>("ConfigServer");
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const globals = tables.globals.config;

        if (config["DISABLE_FLEA"])
            globals.RagFair.enabled = false;

        globals.RagFair.minUserLevel = config["FLEA_LEVEL"];
    }
}