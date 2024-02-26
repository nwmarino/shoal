import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "../../types/servers/DatabaseServer";
import Module from "./Module";

export default class SItem extends Module
{
    constructor(container: DependencyContainer, config: any)
    {
        super(container, config);
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const items = tables.templates.items;

        if (config.ExtendKeyUsageLimit)
            for (const item in items)
                if (item["_parent"] == "5c99f98d86f7745c314214b3")
                    item["_props"].MaximumNumberOfUsage = 99
    }
}