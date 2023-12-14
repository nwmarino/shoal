using System.Collections.Generic;
using System.Linq;

namespace Gui.models
{
    internal class ConfigSchema
    {
        // following are of npc section
        public List<string> CustomsReshalaBoss;
        public List<string> CustomsGoonsquadBoss;
        public List<string> CustomsCultistBoss;
        public List<string> DayFactoryTagillaBoss;
        public List<string> NightFactoryTagillaBoss;
        public List<string> NightFactoryCultistBoss;
        public List<string> InterchangeKillaBoss;
        public List<string> LighthouseGoonsquadBoss;
        public List<string> ReserveGlukharBoss;
        public List<string> ShorelineSanitarBoss;
        public List<string> ShorelineGoonsquadBoss;
        public List<string> ShorelineCultistBoss;
        public List<string> StreetsKabanBoss;
        public List<string> StreetsKillaBoss;
        public List<string> WoodsShturmanBoss;
        public List<string> WoodsGoonsquadBoss;
        public List<string> WoodsCultistBoss;
        public int RaiderToPmc;
        public int RogueToPmc;
        public int ScavengerToPmc;
        public int FleaMarketAccessLevel; // trader
        public int HeadHitpoints; // player
        public int ChestHitpoints; // player
        public int StomachHitpoints; // player
        public int LeftArmHitpoints; // player
        public int LeftLegHitpoints; // player
        public int RightArmHitpoints; // player
        public int RightLegHitpoints; // player
        public int PmcFriendlyChance; // npc
        public int PmcBackpackMaxValue; // npc
        public int PmcVestMaxValue; // npc
        public int ScavengerModeCooldown; // game
        public int TimeToDeploy; // game
        public int UsecToBearRatio; // npc
        public double CustomsAirdropChance; // raid
        public double WoodsAirdropChance; // raid
        public double LighthouseAirdropChance; // raid
        public double ShorelineAirdropChance; // raid
        public double StreetsAirdropChance; // raid
        public double ReserveAirdropChance; // raid
        public double InterchangeAirdropChance; // raid
        public double BossHealthMultiplier; // npc
        public double BossFollowerHealthMultiplier; // npc
        public double ScavengerHealthMultiplier; // npc
        public double SpecialBotHealthMultiplier; // npc
        public double ExtractExperienceMultiplier; // game
        public double KilledExperienceMultiplier; // game
        public double HideoutConstructionTimeMultiplier; // player
        public double HideoutProductionTimeMultiplier; // player
        public bool AccessLabsWithoutCard; // game
        public bool AllowExitFromAnySide; // raid
        public bool ConvertCooperationExits; // raid
        public bool DisableCustomBotWaves; // raid
        public bool DisableFleaMarket; // trader
        public bool DisableFallDamage; // game
        public bool DisableScavengerMode; // game
        public bool DisableSkillFatigue; // game
        public bool DisableRunthroughs; // game
        public bool ExtendRaidTimerToHour; // raid
        public bool ExtendKeyUsageLimit; // game
        public bool ForceAllExitsAvailable; // raid
        public bool InstantHideoutConstruction; // player
        public bool InstantHideoutProduction; // player
        public bool PatchScavengerExits; // raid
        public bool RemoveFoundInRaidQuestConditions; // game

        public ConfigSchema()
        {
            CustomsReshalaBoss = new List<string>() { "35", "4" };
            CustomsGoonsquadBoss = new List<string>() { "35" };
            CustomsCultistBoss = new List<string>() { "15" };
            DayFactoryTagillaBoss = new List<string>() { "30" };
            NightFactoryTagillaBoss = new List<string>() { "23" };
            NightFactoryCultistBoss = new List<string>() { "10" };
            InterchangeKillaBoss = new List<string>() { "30" };
            LighthouseGoonsquadBoss = new List<string>() { "35" };
            ReserveGlukharBoss = new List<string>() { "35", "2", "2", "2" };
            ShorelineSanitarBoss = new List<string>() { "35", "2", "ZoneGreenHouses,ZoneSanatorium1,ZoneGreenHouses,ZoneSanatorium2,ZonePort" };
            ShorelineGoonsquadBoss = new List<string>() { "35" };
            ShorelineCultistBoss = new List<string>() { "12" };
            StreetsKabanBoss = new List<string>() { "35", "6" };
            StreetsKillaBoss = new List<string>() { "5" };
            WoodsShturmanBoss = new List<string>() { "35", "2" };
            WoodsGoonsquadBoss = new List<string>() { "35" };
            WoodsCultistBoss = new List<string>() { "15" };
            RaiderToPmc = 0;
            RogueToPmc = 0;
            ScavengerToPmc = 0;
            FleaMarketAccessLevel = 15;
            HeadHitpoints = 35;
            ChestHitpoints = 85;
            StomachHitpoints = 70;
            LeftArmHitpoints = 60;
            LeftLegHitpoints = 65;
            RightArmHitpoints = 60;
            RightLegHitpoints = 65;
            PmcFriendlyChance = 0;
            PmcBackpackMaxValue = 150000;
            PmcVestMaxValue = 50000;
            ScavengerModeCooldown = 1200;
            TimeToDeploy = 20;
            UsecToBearRatio = 50;
            CustomsAirdropChance = 5.0;
            InterchangeAirdropChance = 5.0;
            LighthouseAirdropChance = 5.0;
            ReserveAirdropChance = 5.0;
            ShorelineAirdropChance = 5.0;
            StreetsAirdropChance = 5.0;
            WoodsAirdropChance = 5.0;
            BossHealthMultiplier = 1.0;
            BossFollowerHealthMultiplier = 1.0;
            ScavengerHealthMultiplier = 1.0;
            SpecialBotHealthMultiplier = 1.0;
            ExtractExperienceMultiplier = 1.0;
            KilledExperienceMultiplier = 1.0;
            HideoutConstructionTimeMultiplier = 1.0;
            HideoutProductionTimeMultiplier = 1.0;
            AccessLabsWithoutCard = false;
            AllowExitFromAnySide = false;
            ConvertCooperationExits = false;
            DisableCustomBotWaves = false;
            DisableFleaMarket = false;
            DisableFallDamage = false;
            DisableScavengerMode = false;
            DisableSkillFatigue = false;
            DisableRunthroughs = false;
            ExtendRaidTimerToHour = false;
            ExtendKeyUsageLimit = false;
            ForceAllExitsAvailable = false;
            InstantHideoutConstruction = false;
            InstantHideoutProduction = false;
            PatchScavengerExits = false;
            RemoveFoundInRaidQuestConditions = false;
        }
    }
}
