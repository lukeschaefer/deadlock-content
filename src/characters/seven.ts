import { Character } from ".";

export const seven: Character = {
  "id": 2,
  "class_name": "gigawatt",
  "name": "Seven",
  "lore": "When mystic energy awoke on Earth, the world changed... anything was possible.  But just because anything WAS possible, didn’t mean that anything SHOULD be possible.  And so the government made rules.   Laws.  A means for US citizens to enjoy the benefits of the supernatural world in safety.  But rules and laws are for lesser men.  Men with limitations.  Men who were not Seven.  \n\nThere are many rumors about what Seven did to land himself in Lost Whisper, an oubliette for the most dangerous of occultists.  But there is no doubt about what happened on the night of his execution. \n\nWards placed by the most powerful ritualists of 7 different nations… wards designed to not just prevent mystical interference with the execution, but to simultaneously obliterate Seven's soul so that it could never be contacted, resurrected, or otherwise be used by someone looking to follow in his footsteps... failed.\n\nOnlookers viewed in horror as the strongest mentalist employed by the US Army’s head popped like a grape.  They screamed as Scotland Yard’s premiere occult investigator, the one who allegedly captured Seven, crumbled to ash.  Seven's body buckled and writhed against his restraints; his skin burning from eldritch electricity... and yet he would not die.  He laughed.\n\nHe laughed as he tore himself free from his bondage.\n\nHe laughed as his captors cowered in fear.\n\nHe laughed as he massacred his tormentors.\n\nHe laughed as he tasted the fresh air that was denied to him for years.\n\nAnd he laughed when he thought about what he was going to do once he reached New York City.",
  "role": "Electrocutes crowds of enemies",
  "playstyle": "Seven thrives in a skirmish waiting for the time to strike. Then he rolls into the fight like a storm and batters his enemies with a cascade of lightning.",
  "player_selectable": true,
  "disabled": false,
  "in_development": false,
  "needs_testing": false,
  "assigned_players_only": false,
  "bot_selectable": true,
  "limited_testing": false,
  "complexity": 1,
  "readability": 4,
  "starting_stats": {
    "max_move_speed": 7,
    "sprint_speed": 0,
    "crouch_speed": 4.75,
    "move_acceleration": 4,
    "light_melee_damage": 63,
    "heavy_melee_damage": 116,
    "max_health": 550,
    "weapon_power": 0,
    "reload_speed": 1,
    "weapon_power_scale": 1,
    "proc_build_up_rate_scale": 1,
    "stamina": 3,
    "base_health_regen": 1.5,
    "stamina_regen_per_second": 0.2,
    "ability_resource_max": 0,
    "ability_resource_regen_per_second": 0,
    "crit_damage_received_scale": 0.65,
    "tech_duration": 1,
    "tech_range": 1
  },
  "collision_radius": 20,
  "collision_height": 80,
  "step_height": 32,
  "items": {
    "ability_climb_rope": 4261702459,
    "ability_innate1": 2207638101,
    "ability_innate2": 1443159618,
    "ability_innate3": 664285540,
    "ability_jump": 1466127517,
    "ability_mantle": 4109126631,
    "ability_slide": 2335418656,
    "ability_zip_line": 2573821048,
    "ability_zip_line_boost": 875395762,
    "signature1": 1065103387,
    "signature2": 1074714947,
    "signature3": 539192269,
    "signature4": 2061574352,
    "weapon_melee": 2372182196,
    "weapon_primary": 2695625322
  },
  "item_slot_info": {
    "weapon_mod": {
      "max_purchase_for_tier": [6, 6, 6]
    },
    "armor": {
      "max_purchase_for_tier": [6, 6, 6]
    },
    "tech": {
      "max_purchase_for_tier": [6, 6, 6]
    }
  },
  "purchase_bonuses": {
    "weapon_mod": [
      {
        "tier": 1,
        "value": "6"
      },
      {
        "tier": 2,
        "value": "10"
      },
      {
        "tier": 3,
        "value": "14"
      },
      {
        "tier": 4,
        "value": "18"
      }
    ],
    "armor": [
      {
        "tier": 1,
        "value": "11"
      },
      {
        "tier": 2,
        "value": "14"
      },
      {
        "tier": 3,
        "value": "17"
      },
      {
        "tier": 4,
        "value": "20"
      }
    ],
    "tech": [
      {
        "tier": 1,
        "value": "4"
      },
      {
        "tier": 2,
        "value": "8"
      },
      {
        "tier": 3,
        "value": "12"
      },
      {
        "tier": 4,
        "value": "16"
      }
    ]
  },
  "level_info": {
    "1": {
      "required_gold": 0,
      "bonus_currencies": [
        "EAbilityUnlocks"
      ],
      "use_standard_upgrade": false
    },
    "10": {
      "required_gold": 5200,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "11": {
      "required_gold": 6000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "12": {
      "required_gold": 7500,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "13": {
      "required_gold": 8000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "14": {
      "required_gold": 9000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "15": {
      "required_gold": 9700,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "16": {
      "required_gold": 10500,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "17": {
      "required_gold": 12000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "18": {
      "required_gold": 13000,
      "use_standard_upgrade": true
    },
    "19": {
      "required_gold": 14000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "2": {
      "required_gold": 400,
      "bonus_currencies": [
        "EAbilityUnlocks",
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "20": {
      "required_gold": 15000,
      "use_standard_upgrade": true
    },
    "21": {
      "required_gold": 16000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "22": {
      "required_gold": 18000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "23": {
      "required_gold": 20000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "24": {
      "required_gold": 22000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "25": {
      "required_gold": 24000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "26": {
      "required_gold": 27000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "27": {
      "required_gold": 30000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "28": {
      "required_gold": 33000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "29": {
      "required_gold": 36000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "3": {
      "required_gold": 800,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "30": {
      "required_gold": 39000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "31": {
      "required_gold": 42000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "32": {
      "required_gold": 45000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "33": {
      "required_gold": 48000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "4": {
      "required_gold": 1200,
      "use_standard_upgrade": true
    },
    "5": {
      "required_gold": 1500,
      "bonus_currencies": [
        "EAbilityUnlocks"
      ],
      "use_standard_upgrade": false
    },
    "6": {
      "required_gold": 2200,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "7": {
      "required_gold": 3000,
      "bonus_currencies": [
        "EAbilityUnlocks"
      ],
      "use_standard_upgrade": false
    },
    "8": {
      "required_gold": 3500,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "9": {
      "required_gold": 4500,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    }
  },
  "stealth_speed_meters_per_second": 4,
  "footstep_sound_travel_distance_meters": 20,
  "step_sound_time": 0.28,
  "color_ui": [237, 149, 60],
  "color_glow_friendly": [255, 239, 215],
  "color_glow_enemy": [255, 0, 0],
  "color_glow_team1": [231, 182, 89],
  "color_glow_team2": [91, 121, 230],
  "standard_level_up_upgrades": {
    "MODIFIER_VALUE_BASE_BULLET_DAMAGE_FROM_LEVEL": 0.597143,
    "MODIFIER_VALUE_BASE_HEALTH_FROM_LEVEL": 31,
    "MODIFIER_VALUE_BASE_MELEE_DAMAGE_FROM_LEVEL": 2.671429,
    "MODIFIER_VALUE_BULLET_ARMOR_DAMAGE_RESIST": 0,
    "MODIFIER_VALUE_TECH_DAMAGE_PERCENT": 0
  },
  "hero_shop_stat_display": {
    "weapon_stats_display": {
      "weapon_image": "panorama:\"file://{images}/heroes/guns/gigawatt_gun.psd\""
    }
  },
  "selection_image": "panorama:\"file://{images}/heroes/gigawatt.psd\"",
  "icon_image_small": "panorama:\"file://{images}/heroes/gigawatt_sm.psd\"",
  "minimap_image": "panorama:\"file://{images}/heroes/gigawatt_mm.psd\"",
  "icon_hero_card": "panorama:\"file://{images}/heroes/gigawatt_card.psd\"",
  "top_bar_image": "panorama:\"file://{images}/hud/hero_portraits/gigwatt_hud.psd\"",
  "images": {
    "portrait": "https://assets.deadlock-api.com/images/heroes/gigawatt_psd.png",
    "card": "https://assets.deadlock-api.com/images/heroes/gigawatt_card_psd.png",
    "top_bar": "https://assets.deadlock-api.com/images/heroes/gigwatt_hud_psd.png",
    "minimap": "https://assets.deadlock-api.com/images/heroes/gigawatt_mm_psd.png",
    "small": "https://assets.deadlock-api.com/images/heroes/gigawatt_sm_psd.png",
    "weapon": "https://assets.deadlock-api.com/images/heroes/guns/gigawatt_gun_psd.png"
  }
};
