// utility class to generate exits.
export class ExitGenerator
{
    static genExit(name: string, enabled: boolean, req: string, cost: number): object
    {
        // so that paid exits are not free.
        if (req === "TransferItem" && cost === 0) req = "None";
        let currency: string = ""; // currency to rubs, as needed
        if (cost > 0) currency = "5449016a4bdc2d6f028b456f";
        // forces chance based on enabled param
        const exitChance: number = enabled ? 100 : 0;
        const exit: object =
        {    
            Chance: exitChance,
            Count: cost,
            EntryPoints: "all",
            ExfiltrationTime: 10,
            ExfiltrationType: "Individual",
            Id: currency,
            MinTime: 0,
            MaxTime: 0,
            Name: name,
            PassageRequirement: req,
            PlayersCount: 0,
            RequiredSlot: "FirstPrimaryWeapon",
            RequirementTip: ""
        }
        return exit;
    }
}