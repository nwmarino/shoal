export class ExitGenerator
{
    static genExit(name: string, enabled: boolean, req: string, cost: number): object
    {
        if (req == "TransferItem" && cost == 0) req = "None"
        let currency: string = "";
        if (cost > 0) currency = "5449016a4bdc2d6f028b456f";
        const exitChance: number = enabled ? 100 : 0;
        const exit: object =
        {
            Name: name,
            EntryPoints: "all",
            Chance: exitChance,
            Count: cost,
            Id: currency,
            MinTime: 0,
            MaxTime: 0,
            ExfiltrationType: "Individual",
            PassageRequirement: req,
            PlayersCount: 0,
            ExfiltrationTime: 8,
            RequiredSlot: "FirstPrimaryWeapon",
            RequirementTip: ""
        }
        return exit;
    }
}