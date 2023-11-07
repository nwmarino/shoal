/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { ILocations } from "../../types/models/spt/server/ILocations";
import { ExitGenerator } from "./../utils/ExitGenerator";
import Maps from "./../data/Maps";
import sExitPort from "./sExitPort";
import { container } from "tsyringe";

export default class exitHandler
{
    constructor(locations: ILocations)
    {
        sExitPort.port(container);
        /*
        const mapNames = Maps.getMapNames();

        for (const n in mapNames)
        {
            const mapName = mapNames[n];
            const map = locations[mapName].base;
            const mapExits = map.exits;

            for (const exit in mapExits)
            {
                const exitName = mapExits[exit].Name;
                const exitEnabled = true;

                let exitRequirement = mapExits[exit].PassageRequirement ?? "None";

                if (exitRequirement !== "TransferItem" && exitRequirement !== "WorldEvent")
                    exitRequirement = "None";

                let exitCost = 0;
                if (exitRequirement === "TransferItem")
                    exitCost = 5000;

                mapExits[exit] = ExitGenerator.genExit(exitName, exitEnabled, exitRequirement, exitCost)
            }
        }
        */
    }
}