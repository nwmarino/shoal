/* eslint-disable @typescript-eslint/brace-style */
import { IConfig } from "@spt-aki/models/eft/common/IGlobals";
import { ICustomizationItem } from "@spt-aki/models/eft/common/tables/ICustomizationItem";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import ModStorage from "../models/ModStorage";
import ServerPatch from "../models/ServerPatch";

export default class TradingPatch implements ServerPatch
{
    expiremental: boolean;

    constructor(expiremental?: boolean) { this.expiremental = expiremental; }

    public enable(): boolean | void
    {
        const tables = ModStorage.fetchContainer(true) as IDatabaseTables;
        const globals: IConfig = tables.globals.config;

        this._applyFleaChanges(globals)
    }

    private _applyFleaChanges(globals: IConfig): void
    {
        if (ModStorage.getField("DisableFleaMarket")) { globals.RagFair.enabled = false; }
        else { globals.RagFair.minUserLevel = ModStorage.getField("FleaMarketAccessLevel"); }
    }
}