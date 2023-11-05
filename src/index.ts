import { DependencyContainer } from "tsyringe";

import * as config from "./config/base.json";
import * as gameConfig from "./config/game.json";
import * as miscConfig from "./config/misc.json";
import * as npcConfig from "./config/npc.json";

import npcHandler from "./overrides/npcHandler";
import sAirdrop from "./overrides/sAirdrop";

export default class Index
{
    inj(container: DependencyContainer): void
    {
        sAirdrop.exec(container, miscConfig);
    }
}