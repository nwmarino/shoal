import { DependencyContainer } from "tsyringe";

export class BotModule
{
    inj(container: DependencyContainer, config: any): void
    {
        const configServer = container.resolve<any>("ConfigServer");
        const pmc = configServer.getConfig("aki-pmc")

        pmc.chanceSameSideIsHostilePercent = config["USEC_BEAR_RATIO"]
    }
}