import ServerPatch from "../models/ServerPatch";
import ModStorage from "../models/ModStorage";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { BodyPart, IBotType } from "@spt-aki/models/eft/common/tables/IBotType";

export default class StatusPatch implements ServerPatch
{
    expiremental: boolean;

    constructor(expiremental?: boolean) { this.expiremental = expiremental; }

    public enable(): void
    {
        const tables = ModStorage.fetchContainer(true) as IDatabaseTables;
        this._modifyBotStatus(tables.bots.types)

    }

    private _modifyBotStatus(botTypes: Record<string, IBotType>): void
    {
        for (const botType in botTypes) 
        {
            if (botType.startsWith("assault") || botType.startsWith("cursedassault"))
            {
                const multiplier = ModStorage.getField("ScavHealthMultiplier") as number;
                const bodyParts: BodyPart = botTypes[botType].health.BodyParts[0];

                for (const bodyPart in bodyParts)
                {
                    bodyParts[bodyPart].min *= multiplier;
                    bodyParts[bodyPart].max *= multiplier;
                }
            }
            else if (botType.startsWith("exusec") || botType.startsWith("pmcbot"))
            {
                const multiplier = ModStorage.getField("SpecialHealthMultiplier") as number;
                const bodyParts: BodyPart = botType[botType].health.BodyParts[0];

            }
            else if (botType.startsWith("boss"))
            {

            }
            else if (botType.startsWith("follower"))
            {

            }
        }
    }
}