import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import Index from "./index";
const index = new Index();
export default class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        index.inj(container);
    }
}

module.exports = { mod: new Mod() };