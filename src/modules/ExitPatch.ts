/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { IDatabaseTables } from "../../types/models/spt/server/IDatabaseTables";
import { ILocations } from "@spt-aki/models/spt/server/ILocations";

import Exits from "./../data/Exits";
import { ExitGenerator } from "./../utils/ExitGenerator";

export default class ExitPatch
{
    static patch(container: DependencyContainer): void
    {
        const tables: IDatabaseTables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const maps: ILocations = tables.locations;

        for (const key in maps)
        {
            if (key == "base") continue;
            const mapBaseFile = maps[key].base;
            const allMapExits = Exits.getExitNames(key);
            const scavExits: string[] = allMapExits?.scav;

            if (scavExits)
                for (const exit in scavExits)
                    mapBaseFile.exits.push(ExitGenerator.genExit(scavExits[exit], true, "None", 0))
        }
    }
}