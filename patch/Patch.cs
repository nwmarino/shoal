using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Aki.Reflection.Patching;
using Aki.Reflection.Utils;
using EFT.Interactive;
using HarmonyLib;

namespace shoal
{
    public class ScavExfiltrationPointPatch : ModulePatch
    {
        protected override MethodBase GetTargetMethod()
        {
            return AccessTools.Method(typeof(ScavExfiltrationPoint), "InfiltrationMatch");
        }

        [PatchPrefix]
        private static bool Prefix(ref bool __result)
        {
            __result = true;
            return false;
        }
    }

    public class InitAllExfiltrationPointsPatch : ModulePatch
    {
        private static FieldInfo _settingsNameField;
        private static MethodInfo _loadSettingsMethod;

        private static PropertyInfo _exfiltrationPointsField;
        private static PropertyInfo _scavExfiltrationPointsField;
        private static FieldInfo _list0Field;
        private static FieldInfo _list1Field;

        public static bool NameMatches(object x)
        {
            return exitName == _settingsNameField.GetValue(x) as string;
        }

        public static string exitName;

        public static bool RandomRange(ExfiltrationPoint trigger)
        {
            return UnityEngine.Random.Range(0f, 100f) <= trigger.Settings.Chance;
        }

        public static bool IsNotScavExfil(ExfiltrationPoint x)
        {
            return !(x is ScavExfiltrationPoint) || x is SharedExfiltrationPoint;
        }

        public static bool IsScavExfil(ExfiltrationPoint x)
        {
            return x is ScavExfiltrationPoint;
        }

        protected override MethodBase GetTargetMethod()
        {
            Type settingsClassType = PatchConstants.EftTypes.Single(x => x.GetField("PassageRequirement") != null);
            _settingsNameField = AccessTools.Field(settingsClassType, "Name");
            _loadSettingsMethod = AccessTools.Method(typeof(ExfiltrationPoint), "LoadSettings");

            _exfiltrationPointsField = AccessTools.Property(typeof(ExfiltrationControllerClass), "ExfiltrationPoints");
            _scavExfiltrationPointsField = AccessTools.Property(typeof(ExfiltrationControllerClass), "ScavExfiltrationPoints");
            _list0Field = AccessTools.Field(typeof(ExfiltrationControllerClass), "list_0");
            _list1Field = AccessTools.Field(typeof(ExfiltrationControllerClass), "list_1");

            return AccessTools.Method(typeof(ExfiltrationControllerClass), "InitAllExfiltrationPoints");
        }

        [PatchPrefix]
        private static bool PatchPrefix(ref ExfiltrationControllerClass __instance, object[] settings, bool justLoadSettings = false, bool giveAuthority = true)
        {
            ExfiltrationPoint[] source = LocationScene.GetAllObjects<ExfiltrationPoint>(false).ToArray<ExfiltrationPoint>();
            ExfiltrationPoint[] scavExfilArr = source.Where(new Func<ExfiltrationPoint, bool>(IsScavExfil)).ToArray<ExfiltrationPoint>();
            ExfiltrationPoint[] pmcExfilArr = source.Where(new Func<ExfiltrationPoint, bool>(IsNotScavExfil)).ToArray<ExfiltrationPoint>();

            List<ExfiltrationPoint> pmcExfilList = pmcExfilArr.ToList<ExfiltrationPoint>();

            foreach (ExfiltrationPoint scavExfil in scavExfilArr)
            {
                if (!pmcExfilList.Any(k => k.Settings.Name == scavExfil.Settings.Name))
                {
                    pmcExfilList.Add(scavExfil);
                }
            }

            _exfiltrationPointsField.SetValue(__instance, pmcExfilList.ToArray());

            _scavExfiltrationPointsField.SetValue(__instance, source.Where(new Func<ExfiltrationPoint, bool>(IsScavExfil)).Cast<ScavExfiltrationPoint>().ToArray<ScavExfiltrationPoint>());

            _list0Field.SetValue(__instance, new List<ScavExfiltrationPoint>(__instance.ScavExfiltrationPoints.Length));
            _list1Field.SetValue(__instance, new List<ScavExfiltrationPoint>());

            List<ScavExfiltrationPoint> list_0 = (List<ScavExfiltrationPoint>)_list0Field.GetValue(__instance);
            List<ScavExfiltrationPoint> list_1 = (List<ScavExfiltrationPoint>)_list1Field.GetValue(__instance);

            foreach (ScavExfiltrationPoint scavExfiltrationPoint in __instance.ScavExfiltrationPoints)
            {
                Logger.LogDebug("Scav Exfil name = " + scavExfiltrationPoint.Settings.Name);

                SharedExfiltrationPoint sharedExfiltrationPoint;
                if ((sharedExfiltrationPoint = (scavExfiltrationPoint as SharedExfiltrationPoint)) != null && sharedExfiltrationPoint.IsMandatoryForScavs)
                {
                    list_1.Add(scavExfiltrationPoint);
                }
                else
                {
                    list_0.Add(scavExfiltrationPoint);
                }
            }
            _list0Field.SetValue(__instance, list_0);
            _list1Field.SetValue(__instance, list_1);

            int seed = (int)(DateTime.Now.Ticks / TimeSpan.TicksPerMillisecond);
            UnityEngine.Random.InitState(seed);
            foreach (ExfiltrationPoint exfiltrationPoint in __instance.ExfiltrationPoints)
            {
                Logger.LogDebug("PMC Exfil name = " + exfiltrationPoint.Settings.Name);
                exitName = exfiltrationPoint.Settings.Name;
                object selectedSettings = settings.FirstOrDefault(new Func<object, bool>(NameMatches));
                if (selectedSettings != null)
                {
                    _loadSettingsMethod.Invoke(exfiltrationPoint, new object[] { selectedSettings, giveAuthority });
                    if (!justLoadSettings && !RandomRange(exfiltrationPoint))
                    {
                        exfiltrationPoint.SetStatusLogged(EExfiltrationStatus.NotPresent, "ExfiltrationController.InitAllExfiltrationPoints-2");
                    }
                }
                else
                {
                    exfiltrationPoint.SetStatusLogged(EExfiltrationStatus.NotPresent, "ExfiltrationController.InitAllExfiltrationPoints-3");
                }
            }
            return false;
        }
    }
}