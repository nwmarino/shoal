import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { BotPatch, GenericPatch, HideoutPatch, ItemTemplatePatch, RaidExitPatch, StatusPatch, TradingPatch } from "./patches/PatchLib";

import ModStorage from "./models/ModStorage";
import * as configJson from "./config/shoal.config.json";

export default class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const logger: ILogger = container.resolve<ILogger>("WinstonLogger");
        logger.logWithColor("Loading: shoal->server", LogTextColor.CYAN);
        ModStorage.loadStorage(container, configJson);
        
        try
        {
            //new BotPatch().enable();
            //new GenericPatch().enable();
            new HideoutPatch().enable();
            new ItemTemplatePatch().enable();
            new RaidExitPatch().enable();
            //new StatusPatch().enable();
            new TradingPatch().enable();
        }
        catch (err: any)
        {
            logger.logWithColor("shoal->server suffered an error during load:", LogTextColor.RED);
            logger.logWithColor(err.message, LogTextColor.RED);
        }

        logger.logWithColor("Completed: shoal->server", LogTextColor.CYAN);
    }
}

module.exports = { mod: new Mod() };