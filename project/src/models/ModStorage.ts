/* eslint-disable @typescript-eslint/brace-style */
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe"

export default abstract class ModStorage
{
    private static _container: DependencyContainer
    private static _configJson: any

    public static loadStorage(container: DependencyContainer, configJson: any): void
    {
        ModStorage._container = container;
        ModStorage._configJson = configJson;
    }

    public static fetchContainer(tables?: boolean): (DependencyContainer | IDatabaseTables)
    { 
        if (tables)
            return ModStorage._container.resolve<DatabaseServer>("DatabaseServer").getTables();
        return ModStorage._container;
    }

    public static getField(key: string): any { return ModStorage._configJson[key]; }

    public static setField(key: string, value: any): void { ModStorage._configJson[key] = value; }
}