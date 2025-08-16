ServerEvents.highPriorityData(event => {
  event.addJson("oei:replacements/raw_materials.json", [
    {
      "matchItems":
        [
          "#forge:raw_materials/silver"
        ],
      "resultItems": "immersiveengineering:raw_silver"
    },
    {
      "matchItems":
        [
          "#forge:raw_materials/lead"
        ],
      "resultItems": "immersiveengineering:raw_lead"
    },
    {
      "matchItems":
        [
          "#forge:raw_materials/uranium"
        ],
      "resultItems": "immersiveengineering:raw_uranium"
    }
  ]);
  event.addJson("oei:replacements/storage_blocks.json", [
    {
      "matchItems":
        [
          "immersiveengineering:raw_block_uranium"
        ],
      "resultItems": "mekanism:block_raw_uranium"
    },
    {
      "matchItems":
        [
          "immersiveengineering:raw_block_lead"
        ],
      "resultItems": "immersiveengineering:block_raw_lead"
    },
    {
      "matchItems":
        [
          "mekanism:block_steel"
        ],
      "resultItems": "immersiveengineering:storage_steel"
    },
    {
      "matchItems":
        [
          "mekanism:block_uranium"
        ],
      "resultItems": "immersiveengineering:storage_uranium"
    },
    {
      "matchItems":
        [
          "immersiveengineering:storage_lead"
        ],
      "resultItems": "mekanism:block_lead"
    }
  ]);
  event.addJson("oei:replacements/ingots.json", [
    {
      "matchItems":
        [
          "#forge:ingots/lead"
        ],
      "resultItems": "mekanism:ingot_lead"
    },
    {
      "matchItems":
        [
          "#forge:ingots/uranium"
        ],
      "resultItems": "mekanism:ingot_uranium"
    },
    {
      "matchItems":
        [
          "#forge:ingots/silver"
        ],
      "resultItems": "immersiveengineering:ingot_silver"
    },
    {
      "matchItems":
        [
          "#forge:ingots/steel"
        ],
      "resultItems": "immersiveengineering:ingot_steel"
    },
    {
      "matchItems":
        [
          "#forge:ingots/electrum"
        ],
      "resultItems": "immersiveengineering:ingot_electrum"
    }
  ]);
  event.addJson("oei:replacements/nuggets.json", [
    {
      "matchItems":
        [
          "#forge:nuggets/lead"
        ],
      "resultItems": "mekanism:nugget_lead"
    },
    {
      "matchItems":
        [
          "#forge:nuggets/uranium"
        ],
      "resultItems": "mekanism:nugget_uranium"
    },
    {
      "matchItems":
        [
          "#forge:nuggets/silver"
        ],
      "resultItems": "immersiveengineering:nugget_silver"
    },
    {
      "matchItems":
        [
          "#forge:nuggets/steel"
        ],
      "resultItems": "immersiveengineering:nugget_steel"
    },
    {
      "matchItems":
        [
          "#forge:nuggets/electrum"
        ],
      "resultItems": "immersiveengineering:nugget_electrum"
    },
        {
      "matchItems":
        [
          "#forge:nuggets/copper"
        ],
      "resultItems": "create:copper_nugget"
    }
  ]);
  event.addJson("oei:replacements/plates.json", [
    {
      "matchItems":
        [
          "#forge:plates/copper"
        ],
      "resultItems": "create:copper_sheet"
    },
    {
      "matchItems":
        [
          "#forge:plates/iron"
        ],
      "resultItems": "create:iron_sheet"
    },
    {
      "matchItems":
        [
          "#forge:plates/gold"
        ],
      "resultItems": "create:golden_sheet"
    },
    {
      "matchItems":
        [
          "#forge:plates/electrum"
        ],
      "resultItems": "immersiveengineering:plate_electrum"
    }
  ]);
  event.addJson("oei:replacements/wires.json", [
    {
      "matchItems":
        [
          "#forge:wires/copper"
        ],
      "resultItems": "immersiveengineering:wire_copper"
    },
    {
      "matchItems":
        [
          "#forge:wires/electrum"
        ],
      "resultItems": "immersiveengineering:wire_electrum"
    }
  ]);
  event.addJson("oei:replacements/rods.json", [
    {
      "matchItems":
        [
          "#forge:rods/iron"
        ],
      "resultItems": "immersiveengineering:stick_iron"
    }
  ]);
  event.addJson("oei:replacements/dusts.json", [
  {
    "matchItems": [
      "#forge:dusts/copper"
    ],
    "resultItems": "mekanism:dust_copper"
  },
  {
    "matchItems": [
      "#forge:dusts/iron"
    ],
    "resultItems": "mekanism:dust_iron"
  },
  {
    "matchItems": [
      "#forge:dusts/steel"
    ],
    "resultItems": "mekanism:dust_steel"
  },
  {
    "matchItems": [
      "#forge:dusts/lead"
    ],
    "resultItems": "mekanism:dust_lead"
  },
  {
    "matchItems": [
      "#forge:dusts/uranium"
    ],
    "resultItems": "mekanism:dust_uranium"
  },
  {
    "matchItems": [
      "#forge:dusts/diamond"
    ],
    "resultItems": "mekanism:dust_diamond"
  },
  {
    "matchItems": [
      "#forge:dusts/gold"
    ],
    "resultItems": "mekanism:dust_gold"
  }
  ]);
  event.addJson("oei:replacements/fd_kc.json", [
  {
    "matchItems": [
      "farmersdelight:rice"
    ],
    "resultItems": "kaleidoscope_cookery:rice"
  },
  {
    "matchItems": [
      "farmersdelight:cooked_rice"
    ],
    "resultItems": "kaleidoscope_cookery:cooked_rice"
  },
  {
    "matchItems": [
      "kaleidoscope_cookery:rice_panicle"
    ],
    "resultItems": "farmersdelight:rice_panicle"
  },
  {
    "matchItems": [
      "farmersdelight:tomato_seeds"
    ],
    "resultItems": "kaleidoscope_cookery:tomato_seed"
  },
  {
    "matchItems": [
      "farmersdelight:tomato"
    ],
    "resultItems": "kaleidoscope_cookery:tomato"
  },
  {
    "matchItems": [
      "kaleidoscope_cookery:stove"
    ],
    "resultItems": "farmersdelight:stove"
  },
  {
    "matchItems": [
      "farmersdelight:fried_egg"
    ],
    "resultItems": "kaleidoscope_cookery:fried_egg"
  },
  {
    "matchItems": [
      "farmersdelight:mutton_chops"
    ],
    "resultItems": "kaleidoscope_cookery:cooked_lamb_chops"
  },
  {
    "matchItems": [
      "farmersdelight:cooked_mutton_chops"
    ],
    "resultItems": "kaleidoscope_cookery:raw_lamb_chops"
  },
    {
    "matchItems": [
      "farmersdelight:fried_rice"
    ],
    "resultItems": "kaleidoscope_cookery:delicious_egg_fried_rice"
  },
    {
    "matchItems": [
      "farmersdelight:cooked_mutton_chops"
    ],
    "resultItems": "kaleidoscope_cookery:raw_lamb_chops"
  },
      {
    "matchItems": [
      "farmersdelight:melon_juice"
    ],
    "resultItems": "legendarysurvivaloverhaul:melon_juice"
  },
      {
    "matchItems": [
      "farmersdelight:apple_cider"
    ],
    "resultItems": "legendarysurvivaloverhaul:apple_juice"
  }
]);
});