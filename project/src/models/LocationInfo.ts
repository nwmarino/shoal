export default class LocationInfo
{
    static fetchMapNames(): Set<string>
    {
        return new Set<string>([
            "bigmap",
            "factory4_day",
            "factory4_night",
            "interchange",
            "laboratory",
            "lighthouse",
            "rezervbase",
            "shoreline",
            "tarkovstreets",
            "woods",
            "sandbox"
        ]);
    }

    static fetchExitNames(targetMap: string): { map: string[]; pmc: string[]; scav: string[]; }
    {
        const sandboxExits = {
            map: ["sandbox"],
            pmc: [
                "Unity_free_exit",
                "Sandbox_VExit",
                "Sniper_exit",
                "Scav_coop_exit",
                "Nakatani_stairs_free_exit"
            ],
            scav: []
        }

        const bigmapExits = {
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

        const factoryExits = {
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

        const interchangeExits = {
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

        const laboratoryExits = {
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

        const lighthouseExits = {
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

        const rezervbaseExits = {
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

        const shorelineExits = {
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

        const tarkovstreetsExits = {
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

        const woodsExits = {
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
            sandboxExits,
            bigmapExits,
            factoryExits,
            interchangeExits,
            laboratoryExits,
            lighthouseExits,
            rezervbaseExits,
            shorelineExits,
            tarkovstreetsExits,
            woodsExits
        ]

        for (const m in maps)
            if (maps[m].map.includes(targetMap))
                return maps[m];
    }

    static fetchCustomExitNames(targetMap: string): { map: string[]; pmc: string[]; scav: string[]; }
    {
        const sandboxExits = {
            map: ["sandbox"],
            pmc: [
                "Unity_free_exit",
                "Sandbox_VExit",
                "Sniper_exit",
                "Scav_coop_exit",
                "Nakatani_stairs_free_exit"
            ],
            scav: []
        }

        const bigmapExits = {
            map: ["bigmap"],
            pmc: [
                "Crossroads",
                "Dorms V-Ex",
                "EXFIL_ZB013" // under stronghold
            ],
            scav: [
                "Shack", // military base cp
                "Railroad To Military Base", // derailed train
                "Railroad To Tarkov", // railroad near trailer park
                "Warehouse 17", // near crackhouse
                "Old Azs Gate", // old gas station gate
                "Administration Gate" // near mil checkpoint
            ]
        }

        const factoryExits = {
            map: ["factory4_day", "factory4_night"],
            pmc: [
                "Cellars",
                "Gate 3",
                "Gate 0"
            ],
            scav: [
                "Camera Bunker Door"
            ]
        }

        const interchangeExits = {
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

        const laboratoryExits = {
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

        const lighthouseExits = {
            map: ["lighthouse"],
            pmc: [
                "EXFIL_Train",
                "Alpinist_light",
                "tunnel_shared", // side tunnel
                "Nothern_Checkpoint", // north road
                "Coastal_South_Road", // south road
                "Shorl_free", // path to shoreline
                "V-Ex_light"
            ],
            scav: [
                "Scav_Underboat_Hideout" // sunken house
            ]
        }

        const rezervbaseExits = {
            map: ["rezervbase"],
            pmc: [
                "EXFIL_Train",
                "Alpinist", // cliff descent
                "EXFIL_ScavCooperation",
                "EXFIL_Bunker",
                "EXFIL_BUNKER_D2"
            ],
            scav: [
                "Exit1", // hole in the wall
                "Exit2" // heating pipe
            ]
        }

        const shorelineExits = {
            map: ["shoreline"],
            pmc: [
                "Tunnel",
                "Pier Boat",
                "Road to Customs",
                "Lighthouse_pass", // path to lighthouse
                "RedRebel_alp", // climber's trail
                "Smugglers_Trail_coop",
                "Shorl_V-Ex"
            ],
            scav: [
                "RWing Gym Entrance"
            ]
        }

        const tarkovstreetsExits = {
            map: ["tarkovstreets"],
            pmc: [
                "E1", // stylobate elevator
                "E2", // sewer river
                "E3", // damaged house
                "E4", // crash site
                "E7_car", // taxi
                "E9_sniper" // klimov
            ],
            scav: [
                "scav_e5", // arch
                "scav_e7", // cardinal apartments
                "scav_e8" // klimov mall
            ]
        }

        const woodsExits = {
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
                "Dead Man's Place"
            ]
        }

        const maps = [
            sandboxExits,
            bigmapExits,
            factoryExits,
            interchangeExits,
            laboratoryExits,
            lighthouseExits,
            rezervbaseExits,
            shorelineExits,
            tarkovstreetsExits,
            woodsExits
        ]

        for (const m in maps)
            if (maps[m].map.includes(targetMap))
                return maps[m];
    }
}