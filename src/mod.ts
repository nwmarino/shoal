import { DependencyContainer } from "tsyringe";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";

import * as path from "path";
import * as fs from "fs";
import * as config from "./../config.json";

import { BotModule } from "./bot-modu";

export class Mod implements IPostAkiLoadMod, IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        
    }

    public postAkiLoad(container: DependencyContainer): void
    {
        
    }
}