import { DependencyContainer } from "tsyringe";
import { Exit, ILocationBase } from "@spt-aki/models/eft/common/ILocationBase";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ILocations } from "@spt-aki/models/spt/server/ILocations";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

import LocationInfo from "../models/LocationInfo";
import ServerPatch from "../models/ServerPatch";

export default class RaidExitPatch extends ServerPatch
{    
    // eslint-disable-next-line @typescript-eslint/brace-style
    constructor (config: any) { super(config); }

    public enable(container: DependencyContainer): boolean | void
    {
        const tables: IDatabaseTables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const maps: ILocations = tables.locations;
        const mapNames: Set<string> = LocationInfo.fetchMapNames();
        if (this.configJson.PatchScavengerExits) this.importScavengerExits(maps);
        this.modifyPlayerExits(maps, mapNames);
    }

    private importScavengerExits(maps: ILocations): void
    {
        for (const key in maps)
        {
            if (key != "base")
            {
                const baseFile = maps[key].base;
                const scavExits: string[] = LocationInfo.fetchExitNames(key)?.scav;
    
                scavExits.forEach(exit =>
                {
                    baseFile.exits.push(this.createExit(exit, true, "None", 0));
                });
            }
        }
    }

    private modifyPlayerExits(locations: ILocations, mapNames: Set<string>): void
    {
        for (const key of mapNames)
        {
            const map: ILocationBase = locations[key].base;

            for (const exit of map.exits)
            {
                exit.ExfiltrationType = "Individual";
                exit.PlayersCount = 0;

                if (exit.PassageRequirement === "Train")
                    continue;

                if (this.configJson.AllowExitFromAnySide || this.configJson.PatchScavengerExits)
                    exit.EntryPoints = this.getAllEntryPoints(map);
                
                if (this.configJson.ForceExitsOpen)
                    exit.Chance = 100;

                if (this.configJson.ConvertCooperationExits)
                    this.convertCoopExit(exit);
            }
        }
    }

    private convertCoopExit(exit: Exit): void
    {
        if (exit.PassageRequirement !== "ScavCooperation") return;
        exit.PassageRequirement = "None";
        exit.RequirementTip = "";
    }

    private getAllEntryPoints(location: ILocationBase): string
    {
        const entryPointsSet = new Set<string>();
        for (const exit in location.exits)
        {
            const entryPoints = location.exits[exit].EntryPoints.split(",");
            entryPoints.forEach((entryPoint: string) => entryPointsSet.add(entryPoint));
        }
        return Array.from(entryPointsSet).join(",");
    }

    private createExit(name: string, enabled: boolean, req: string, cost: number): object
    {
        const currency: string = (cost > 0) ? "5449016a4bdc2d6f028b456f" : "";
        const exitChance: number = enabled ? 100 : 0;
        req = (req == "TransferItem" && cost == 0) ? "None" : req;
        const exit: object =
        {  
            Chance: exitChance,
            Count: cost,
            EntryPoints: "all",
            ExfiltrationTime: 10,
            ExfiltrationType: "Individual",
            RequiredSlot: "FirstPrimaryWeapon",
            Id: currency,
            MaxTime: 0,
            MinTime: 0,
            Name: name,
            PassageRequirement: req,
            PlayersCount: 0,
            RequirementTip: ""
        }
        return exit;
    }
}