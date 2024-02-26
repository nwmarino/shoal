import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import * as config from "../config/data.json";

import sBase from "./modules/sBase";
import sAirdrop from "./modules/ShAirdrop";
import sBoss from "./modules/sBoss";
import sBot from "./modules/ShBot";
import sHideout from "./modules/ShHideout";
import sPmc from "./modules/ShPmc";
import ExitHandler from "./helpers/ExitHandler";

export default class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const modules: readonly
        //new ExitHandler(config);
    }
}

module.exports = { mod: new Mod() };