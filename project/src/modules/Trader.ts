/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import Module from "./Module";

export default class Trader extends Module
{
    constructor(container: DependencyContainer, config: any)
    {
        super(container, config);
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const globals = tables.globals.config;

        if (config.DisableFleaMarket)
            globals.RagFair.enabled = false;

        globals.RagFair.minUserLevel = config.FleaMarketAccessLevel;
    }
}