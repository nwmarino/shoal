/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { container } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ILocationBase, Exit } from "@spt-aki/models/eft/common/ILocationBase";
import { ILocations } from "@spt-aki/models/spt/server/ILocations";
import ExitPatch from "./ExitPatch";

export default class ExitHandler
{
    config: any;
    constructor(config: any)
    {
        this.config = config;
        const tables: IDatabaseTables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const locations: ILocations = tables.locations;
        const mapNames: Set<string> = this.GetMaps();
        if (this.config.PatchScavengerExits)
            ExitPatch.patch(container);
        this.ModifyExits(locations, mapNames);
    }

    private ModifyExits(locations: ILocations, mapNames: Set<string>): void
    {
        for (const key of mapNames)
        {
            const map = locations[key].base as ILocationBase;

            for (const exit of map.exits)
            {
                if (this.config.AllowExitFromAnySide || this.config.PatchScavengerExits)
                    this.OpenExitsToAnySide(exit, map);
                exit.ExfiltrationType = "Individual";
                exit.PlayersCount = 0;
                if (this.config.ForceAllExitsAvailable)
                    exit.Chance = 100;

                if (exit.PassageRequirement === "Train")
                    continue;

                if (this.config.ConvertCooperationExits)
                    this.ConvertCoopExits(exit);
            }
        }
    }

    private OpenExitsToAnySide(exit: Exit, location: ILocationBase): void
    {
        const allSpawnPoints = this.GetEntryPoints(location);

        if (exit.EntryPoints !== allSpawnPoints)
            exit.EntryPoints = allSpawnPoints;
    }

    private ConvertCoopExits(exit: Exit): void
    {
        if (exit.PassageRequirement !== "ScavCooperation")
            return;

        exit.PassageRequirement = "None";
        exit.RequirementTip = "";
    }

    // yoinked from open extracts... credit to them
    private GetEntryPoints(location: ILocationBase): string
    {
        const entryPointsSet = new Set<string>();
        for (const extract in location.exits)
        {
            const entryPoints = location.exits[extract].EntryPoints.split(",");
            entryPoints.forEach((entryPoint: string) => entryPointsSet.add(entryPoint));
        }
        return Array.from(entryPointsSet).join(",");
    }

    private GetMaps(): Set<string>
    {
        return new Set<string>([
            "bigmap",
            "factory4_day",
            "factory4_night",
            "interchange",
            "laboratory",
            "lighthouse",
            "rezervbase",
            "shoreline",
            "tarkovstreets",
            "woods",
            "sandbox"
        ]);
    }
}