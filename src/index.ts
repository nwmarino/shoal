import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

import * as config from "./config/base.json";
import * as gameConfig from "./config/game.json";
import * as miscConfig from "./config/misc.json";
import * as npcConfig from "./config/npc.json";

import sBase from "./overrides/sBase";
import sAirdrop from "./overrides/sAirdrop";
import sHideout from "./overrides/sHideout";
import sRaid from "./overrides/sRaid";
import npcHandler from "./overrides/npcHandler";
import exitHandler from "./modules/exitHandler";

export default class Index
{
    inj(container: DependencyContainer): void
    {
        if (!config["ENABLED"]) return;
        sBase.exec(container, config, gameConfig);
        sAirdrop.exec(container, miscConfig);
        sHideout.exec(container, config);
        sRaid.exec(container, gameConfig);
        npcHandler.exec(container, npcConfig);
        //if (!config["PORT_SCAV_EXTRACTS"]) return;
        new exitHandler();
    }
}