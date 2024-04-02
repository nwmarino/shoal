/* eslint-disable @typescript-eslint/brace-style */
import { Exit, ILocationBase } from "@spt-aki/models/eft/common/ILocationBase";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ILocations } from "@spt-aki/models/spt/server/ILocations";

import LocationInfo from "../models/LocationInfo";
import ServerPatch from "../models/ServerPatch";
import ModStorage from "../models/ModStorage";

export default class RaidExitPatch implements ServerPatch
{    
    expiremental: boolean

    constructor(expiremental?: boolean) { this.expiremental = expiremental; } 

    public enable(): boolean | void
    {
        const tables = ModStorage.fetchContainer(true) as IDatabaseTables;
        const maps: ILocations = tables.locations;
        const mapNames: Set<string> = LocationInfo.fetchMapNames();
        if (ModStorage.getField("PatchScavengerExits")) { this._importScavengerExits(maps); }
        this._modifyPlayerExits(maps, mapNames);
    }

    private _importScavengerExits(maps: ILocations): void
    {
        for (const key in maps)
        {
            if (key != "base")
            {
                const baseFile = maps[key].base;
                const scavExits: string[] = LocationInfo.fetchExitNames(key)?.scav;
                scavExits.forEach(exit => {
                    baseFile.exits.push(this._createExit(exit, true, "None", 0));
                });
            }
        }
    }

    private _modifyPlayerExits(locations: ILocations, mapNames: Set<string>): void
    {
        for (const key of mapNames)
        {
            const baseFile: ILocationBase = locations[key].base;
            for (const exit of baseFile.exits)
            {
                exit.ExfiltrationType = "Individual";
                exit.PlayersCount = 0;

                if (exit.PassageRequirement === "Train") { continue; }

                if (ModStorage.getField("AllowExitFromAnySide") || ModStorage.getField("PatchScavengerExits"))
                    exit.EntryPoints = this._getAllEntryPoints(baseFile);
                
                if (ModStorage.getField("ForceExitsOpen")) { exit.Chance = 100; }

                if (ModStorage.getField("ConvertCooperationExits")) { this._convertCoopExit(exit); }

                console.log(exit.Name);
            }
        }
    }

    private _convertCoopExit(exit: Exit): void
    {
        if (exit.PassageRequirement !== "ScavCooperation") return;
        exit.PassageRequirement = "None";
        exit.RequirementTip = "";
    }

    private _getAllEntryPoints(baseFile: ILocationBase): string
    {
        const entryPointsSet = new Set<string>();
        baseFile.exits.forEach(exit => {
            const entryPoints: string[] = exit.EntryPoints.split(",");
            entryPoints.forEach((entryPoint: string) => entryPointsSet.add(entryPoint));
        });
        return Array.from(entryPointsSet).join(",");
    }

    private _createExit(name: string, enabled: boolean, req: string, cost: number): object
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