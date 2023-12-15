import { DependencyContainer } from "tsyringe";

import * as config from "../config/data.json";

import sBase from "./overrides/sBase";
import sAirdrop from "./overrides/sAirdrop";
import sBoss from "./overrides/sBoss";
import sBot from "./overrides/sBot";
import sHideout from "./overrides/sHideout";
import sPmc from "./overrides/sPmc";
import ExitHandler from "./modules/ExitHandler";

export default class Index
{
    inj(container: DependencyContainer): void
    {
        sBase.exec(container, config);
        sAirdrop.exec(container, config);
        sBoss.exec(container, config);
        sBot.exec(container, config);
        sHideout.exec(container, config);
        sPmc.exec(container, config);
        new ExitHandler(config);
    }
}