import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";

import * as configJson from "./config/shoal.config.json";
import * as patches from "./patches";

export default class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const logger = container.resolve<ILogger>("WinstonLogger");

        try
        {
            new patches.HideoutPatch(configJson).enable(container);
            new patches.RaidExitPatch(configJson).enable(container);
        }
        catch (err)
        {
            logger.logWithColor("shoal->server suffered an error during load.", LogTextColor.RED);
            logger.info(err);
        }

        logger.logWithColor("shoal->server has loaded successfully.", LogTextColor.CYAN);
    }
}

module.exports = { mod: new Mod() };