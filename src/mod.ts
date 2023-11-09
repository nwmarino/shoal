import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import Index from "./index";

const index = new Index();

import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";


export default class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        index.inj(container);
        this.logAllMapAndExtractNames(container);
    }

    logAllMapAndExtractNames(container: DependencyContainer): void {
        const dbLocations = container.resolve<DatabaseServer>("DatabaseServer").getTables().locations;
        const extractList = {}
        for (const loc in dbLocations)
        {

            const thisLocExits = dbLocations[loc]?.base?.exits
            if (!thisLocExits) continue

            extractList[loc] = []

            for (const e in thisLocExits) {
                const thisExit = thisLocExits[e]
                extractList[loc].push(thisExit.Name)
            }

        }

        console.log(extractList)

    }
}

module.exports = { mod: new Mod() };