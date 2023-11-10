using Newtonsoft.Json;
using shoalGui.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shoalGui.utils
{
    internal class FileConstructor
    {
        internal static void writeToFile(Data data)
        {
            string json = JsonConvert.SerializeObject(data, Formatting.Indented);
            System.IO.File.WriteAllText("../../output/data.json", json);
        }
    }
}
