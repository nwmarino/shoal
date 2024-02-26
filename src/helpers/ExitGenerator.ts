/* eslint-disable @typescript-eslint/naming-convention */
export class ExitGenerator
{
    static GenerateExit(name: string, enabled: boolean, req: string, cost: number): object
    {
        let currency: string = "";

        // so that paid exits are not free
        if (req === "TransferItem" && cost === 0)
            req = "None";

        if (cost > 0)
            currency = "5449016a4bdc2d6f028b456f";

        // forces chance based on enabled param
        const exitChance: number = enabled ? 100 : 0;

        const exit: object =
        {  
            Chance: exitChance,
            Count: cost,
            EntryPoints: "all",
            ExfiltrationTime: 10,
            ExfiltrationType: "Individual",
            RequiredSlot: "FirstPrimaryWeapon",
            Id: currency,
            MaxTime: 0,
            MinTime: 0,
            Name: name,
            PassageRequirement: req,
            PlayersCount: 0,
            RequirementTip: ""
        }
        return exit;
    }
}