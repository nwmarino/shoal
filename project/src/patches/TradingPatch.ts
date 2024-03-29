/* eslint-disable @typescript-eslint/brace-style */
import { IConfig } from "@spt-aki/models/eft/common/IGlobals";
import { ICustomizationItem } from "@spt-aki/models/eft/common/tables/ICustomizationItem";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import ModStorage from "../models/ModStorage";
import ServerPatch from "../models/ServerPatch";

function isPlayerClothing(item: ICustomizationItem): boolean
{
    return item._props.Side.includes("Usec") || item._props.Side.includes("Bear");
}

function isClothingItem(item: ICustomizationItem): boolean
{
    return item._parent == "5cc0868e14c02e000c6bea68" || item._parent == "5cd943c31388ce000a659df5";
}

export default class TradingPatch implements ServerPatch
{
    expiremental: boolean;

    constructor(expiremental?: boolean) { this.expiremental = expiremental; }

    public enable(): boolean | void
    {
        const tables = ModStorage.fetchContainer(true) as IDatabaseTables;
        const globals: IConfig = tables.globals.config;
        const customization: Record<string, ICustomizationItem> = tables.templates.customization;

        this._applyFleaChanges(globals)

        if (this.expiremental && ModStorage.getField("ExtendClothingFactions"))
        { this._extendClothingFactions(customization); }
    }

    private _applyFleaChanges(globals: IConfig): void
    {
        if (ModStorage.getField("DisableFleaMarket")) { globals.RagFair.enabled = false; }
        else { globals.RagFair.minUserLevel = ModStorage.getField("FleaMarketAccessLevel"); }
    }

    private _extendClothingFactions(customization: Record<string, ICustomizationItem>): void
    {
        for (const item in customization)
        {
            if (isClothingItem(customization[item]) && isPlayerClothing(customization[item]))
            { customization[item]._props.Side = ["Usec", "Bear"]; }
        }
    }
}

