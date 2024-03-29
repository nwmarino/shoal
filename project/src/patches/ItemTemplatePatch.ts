import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ITemplateItem } from "@spt-aki/models/eft/common/tables/ITemplateItem";
import ServerPatch from "../models/ServerPatch";
import ModStorage from "../models/ModStorage";

export default class ItemTemplatePatch implements ServerPatch
{
    expiremental: boolean

    // eslint-disable-next-line @typescript-eslint/brace-style
    constructor(expiremental?: boolean) { this.expiremental = expiremental; } 

    public enable(): boolean | void
    {
        const tables = ModStorage.fetchContainer(true) as IDatabaseTables;
        this._modifyItems(tables.templates.items);
    }

    private _modifyItems(table: Record<string, ITemplateItem>): void
    {
        for (const item in table)
        {
            if (item["_parent"] == "5c99f98d86f7745c314214b3" && ModStorage.getField("ExtendKeyUsageLimit"))
                item["_props"].MaximumNumberOfUsage = 99;
        }

    }
}

