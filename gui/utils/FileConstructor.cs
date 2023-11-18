using Newtonsoft.Json;
using Gui.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gui.utils
{
    internal class FileConstructor
    {
        internal static void writeToFile(ConfigSchema data)
        {
            string json = JsonConvert.SerializeObject(data, Formatting.Indented);
            System.IO.File.WriteAllText("../../output/data.json", json);
        }
    }
}
