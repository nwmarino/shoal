/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { container } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { IDatabaseTables } from "../../types/models/spt/server/IDatabaseTables";
import { ILocations } from "../../types/models/spt/server/ILocations";

import ExitPatch from "./ExitPatch";
import * as tooltips from "../data/tooltips.json";

export default class ExitHandler
{
    constructor()
    {
        const tables: IDatabaseTables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const locales: Record<string, string> = tables.locales.global["en"];
        ExitPatch.patch(container);
        this.modLocales(locales);
    }

    // force all exits to have guaranteed availability
    private forceExitChance(locations: ILocations): void
    {

    }

    // to allow scav co-op exits to be used by lone pmcs
    private modCoopExits(locations: ILocations): void
    {

    }

    // to allow exits be accessable regardless of spawn
    private nonPolarExits(locations: ILocations): void
    {

    }

    // modifies exits names based on tooltips.json
    private modLocales(locales: Record<string, string>): void
    {
        for (const key in tooltips)
            locales[key] = tooltips[key]
    }
}