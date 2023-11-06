/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

export default class sRaid
{
    static exec(container: DependencyContainer, config: any): void
    {
        const maps = container.resolve<DatabaseServer>("DatabaseServer").getTables().locations;
        this.guaranteedExtracts(maps, config);
    }

    static guaranteedExtracts(maps: any, config: any): void
    {
        if (config["CHANCE_BASED_EXTRACTS"]) return;
        for (const map in maps)
        {
            if (map == "base") continue;
            for (const exfil in maps[map].base.exits)
                if (maps[map].base.exits[exfil].Name !== "EXFIL_Train")
                    maps[map].base.exits[exfil].Chance = 100;
        }
    }

    static simplifyCoopExtracts(maps: any, config: any): void
    {
        if (!config["BASIC_COOP_EXTRACTS"]) return;
        for (const map in maps)
        {
            if (map == "base") continue;
            for (const exfil in maps[map].base.exits) {
                const extraction = maps[map].base.exits[exfil];
                if (extraction.PassageRequirement == "ScavCooperation")
                {
                    extraction.PassageRequirement = "None";
                    extraction.RequirementTip = "";
                    extraction.ExfiltrationTime = 8;
                    extraction.ExfiltrationType = "Individual";
                }    
            }
        }
    }

    static allExtractsAvailable(maps: any, config: any): void
    {
        if (!config["BIPOLAR_EXTRACTS"]) return;
        for (const map in maps)
        {
            const allEntryPoints = this.getAllEntryPoints(maps[map]);

            for (const exfil in maps[map].base.exits)
            {
                const extraction = maps[map].base.exits[exfil];
                if (extraction.EntryPoints != allEntryPoints)
                    extraction.EntryPoints = allEntryPoints;
            }
        }
    }

    // not original code, cr to open extracts
    static getAllEntryPoints(location: any): string
    {
        const entryPointsSet = new Set<string>();
        for (const extract in location.exits) {
            const entryPoints = location.exits[extract].EntryPoints.split(",");
            entryPoints.forEach((entryPoint: string) => entryPointsSet.add(entryPoint));
        }
        return Array.from(entryPointsSet).join(",");
    }
}