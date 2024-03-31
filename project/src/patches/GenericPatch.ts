import ServerPatch from "../models/ServerPatch";

export default class GenericPatch implements ServerPatch
{
    expiremental: boolean;

    // eslint-disable-next-line @typescript-eslint/brace-style
    constructor(expiremental?: boolean) { this.expiremental = expiremental; }

    public enable(): boolean | void
    {
        
    }
}