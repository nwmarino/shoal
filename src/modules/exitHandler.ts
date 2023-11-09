/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { container } from "tsyringe";
import sExitPort from "./sExitPort";

export default class exitHandler
{
    constructor()
    {
        sExitPort.port(container);
    }
}