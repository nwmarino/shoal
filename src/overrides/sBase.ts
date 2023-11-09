/* eslint-disable @typescript-eslint/naming-convention */
import { DependencyContainer } from "tsyringe";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

// general gameplay changes
export default class sBase
{
    static exec(container: DependencyContainer, baseConfig: any, gameConfig: any): void
    {
        const tables = container.resolve<DatabaseServer>("DatabaseServer").getTables();
        const globals = tables.globals.config;
        const bodyPartHealth = globals.Health.ProfileHealthSettings.BodyPartsSettings;

        globals.TimeBeforeDeploy = baseConfig["TIME_TO_DEPLOY"];
        globals.TimeBeforeDeployLocal = baseConfig["TIME_TO_DEPLOY"];

        globals.SavagePlayCooldown = gameConfig["SCAV_COOLDOWN"];

        globals.exp.match_end.survivedMult = gameConfig["SURVIVED_EXP_MULT"];
        globals.exp.match_end.killedMult = gameConfig["KILLED_EXP_MULT"];

        bodyPartHealth.Head.Maximum = gameConfig["HEAD_HP"];
        bodyPartHealth.Chest.Maximum = gameConfig["CHEST_HP"];
        bodyPartHealth.Stomach.Maximum = gameConfig["STOMACH_HP"];
        bodyPartHealth.LeftArm.Maximum = gameConfig["LARM_HP"];
        bodyPartHealth.RightArm.Maximum = gameConfig["RARM_HP"];
        bodyPartHealth.LeftLeg.Maximum = gameConfig["LLEG_HP"];
        bodyPartHealth.RightLeg.Maximum = gameConfig["RLEG_HP"];

        if (!gameConfig["SKILL_FATIGUE"])
        {
            globals.SkillFatiguePerPoint = 0;
            globals.SkillMinEffectiveness = 1.0;
            globals.SkillFreshEffectiveness = 1.0;
        }
        
    }
}