import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import Index from "./index";
const index = new Index();
import exitHandler from "./modules/exitHandler";

export default class Mod implements IPostDBLoadMod, IPostAkiLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        index.inj(container);
    }

    public postAkiLoad(): void
    {
        new exitHandler();
    }
}

module.exports = { mod: new Mod() };