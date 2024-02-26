import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import Index from "./index";

const index = new Index();

import * as config from "../config/data.json";
import sBase from "./overrides/sBase";
import sAirdrop from "./overrides/sAirdrop";
import sBoss from "./overrides/sBoss";
import sBot from "./overrides/sBot";
import sHideout from "./overrides/sHideout";
import sPmc from "./overrides/sPmc";
import ExitHandler from "./modules/ExitHandler";

export default class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const modules: readonly
        new ExitHandler(config);
    }
}

module.exports = { mod: new Mod() };