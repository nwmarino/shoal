/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import sBoss from "./sBoss";
import sBot from "./sBot";
import sPmc from "./sPmc";

export default class npcHandler
{
    static exec(container: DependencyContainer, config: any): void
    {
        sBoss.exec(container, config);
        sBot.exec(container, config);
        sPmc.exec(container, config);
    }
}