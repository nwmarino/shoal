/* eslint-disable @typescript-eslint/naming-convention */
export default class Exits
{
    // all car exits by precise name
    static getCarExits(): {
        "Dorms V-Ex": string;
        "PP Exfil": string;
        " V-Ex_light": string;
        "E7_car": string;
        "South V-Ex": string;
    }
    {
        return {
            "Dorms V-Ex": "customs",
            "PP Exfil": "interchange",
            " V-Ex_light": "lighthouse",
            "E7_car": "streets",
            "South V-Ex": "woods"
        }
    }

    // all exits, scav and pmc, by precise name
    static getExitNames(map: string): {
        map: string[];
        pmc: string[];
        scav: string[];
    }
    {
        const bigmapExfils = {
            map: ["bigmap"],
            pmc: [
                "Crossroads",
                "Smuggler's Boat",
                "RUAF Roadblock",
                "ZB-1012",
                "ZB-1011",
                "Trailer Park",
                "Old Gas Station",
                "Dorms V-Ex",
                "EXFIL_ZB013"
            ],
            scav: [
                "Shack",
                "Beyond Fuel Tank",
                "Railroad To Military Base",
                "Old Road Gate",
                "Sniper Roadblock",
                "Railroad To Port",
                "Trailer Park Workers Shack",
                "Railroad To Tarkov",
                "RUAF Roadblock_scav",
                "Warehouse 17",
                "Factory Shacks",
                "Warehouse 4",
                "Old Azs Gate",
                "Factory Far Corner",
                "Administration Gate",
                "Military Checkpoint"
            ]
        }
        const factoryExfils = {
            map: ["factory4_day", "factory4_night"],
            pmc: [
                "Cellars",
                "Gate 3",
                "Gate 0",
                "Gate m"
            ],
            scav: [
                "Camera Bunker Door",
                "Office Window"
            ]
        }
        const interchangeExfils = {
            map: ["interchange"],
            pmc: [
                "NW Exfil",
                "SE Exfil",
                "PP Exfil",
                "Saferoom Exfil",
                "Hole Exfill",
                "Interchange Cooperation"
            ],
            scav: []
        }
        const laboratoryExfils = {
            map: ["laboratory"],
            pmc: [
                "lab_Parking_Gate",
                "lab_Hangar_Gate",
                "lab_Elevator_Med",
                "lab_Under_Storage_Collector",
                "lab_Elevator_Main",
                "lab_Vent",
                "lab_Elevator_Cargo"
            ],
            scav: []
        }
        const lighthouseExfils = {
            map: ["lighthouse"],
            pmc: [
                "EXFIL_Train",
                "Alpinist_light",
                "tunnel_shared",
                "Nothern_Checkpoint",
                "Coastal_South_Road",
                "Shorl_free",
                "V-Ex_light"
            ],
            scav: [
                "Shorl_free_scav",
                "Scav_Coastal_South",
                "Scav_Underboat_Hideout",
                "Scav_Hideout_at_the_grotto",
                "Scav_Industrial_zone"
            ]
        }
        const rezervbaseExfils = {
            map: ["rezervbase"],
            pmc: [
                "EXFIL_Train",
                "Alpinist",
                "EXFIL_ScavCooperation",
                "EXFIL_Bunker",
                "EXFIL_BUNKER_D2",
                "EXFIL_vent"
            ],
            scav: [
                "Exit1",
                "Exit2",
                "Exit3",
                "Exit4"
            ]
        }
        const shorelineExfils = {
            map: ["shoreline"],
            pmc: [
                "Tunnel",
                "Rock Passage",
                "Pier Boat",
                "CCP Temporary",
                "Road to Customs",
                "Lighthouse_pass",
                "Road_at_railbridge"
            ],
            scav: [
                "Scav Road to Customs",
                "Lighthouse",
                "Wrecked Road",
                "Svetliy Dead End",
                "Ruined House Fence",
                "South Fence Passage",
                "RWing Gym Entrance",
                "Adm Basement"
            ]
        }
        const tarkovstreetsExfils = {
            map: ["tarkovstreets"],
            pmc: [
                "E1",
                "E2",
                "E3",
                "E4",
                "E5",
                "E6",
                "E7",
                "E7_car",
                "E8_yard",
                "E9_sniper",
                "Exit_E10_coop"
            ],
            scav: [
                "scav_e1",
                "scav_e2",
                "scav_e3",
                "scav_e4",
                "scav_e5",
                "scav_e7",
                "scav_e8"
            ]
        }
        const woodsExfils = {
            map: ["woods"],
            pmc: [
                "ZB-016",
                "Outskirts",
                "UN Roadblock",
                "RUAF Gate",
                "ZB-014",
                "South V-Ex",
                "Factory Gate",
                "un-sec"
            ],
            scav: [
                "Outskirts Water",
                "Dead Man's Place",
                "The Boat",
                "Scav House",
                "East Gate",
                "Mountain Stash",
                "West Border",
                "Old Station",
                "RUAF Roadblock"
            ]
        }
        const maps = [
            bigmapExfils,
            factoryExfils,
            interchangeExfils,
            laboratoryExfils,
            lighthouseExfils,
            rezervbaseExfils,
            shorelineExfils,
            tarkovstreetsExfils,
            woodsExfils
        ]
        for (const m in maps)
            if (maps[m].map.includes(map))
                return maps[m];
    }
}