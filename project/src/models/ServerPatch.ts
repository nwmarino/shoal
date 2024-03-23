import { DependencyContainer } from "tsyringe";

/* eslint-disable @typescript-eslint/brace-style */
export default abstract class ServerPatch
{
    readonly #configJson: any

    constructor(configJson: any) { this.#configJson = configJson; }

    public abstract enable(container: DependencyContainer): boolean | void
}