/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { container } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import sExitPort from "./sExitPort";
import * as tooltips from "../data/tooltips.json";

export default class exitHandler
{
    constructor()
    {
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const locales = tables.locales.global;
        sExitPort.port(container);
        //this.modLocales(locales);
    }

    modLocales(locales: Record<string, Record<string, string>>): void
    {
        const dbLocales = locales["en"];
        for (const key in tooltips)
            dbLocales[key] = tooltips[key]
    }
}