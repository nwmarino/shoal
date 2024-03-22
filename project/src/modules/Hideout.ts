/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import Module from "./Module";

export default class Hideout extends Module
{
    constructor(container: DependencyContainer, config: any)
    {
        super(container, config);
        const hideout = container.resolve<DatabaseServer>("DatabaseServer").getTables().hideout;
        this.ModifyHideoutConstruction(hideout.areas);
        this.ModifyHideoutProduction(hideout.production);
    }

    ModifyHideoutConstruction(areas: any): void
    {
        for (const area in areas)
            for (const stage in areas[area].stages)
            {
                let current = areas[area].stages[stage].constructionTime;
                if (this.config.InstantHideoutConstruction)
                {
                    current = 1
                    continue;
                }
                current *= this.config.HideoutConstructionTimeMultiplier;
            }
    }

    ModifyHideoutProduction(items: any): void
    {
        for (const item in items)
        {
            let current = items[item].productionTime;
            if (this.config.InstantHideoutProduction)
            {
                current = 1
                continue;
            }
            current *= this.config.HideoutProductionTimeMultiplier;
        }
    }
}