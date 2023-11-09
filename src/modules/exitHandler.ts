/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { container } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ILocationBase, Exit } from "@spt-aki/models/eft/common/ILocationBase";
import { ILocations } from "@spt-aki/models/spt/server/ILocations";

import ExitPatch from "./ExitPatch";
import Maps from "../data/Maps";
//import * as tooltips from "../data/tooltips.json";
import { ExitGenerator } from "../utils/ExitGenerator";

export default class ExitHandler
{
    constructor()
    {
        const tables: IDatabaseTables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const locations: ILocations = tables.locations;
        const mapNames: string[] = Maps.getMapNames();
        //const locales: Record<string, string> = tables.locales.global["en"];
        ExitPatch.patch(container);
        this.modExits(locations, mapNames);
        //this.modLocales(locales);
    }

    private modExits(locations: ILocations, mapNames: string[]): void
    {
        for (const key in mapNames)
        {
            const map = locations[key].base as ILocationBase;

            for (const exit of map.exits)
            {
                this.indiscriminateExits(exit, map);
                exit.ExfiltrationType = "Individual";
                exit.PlayersCount = 0;
                exit.Chance = 100;

                if (exit.PassageRequirement === "Train")
                    continue;

                this.convertCoopExits(exit);
            }
        }
    }

    // makes exits available from all spawn sides
    private indiscriminateExits(exit: Exit, location: ILocationBase): void
    {
        const allSpawnPoints = this.getSides(location);

        if (exit.EntryPoints !== allSpawnPoints)
            exit.EntryPoints = allSpawnPoints;
    }

    // makes scav co-op exits regular pmc exits
    private convertCoopExits(exit: Exit): void
    {
        if (exit.PassageRequirement !== "ScavCooperation")
            return;

        exit.PassageRequirement = "None";
        exit.RequirementTip = "";
    }

    // yoinked from open extracts... credit to them
    private getSides(location: ILocationBase): string
    {
        const entryPointsSet = new Set<string>();
        for (const extract in location.exits)
        {
            const entryPoints = location.exits[extract].EntryPoints.split(",");
            entryPoints.forEach((entryPoint: string) => entryPointsSet.add(entryPoint));
        }
        return Array.from(entryPointsSet).join(",");
    }

    /*/ modifies exits names based on tooltips.json
    private modLocales(locales: Record<string, string>): void
    {
        for (const key in tooltips)
            locales[key] = tooltips[key]
    }*/
}