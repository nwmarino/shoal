import { IHideoutArea } from "@spt-aki/models/eft/hideout/IHideoutArea";
import { IHideoutProduction } from "@spt-aki/models/eft/hideout/IHideoutProduction";
import { IHideoutSettingsBase } from "@spt-aki/models/eft/hideout/IHideoutSettingsBase";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";

import ServerPatch from "../models/ServerPatch";
import ModStorage  from "../models/ModStorage";

export default class HideoutPatch implements ServerPatch
{
    expiremental: boolean

    // eslint-disable-next-line @typescript-eslint/brace-style
    constructor(expiremental?: boolean) { this.expiremental = expiremental; } 

    public enable(): boolean | void
    {
        const tables = ModStorage.fetchContainer(true) as IDatabaseTables;
        this.modifyHideoutConstructionTime(tables.hideout.areas)
        this.modifyHideoutProductionTime(tables.hideout.production);
        this.applyHideoutSettingsPatch(tables.hideout.settings);
    }

    private modifyHideoutConstructionTime(areas: IHideoutArea[]): void
    {
        const constructionModifier: number = ModStorage.getField("ConstructionTimeModifier");
        const instantConstruction: boolean = ModStorage.getField("EnableInstantConstruction");

        if (constructionModifier !== 1.0 || instantConstruction)
        {
            areas.forEach(area =>
            {
                for (const stage in area.stages)
                {
                    if (instantConstruction)
                        area.stages[stage].constructionTime = 0;
                    else
                        area.stages[stage].constructionTime *= constructionModifier;
                }
            });
        }
    }

    private modifyHideoutProductionTime(crafts: IHideoutProduction[]): void
    {
        const productionModifier: number = ModStorage.getField("ProductionTimeModifier");
        const instantProduction: boolean = ModStorage.getField("EnableInstantProduction");

        if (productionModifier !== 1.0 || instantProduction)
        {
            crafts.forEach(craft =>
            {
                if (instantProduction)
                    craft.productionTime = 0;
                else
                    craft.productionTime *= productionModifier;
            });
        }
    }

    private applyHideoutSettingsPatch(settings: IHideoutSettingsBase): void
    {
        settings.generatorFuelFlowRate = ModStorage.getField("HideoutFuelUsageRate");
        settings.airFilterUnitFlowRate = ModStorage.getField("HideoutAirFilterUsageRate");
        settings.gpuBoostRate = ModStorage.getField("HideoutGpuBoost");
    }

}