/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ILocations } from "@spt-aki/models/spt/server/ILocations";

import Exits from "./../data/Exits";
import { ExitGenerator } from "./../utils/ExitGenerator";
export default class sExitPort
{
    static port(container: DependencyContainer): void
    {
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const maps = tables.locations as ILocations;

        for (const key in maps)
        {
            const baseFile = maps[key].base;
            const allLocExits = Exits.getExitNames(key);
            const scavExits = allLocExits?.scav;

            if (scavExits)
                for (const exit in scavExits)
                    baseFile.exits.push(ExitGenerator.genExit(scavExits[exit], false, "None", 0))
        }
    }
}