using BepInEx;

namespace shoal
{
    [BepInPlugin("com.nwmarino.shoal", "shoal", "2.1.0")]
    public class Plugin : BaseUnityPlugin
    {
        private void Awake()
        {
            new InitAllExfiltrationPointsPatch().Enable();
            new ScavExfiltrationPointPatch().Enable();

            Logger.LogInfo($"Exit patch has run successfully.");
        }
    }
}
