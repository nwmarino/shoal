import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "../../types/servers/DatabaseServer";
// eslint-disable-next-line @typescript-eslint/naming-convention
export default class sItem
{
    static exec(container: DependencyContainer, config: any): void
    {
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const items = tables.templates.items;

        if (config["EXTEND_KEY_USAGE"])
            for (const item in items)
                if (item["_parent"] == "5c99f98d86f7745c314214b3")
                    item["_props"].MaximumNumberOfUsage = 99
    }
}