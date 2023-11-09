/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

export default class sBot
{
    static exec(container: DependencyContainer, config: any): void
    {
        const bots = container.resolve<DatabaseServer>("DatabaseServer").getTables().bots;
        const scav = config["SCAV_HP_MULT"];
        const special = config["SPEC_HP_MULT"];
        const boss = config["BOSS_HP_MULT"];
        const follower = config["FOLL_HP_MULT"];
        this.modifyHealth(bots.types, config, scav, special, boss, follower);
    }

    // modify health multipliers by configurated values, according to each bot type
    static modifyHealth(bots: any, config: any, scav: number, spec: number, boss: number, foll: number): void
    {
        if (scav == 1 && spec == 1 && boss == 1 && foll == 1) return;
        for (const type in bots)
        {
            if (type.startsWith("boss"))
            {
                const bossType = bots[type];
                const bodyParts = bossType.health.BodyParts[0];
                for (const bodyPart in bodyParts)
                    if (bodyParts.hasOwnProperty(bodyPart))
                    {
                        const partData = bodyParts[bodyPart];
                        partData.min *= boss;
                        partData.max *= boss;
                    }
            }
            if (type.startsWith("follower"))
            {
                const followerType = bots[type];
                const bodyParts = followerType.health.BodyParts[0];
                for (const bodyPart in bodyParts)
                    if (bodyParts.hasOwnProperty(bodyPart))
                    {
                        const partData = bodyParts[bodyPart];
                        partData.min *= foll;
                        partData.max *= foll;
                    }
            }
            if (type.startsWith("arenafighterevent") || type.startsWith("sectant") || type.startsWith("exusec") || type.startsWith("pmcbot"))
            {
                const specType = bots[type];
                const bodyParts = specType.health.BodyParts[0];
                for (const bodyPart in bodyParts)
                    if (bodyParts.hasOwnProperty(bodyPart))
                    {
                        const partData = bodyParts[bodyPart];
                        partData.min *= spec;
                        partData.max *= spec;
                    }
            }
            if (type.startsWith("assault") || type.startsWith("cursedassault"))
            {
                const scavType = bots[type];
                const bodyParts = scavType.health.BodyParts[0];
                for (const bodyPart in bodyParts)
                    if (bodyParts.hasOwnProperty(bodyPart))
                    {
                        const partData = bodyParts[bodyPart];
                        partData.min *= scav;
                        partData.max *= scav;
                    }
            }
        }
    }
}