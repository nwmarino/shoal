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
        this.canHeadshot(bots, config);
        this.canInstaReload(bots.types, config);
        this.hasInfStamina(bots.types, config);
        this.hasSilentMovement(bots.types, config);
    }

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

    static canHeadshot(bots: any, config: any): void
    {
        if (config["AI_CAN_HEADSHOT"]) return;
        for (const type in bots)
            bots[type].CAN_SHOOT_TO_HEAD = false;
    }

    static canInstaReload(bots: any, config: any): void
    {
        if (config["CAN_INSTANT_RELOAD"]) return;
        for (const type in bots)
            if (bots[type].skills.Common)
                bots[type].skills.Common.BotReload = { "min": 0, "max": 0 };
    }

    static hasInfStamina(bots: any, config: any): void
    {
        if (config["HAS_INFINITE_STAMINA"]) return;
        for (const type in bots)
            if (bots[type].diffiulty)
                for (const diff in bots[type].difficulty)
                    if (bots[type].difficulty[diff].Move)
                        bots[type].difficulty[diff].Move.ETERNITY_STAMINA = false;
    }

    static hasSilentMovement(bots: any, config: any): void
    {
        if (config["HAS_SILENT_MOVEMENT"]) return;
        for (const type in bots)
            if (bots[type].skills.Common)
                bots[type].skills.Common.BotSound = { "min": 0, "max": 0 };
    }
}