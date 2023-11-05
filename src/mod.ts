import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
//import { ConfigServer } from "@spt-aki/servers/ConfigServer";
//import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";

import * as npcConfig from "./config/npc.json";
import NpcHandler from "./overrides/npcHandler";

const npcHandler = new NpcHandler();
export default class Mod implements IPostDBLoadMod, IPostAkiLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        npcHandler.injFromConfig(container, npcConfig);
    }

    public postAkiLoad(container: DependencyContainer): void
    {

    }
}