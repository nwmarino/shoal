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
            const mapName: string = mapNames[key];
            const mapBase: ILocationBase = locations[mapName].base;
            const mapExits: Exit[] = mapBase.exits;

            for (const exit in mapExits)
            {
                const exitName: string = mapExits[exit].Name;
                const exitEnabled: boolean = true;
                let exitRequirement: string = mapExits[exit].PassageRequirement ?? "None";
                let carCost: number = 0;

                // incase we have coop exits, etc.
                if (exitRequirement !== "TransferItem" && exitRequirement !== "WorldEvent")
                    exitRequirement = "None";

                // incase the exit is a car, make it 5k
                if (exitRequirement == "TransferItem")
                    carCost = 5000;

                mapExits[exit] = ExitGenerator.genExit(exitName, exitEnabled, exitRequirement, carCost) as Exit;
            }
        }
    }

    /*/ modifies exits names based on tooltips.json
    private modLocales(locales: Record<string, string>): void
    {
        for (const key in tooltips)
            locales[key] = tooltips[key]
    }*/
}