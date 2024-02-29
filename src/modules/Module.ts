import { DependencyContainer } from "tsyringe";

export default class Module
{
    container: DependencyContainer;
    config: any;

    constructor(container: DependencyContainer, config: any)
    {
        this.container = container;
        this.config = config;
    }
}