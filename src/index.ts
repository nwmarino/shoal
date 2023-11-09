import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

import * as config from "./config/base.json";
import * as gameConfig from "./config/game.json";
import * as miscConfig from "./config/misc.json";
import * as npcConfig from "./config/npc.json";

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
        // resolve log
        const logger = container.resolve<ILogger>("WinstonLogger")
        if (!config["ENABLED"]) // incase shoal is disabled...
        {
            logger.info("shoal was unable to inject.");
            return;
        } // run all patches according to corresp. cfg
        sBase.exec(container, config, gameConfig);
        sAirdrop.exec(container, miscConfig);
        sBoss.exec(container, npcConfig);
        sBot.exec(container, npcConfig);
        sHideout.exec(container, config);
        sPmc.exec(container, npcConfig);
        if (!gameConfig["EXTRACT_MASTER"]) return;
        new ExitHandler(); // handle exits
    }
}