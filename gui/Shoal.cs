using System;
using System.Windows.Forms;
using Gui.controllers;
using Gui.models;
using Newtonsoft.Json;

namespace Gui
{
    public partial class shoalGui : Form
    {
        private Panel currentPanel = null;
        private ButtonController buttonMod;
        private ConfigSchema schema;

        public shoalGui()
        {
            InitializeComponent();
        }

        private void shoalGui_Load(object sender, EventArgs e)
        {
            Panel[] availablePanels = { gamePanel, raidPanel,
                                        playerPanel, botPanel,
                                        traderPanel };
            PanelButton[] buttons = { gamePanelButton, raidPanelButton,
                                      playerPanelButton, botPanelButton,
                                      traderPanelButton};
            foreach (Panel panel in availablePanels) panel.Hide();
            buttonMod = new ButtonController(buttons);
            schema = new ConfigSchema();
        }

        private void gamePanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, gamePanel);
            buttonMod.PushButtonPresence(gamePanelButton);
        }

        private void raidPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, raidPanel);
            buttonMod.PushButtonPresence(raidPanelButton);
        }

        private void playerPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, playerPanel);
            buttonMod.PushButtonPresence(playerPanelButton);
        }

        private void botPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, botPanel);
            buttonMod.PushButtonPresence(botPanelButton);
        }

        private void traderPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, traderPanel);
            buttonMod.PushButtonPresence(traderPanelButton);
        }

        private void saveButton_Click(object sender, EventArgs e)
        {
            string json = JsonConvert.SerializeObject(schema, Formatting.Indented);
            System.IO.File.WriteAllText(@"data.json", json);
        }

        private void labCardToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (labCardToggle.Checked)
            {
                case true:
                    schema.AccessLabsWithoutCard = true; break;
                case false:
                    schema.AccessLabsWithoutCard = false; break;
            }
        }

        private void fallDamageToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (fallDamageToggle.Checked)
            {
                case true:
                    schema.DisableFallDamage = true; break;
                case false:
                    schema.DisableFallDamage = false; break;
            }
        }

        private void scavModeToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (scavModeToggle.Checked)
            {
                case true:
                    schema.DisableScavengerMode = true; break;
                case false:
                    schema.DisableScavengerMode = false; break;
            }
        }

        private void skillFatigueToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (skillFatigueToggle.Checked)
            {
                case true:
                    schema.DisableSkillFatigue = true; break;
                case false:
                    schema.DisableSkillFatigue = false; break;
            }
        }

        private void runThruToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (runThruToggle.Checked)
            {
                case true:
                    schema.DisableRunthroughs = true; break;
                case false:
                    schema.DisableRunthroughs = false; break;
            }
        }

        private void keyUsageToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (keyUsageToggle.Checked)
            {
                case true:
                    schema.ExtendKeyUsageLimit = true; break;
                case false:
                    schema.ExtendKeyUsageLimit = false; break;
            }
        }

        private void questFirToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (questFirToggle.Checked)
            {
                case true:
                    schema.RemoveFoundInRaidQuestConditions = true; break;
                case false:
                    schema.RemoveFoundInRaidQuestConditions = false; break;
            }
        }

        private void scavModeCooldownNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ScavengerModeCooldown = (int)scavModeCooldownNumer.Value;
        }

        private void timeToDeployNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.TimeToDeploy = (int)timeToDeployNumer.Value;
        }

        private void extractExpMultNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ExtractExperienceMultiplier = (double)extractExpMultNumer.Value;
        }

        private void kiaExpMultNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.KilledExperienceMultiplier = (double)kiaExpMultNumer.Value;
        }

        private void fleaMarketToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (fleaMarketToggle.Checked)
            {
                case true:
                    schema.DisableFleaMarket = true; break;
                case false:
                    schema.DisableFleaMarket = false; break;
            }
        }

        private void fleaMarketAccessNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.FleaMarketAccessLevel = (int)fleaMarketAccessNumer.Value;
        }

        private void polarExitToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (polarExitToggle.Checked)
            {
                case true:
                    schema.AllowExitFromAnySide = true; break;
                case false:
                    schema.AllowExitFromAnySide = false; break;
            }
        }
        private void coopExitToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (coopExitToggle.Checked)
            {
                case true:
                    schema.ConvertCooperationExits = true; break;
                case false:
                    schema.ConvertCooperationExits = false; break;
            }
        }

        private void extendRaidTimerToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (extendRaidTimerToggle.Checked)
            {
                case true:
                    schema.ExtendRaidTimerToHour = true; break;
                case false:
                    schema.ExtendRaidTimerToHour = false; break;
            }
        }

        private void guaranteeExitToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (guaranteeExitToggle.Checked)
            {
                case true:
                    schema.ForceAllExitsAvailable = true; break;
                case false:
                    schema.ForceAllExitsAvailable = false; break;
            }
        }

        private void patchScavExitsToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (patchScavExitsToggle.Checked)
            {
                case true:
                    schema.PatchScavengerExits = true; break;
                case false:
                    schema.PatchScavengerExits = false; break;
            }
        }

        private void customsAirdropNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.CustomsAirdropChance = (double)customsAirdropNumer.Value;
        }

        private void woodsAirdropNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.WoodsAirdropChance = (double)woodsAirdropNumer.Value;
        }

        private void streetsAirdropNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.StreetsAirdropChance = (double)streetsAirdropNumer.Value;
        }

        private void shorelineAirdropNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ShorelineAirdropChance = (double)shorelineAirdropNumer.Value;
        }

        private void lighthouseAirdropNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.LighthouseAirdropChance = (double)lighthouseAirdropNumer.Value;
        }

        private void reservAirdropNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ReserveAirdropChance = (double)reservAirdropNumer.Value;
        }

        private void interchangeAirdropNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.InterchangeAirdropChance = (double)interchangeAirdropNumer.Value;
        }

        private void instantHideoutConstToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (instantHideoutConstToggle.Checked)
            {
                case true:
                    schema.InstantHideoutConstruction = true; break;
                case false:
                    schema.InstantHideoutConstruction = false; break;
            }
        }

        private void instantHideoutProdToggle_CheckedChanged(object sender, EventArgs e)
        {
            switch (instantHideoutProdToggle.Checked)
            {
                case true:
                    schema.InstantHideoutProduction = true; break;
                case false:
                    schema.InstantHideoutProduction = false; break;
            }
        }

        private void hideoutConstTimeMultNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.HideoutConstructionTimeMultiplier = (double)hideoutConstTimeMultNumer.Value;
        }

        private void hideoutProdTimeMultNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.HideoutProductionTimeMultiplier = (double)hideoutProdTimeMultNumer.Value;
        }

        private void headHitpointsNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.HeadHitpoints = (int)headHitpointsNumer.Value;
        }

        private void chestHitpointsNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ChestHitpoints = (int)chestHitpointsNumer.Value;
        }

        private void stomachHitpointsNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.StomachHitpoints = (int)stomachHitpointsNumer.Value;
        }

        private void armHitpointsNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.LeftArmHitpoints = (int)armHitpointsNumer.Value;
            schema.RightArmHitpoints = (int)armHitpointsNumer.Value;
        }

        private void legHitpointsNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.LeftLegHitpoints = (int)legHitpointsNumer.Value;
            schema.RightLegHitpoints = (int)legHitpointsNumer.Value;
        }

        private void bossHpMultNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.BossHealthMultiplier = (int)bossHpMultNumer.Value;
        }

        private void bossFollowerHpMultNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.BossFollowerHealthMultiplier = (int)bossFollowerHpMultNumer.Value;
        }

        private void scavHpMultNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ScavengerHealthMultiplier = (int)scavHpMultNumer.Value;
        }

        private void specialHpMultNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.SpecialBotHealthMultiplier = (int)specialHpMultNumer.Value;
        }

        private void friendlyPmcNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.PmcFriendlyChance = (int)friendlyPmcNumer.Value;
        }

        private void usecBearRatioNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.UsecToBearRatio = (int)usecBearRatioNumer.Value;
        }

        private void vestMaxValueNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.PmcVestMaxValue = (int)vestMaxValueNumer.Value;
        }

        private void backpackMaxValueNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.PmcBackpackMaxValue = (int)backpackMaxValueNumer.Value;
        }

        private void scavToPmcNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ScavengerToPmc = (int)scavToPmcNumer.Value;
        }

        private void raiderToPmcNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.RaiderToPmc = (int)raiderToPmcNumer.Value;
        }

        private void rogueToPmcNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.RogueToPmc = (int)rogueToPmcNumer.Value;
        }

        private void reserveGluharChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ReserveGlukharBoss[0] = ((int)reserveGluharChanceNumer.Value).ToString();
        }

        private void reserveGluharScoutNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ReserveGlukharBoss[1] = ((int)reserveGluharScoutNumer.Value).ToString();
        }

        private void reserveGluharAssaultNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ReserveGlukharBoss[2] = ((int)reserveGluharAssaultNumer.Value).ToString();
        }

        private void reserveGluharSecurityNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ReserveGlukharBoss[3] = ((int)reserveGluharSecurityNumer.Value).ToString();
        }

        private void sanitarChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ShorelineSanitarBoss[0] = ((int)sanitarChanceNumer.Value).ToString();
        }

        private void sanitarFollowersNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ShorelineSanitarBoss[1] = ((int)sanitarFollowersNumer.Value).ToString();
        }

        private void sanitarSpawns_TextChanged(object sender, EventArgs e)
        {
            schema.ShorelineSanitarBoss[2] = sanitarSpawns.Text;
        }

        private void shorelineCultChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ShorelineCultistBoss[0] = ((int)shorelineCultChanceNumer.Value).ToString();
        }

        private void reshalaChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.CustomsReshalaBoss[0] = ((int)reshalaChanceNumer.Value).ToString();
        }

        private void reshalaFollowersNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.CustomsReshalaBoss[1] = ((int)reshalaFollowersNumer.Value).ToString();
        }

        private void customsGoonsChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.CustomsGoonsquadBoss[0] = ((int)customsGoonsChanceNumer.Value).ToString();
        }

        private void customsCultChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.CustomsCultistBoss[0] = ((int)customsCultChanceNumer.Value).ToString();
        }

        private void factoryDayTagillaChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.DayFactoryTagillaBoss[0] = ((int)factoryDayTagillaChanceNumer.Value).ToString();
        }

        private void factoryNightTagillaChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.NightFactoryTagillaBoss[0] = ((int)factoryNightTagillaChanceNumer.Value).ToString();
        }

        private void factoryNightCultChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.NightFactoryCultistBoss[0] = ((int)factoryNightCultChanceNumer.Value).ToString();
        }

        private void interchangeKillaChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.InterchangeKillaBoss[0] = ((int)interchangeKillaChanceNumer.Value).ToString();
        }

        private void lighthouseGoonsChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.LighthouseGoonsquadBoss[0] = ((int)lighthouseGoonsChanceNumer.Value).ToString();
        }

        private void streetsKabanChance_ValueChanged(object sender, EventArgs e)
        {
            schema.StreetsKabanBoss[0] = ((int)streetsKabanChance.Value).ToString();
        }

        private void streetsKabanFollowersNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.StreetsKabanBoss[1] = ((int)streetsKabanFollowersNumer.Value).ToString();
        }

        private void streetsKillaChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.StreetsKillaBoss[0] = ((int)streetsKillaChanceNumer.Value).ToString();
        }

        private void shturmanChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.WoodsShturmanBoss[0] = ((int)shturmanChanceNumer.Value).ToString();
        }

        private void shturmanFollowersNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.WoodsShturmanBoss[1] = ((int)shturmanFollowersNumer.Value).ToString();
        }

        private void woodsGoonsChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.WoodsGoonsquadBoss[0] = ((int)woodsGoonsChanceNumer.Value).ToString();
        }

        private void woodsCultChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.WoodsCultistBoss[0] = ((int)woodsCultChanceNumer.Value).ToString();
        }

        private void shorelineGoonsChanceNumer_ValueChanged(object sender, EventArgs e)
        {
            schema.ShorelineGoonsquadBoss[0] = ((int)shorelineGoonsChanceNumer.Value).ToString();
        }
    }
}
