import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
//import { ConfigServer } from "@spt-aki/servers/ConfigServer";
//import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";

import * as npcCFG from "./config/npc.json";
import NpcHandler from "./overrides/NpcHandler";

const npcHandler = new NpcHandler();
export default class Mod implements IPostDBLoadMod, IPostAkiLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        injFromConfig()
    }

    public postAkiLoad(container: DependencyContainer): void
    {

    }
}