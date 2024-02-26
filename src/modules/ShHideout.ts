/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

export default class sHideout
{
    static exec(container: DependencyContainer, config: any): void
    {
        const hideout = container.resolve<DatabaseServer>("DatabaseServer").getTables().hideout;
        this.constructionInj(hideout.areas, config);
        this.productionInj(hideout.production, config);
    }

    // modify hideout construction timings
    static constructionInj(areas: any, config: any): void
    {
        for (const area in areas)
            for (const stage in areas[area].stages)
            {
                let current = areas[area].stages[stage].constructionTime;
                if (config.InstantHideoutConstruction)
                {
                    current = 1
                    continue;
                }
                current *= config.HideoutConstructionTimeMultiplier;
            }
    }

    // modify hideout production timings
    static productionInj(items: any, config: any): void
    {
        for (const item in items)
        {
            let current = items[item].productionTime;
            if (config.InstantHideoutProduction)
            {
                current = 1
                continue;
            }
            current *= config.HideoutProductionTimeMultiplier;
        }
    }
}