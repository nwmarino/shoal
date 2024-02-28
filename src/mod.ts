/* eslint-disable @typescript-eslint/brace-style */
import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";

import * as config from "../config/data.json";

import Module from "./modules/Module";
import Bot from "./modules/Bot";
import Generic from "./modules/Generic";
import Hideout from "./modules/Hideout";
import Item from "./modules/Item";
import Pmc from "./modules/Pmc";
import Trader from "./modules/Trader";
import ExitHandler from "./helpers/ExitHandler";

export default class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const logger = container.resolve<ILogger>("WinstonLogger");
        const modules: readonly typeof Module[] = [Bot, Generic, Hideout, Item, Pmc, Trader];
        modules.forEach(modu => { new modu(container, config); });
        new ExitHandler(config);
        logger.logWithColor("shoal has patched successfully.", LogTextColor.BLUE);
    }
}

module.exports = { mod: new Mod() };