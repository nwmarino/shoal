using System;
using BepInEx;

namespace modules
{
    [BepInPlugin("com.nwmarino.shoal", "shoal.modules", "3.0.0")]
    public class Plugin : BaseUnityPlugin
    {
        private void Awake()
        {
            Logger.LogInfo("Loading: shoal.modules");

            try
            {
                // run patch
            }
            catch (Exception exc)
            {
                Logger.LogError($"Failed loading shoal.modules");
                Logger.LogError($"{GetType().Name}: {exc}")
                throw;
            }

            Logger.LogInfo("Completed: shoal.modules");
        }
    }
}
