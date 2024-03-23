import { IHideoutArea } from "@spt-aki/models/eft/hideout/IHideoutArea";
import { IHideoutProduction } from "@spt-aki/models/eft/hideout/IHideoutProduction";
import { IHideoutSettingsBase } from "@spt-aki/models/eft/hideout/IHideoutSettingsBase";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { DependencyContainer } from "tsyringe";

import ServerPatch from "src/models/ServerPatch";

export default class HideoutPatch extends ServerPatch
{
    readonly configJson: any

    // eslint-disable-next-line @typescript-eslint/brace-style
    constructor(config: any) { super(config); }

    public enable(container: DependencyContainer): boolean | void
    {
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        this.modifyHideoutConstructionTime(tables.hideout.areas)
        this.modifyHideoutProductionTime(tables.hideout.production);
        this.applyHideoutSettingsPatch(tables.hideout.settings);
    }

    private modifyHideoutConstructionTime(areas: IHideoutArea[]): void
    {
        if (this.configJson.ConstructionTimeModifier !== 1.0 || this.configJson.EnableInstantConstruction)
        {
            areas.forEach(area =>
            {
                for (const stage in area.stages)
                {
                    if (this.configJson.EnableInstantConstruction)
                        area.stages[stage].constructionTime = 0;
                    else
                        area.stages[stage].constructionTime *= this.configJson.ConstructionTimeModifier;
                }
            });
        }
    }

    private modifyHideoutProductionTime(crafts: IHideoutProduction[]): void
    {
        crafts.forEach(craft => {
            if (this.configJson.EnableInstantProduction)
                craft.productionTime = 0;
            else
                craft.productionTime *= this.configJson.ProductionTimeModifier;
        });
    }

    private applyHideoutSettingsPatch(settings: IHideoutSettingsBase): void
    {
        settings.generatorFuelFlowRate = this.configJson.HideoutFuelUsageRate;
        settings.airFilterUnitFlowRate = this.configJson.HideoutAirFilterUsageRate;
        settings.gpuBoostRate = this.configJson.HideoutGpuBoost;
    }

}