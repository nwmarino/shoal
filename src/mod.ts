import { DependencyContainer } from "tsyringe";
//import { ConfigServer } from "@spt-aki/servers/ConfigServer";
//import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";

//import * as path from "path";
//import * as fs from "fs";
//import * as config from "./../config/config.json";
import * as aiConfig from "../config/ai.json";

import { BotModule } from "./bot-modu";
const botModule = new BotModule();

export class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        botModule.inj(container, aiConfig);
    }
}