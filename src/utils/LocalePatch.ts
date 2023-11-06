import exitLocales from "./../exitLocales.json";
export default class LocalePatch {
    static run(dbLocales: Record<string, Record<string, string>>): void {

        const locales = dbLocales["en"];
        const exfilLocalesToChange = exitLocales.Extracts;

        for (const locName in exfilLocalesToChange)
            if (exfilLocalesToChange[locName] !== "")
                locales[locName] = exfilLocalesToChange[locName];
    }
}