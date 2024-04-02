/* eslint-disable @typescript-eslint/brace-style */
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ITemplateItem } from "@spt-aki/models/eft/common/tables/ITemplateItem";
import ServerPatch from "../models/ServerPatch";
import ModStorage from "../models/ModStorage";

export default class ItemTemplatePatch implements ServerPatch
{
    expiremental: boolean

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
            if (table[item]._parent == "5c99f98d86f7745c314214b3" && ModStorage.getField("ExtendKeyUsageLimit"))
            { table[item]._props.MaximumNumberOfUsage = 99; }

            if (table[item]._id == "557ffd194bdc2d28148b457f")
            {
                for (const pocket in table[item]._props.Grids)
                {
                    if (ModStorage.getField("StretchPocketsVertically"))
                    { table[item]._props.Grids[pocket]._props.cellsV = 2; }

                    if (ModStorage.getField("StretchPocketsHorizontally"))
                    { table[item]._props.Grids[pocket]._props.cellsH = 2; }
                }
            }
        }

    }
}