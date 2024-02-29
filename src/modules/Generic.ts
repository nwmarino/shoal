/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { IAirdropConfig } from "@spt-aki/models/spt/config/IAirdropConfig";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import Module from "./Module";

export default class Generic extends Module
{
    constructor(container: DependencyContainer, config: any)
    {
        super(container, config);
        this.ModifyAirdrops();
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const globals = tables.globals.config;
        const quests = tables.templates.quests;
        const bodyPartHealth = globals.Health.ProfileHealthSettings.BodyPartsSettings;

        globals.TimeBeforeDeploy = config.TimeToDeploy;
        globals.TimeBeforeDeployLocal = config.TimeToDeploy;

        globals.SavagePlayCooldown = config.ScavengerModeCooldown;

        globals.exp.match_end.survivedMult = config.ExtractExperienceMultiplier;
        globals.exp.match_end.killedMult = config.KilledExperienceMultiplier;

        bodyPartHealth.Head.Maximum = config.HeadHitpoints;
        bodyPartHealth.Chest.Maximum = config.ChestHitpoints;
        bodyPartHealth.Stomach.Maximum = config.StomachHitpoints;
        bodyPartHealth.LeftArm.Maximum = config.LeftArmHitpoints;
        bodyPartHealth.RightArm.Maximum = config.RightArmHitpoints;
        bodyPartHealth.LeftLeg.Maximum = config.LeftLegHitpoints;
        bodyPartHealth.RightLeg.Maximum = config.RightLegHitpoints;

        if (config.DisableSkillFatigue)
        {
            globals.SkillFatiguePerPoint = 0;
            globals.SkillMinEffectiveness = 1.0;
            globals.SkillFreshEffectiveness = 1.0;
        }

        if (config.DisableFallDamage)
            globals.Health.Falling.DamagePerMeter = 0;

        if (config.AccessLabsWithoutCard)
            tables.locations.laboratory.base.AccessKeys = [];

        if (config.DisableScavengerMode)
        {
            for (const map in tables.locations)
                tables.locations[map].base.DisabledForScav = true;
            globals.SavagePlayCooldown = 80000;
        }

        if (config.ExtendRaidTimerToHour)
            for (const map in tables.locations)
                tables.locations[map].base.EscapeTimeLimit = 60;

        if (config.DisableRunthroughs)
        {
            globals.exp.match_end.survived_exp_requirement = 0;
            globals.exp.match_end.survived_seconds_requirement = 0;
        }

        if (config.RemoveFoundInRaidQuestConditions)
            for (const quest in quests)
                for (const condition in quest["conditions"]["AvailableForFinish"])
                    if (condition["_parent"] == "HandoverItem" && !condition["_props"].onlyFoundInRaid)
                        condition["_props"].onlyFoundInRaid = false;
    }

    ModifyAirdrops(): void
    {
        const configServer = this.container.resolve<ConfigServer>("ConfigServer");
        const airdrop = configServer.getConfig<IAirdropConfig>(ConfigTypes.AIRDROP).airdropChancePercent;

        airdrop.bigmap = this.config.CustomsAirdropChance;
        airdrop.woods = this.config.WoodsAirdropChance;
        airdrop.lighthouse = this.config.LighthouseAirdropChance;
        airdrop.shoreline = this.config.ShorelineAirdropChance;
        airdrop.interchange = this.config.InterchangeAirdropChance;
        airdrop.reserve = this.config.ReserveAirdropChance;
        airdrop.tarkovStreets = this.config.StreetsAirdropChance;
    }
}