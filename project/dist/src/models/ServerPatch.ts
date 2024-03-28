import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { DependencyContainer } from "tsyringe";

export default interface ServerPatch
{
    expiremental: boolean
    tables?: IDatabaseTables
    container?: DependencyContainer
    enable(): boolean | void
}