//priority:0
//import Shared
/**
 * @type {SetEffects_}
 */
const SetEffects = ContentPacks.getShared('server', 'com.whisent.seteffects')
const SetEffectsDataUpdater = SetEffects.dataUpdater
const SetRangeManager = SetEffects.setRangeManager
/** @type {SetEventJS} */
const SetEvents = SetEffects.setEvents

let uuid = UUID.fromString('DCB7B9C9-0040-3F8B-30B0-E06A17236678')

SetEvents.registry(event => {

  
  event.create(["fallout:wildcat"], "wildcat")
    .setName("野猫·电流增幅器")
    .addPotionEffect("irons_spellbooks:charged", 2, false, false)
    .setCounts(1);

  event.create(["fallout:radioactive_warding_bag"], "radioactive_warding_bag")
    .setName("防蚊袋")
    .addPotionEffect("alexsmobs:mosquito_repellent", 0, false, false)
    .addPotionEffect("alexsmobs:bug_pheromones", 0, false, false)
    .setCounts(1);

  event.create(["fallout:parasite_skin"], "parasite_skin")
    .setName("原初画皮")
    .addPotionEffect("minecraft:conduit_power", 0, false, false)
    .addPotionEffect("minecraft:regeneration", 0, false, false)
    .addPotionEffect("minecraft:dolphins_grace", 0, false, false)
    .addPotionEffect("legendarysurvivaloverhaul:cold_resistance", 0, false, false)
    .addPotionEffect("alexscaves:deepsight", 0, false, false)
    .setCounts(1);

  event.create(["fallout:parasitic_skin"], "parasitic_skin")
    .setName("画皮共生体")
    .addPotionEffect("minecraft:conduit_power", 0, false, false)
    .addPotionEffect("minecraft:regeneration", 3, false, false)
    .addPotionEffect("minecraft:dolphins_grace", 2, false, false)
    .addPotionEffect("legendarysurvivaloverhaul:cold_resistance", 5, false, false)
    .addPotionEffect("alexscaves:deepsight", 0, false, false)
    .setCounts(1);

  event.create(["fallout:forbidden_fruit"], "forbidden_fruit")
    .setName("禁忌之果")
    .addPotionEffect("minecraft:regeneration", 0, false, false)
    .addPotionEffect("minecraft:resistance", 0, false, false)
    .addPotionEffect("minecraft:fire_resistance", 0, false, false)
    .setCounts(1);

  event.create(["fallout:champion_destruction"], "champion_destruction")
    .setName("冠军之魂 融毁")
    .addPotionEffect("legendarysurvivaloverhaul:heat_thirst", 0, false, false)
    .addPotionEffect("cataclysm:blazing_brand", 0, false, false)
    .setCounts(1);

  event.create(["fallout:champion_haste"], "champion_haste")
    .setName("冠军之魂 急速")
    .addPotionEffect("legendarysurvivaloverhaul:hard_falling", 10, false, false)
    .addPotionEffect("minecraft:jump_boost", 4, false, false)
    .setCounts(1);

  event.create(["fallout:champion_suppression"], "champion_suppression")
    .setName("冠军之魂 抑制")
    .addPotionEffect("minecraft:resistance", 1, false, false)
    .addPotionEffect("legendarysurvivaloverhaul:hydration_fill", 0, false, false)
    .addPotionEffect("legendarysurvivaloverhaul:temperature_immunity", 0, false, false)
    .setCounts(1);

  event.create(["fallout:champion_vitality"], "champion_vitality")
    .setName("冠军之魂 活力")
    .addPotionEffect("minecraft:regeneration", 1, false, false)
    .addPotionEffect("minecraft:hunger", 0, false, false)
    .addPotionEffect("legendarysurvivaloverhaul:thirst", 0, false, false)
    .setCounts(1);

  event.create(["fallout:champion_domination"], "champion_domination")
    .setName("冠军之魂统御")
    .addPotionEffect("minecraft:conduit_power", 0, false, false)
    .addPotionEffect("minecraft:regeneration", 1, false, false)
    .addPotionEffect("minecraft:dolphins_grace", 0, false, false)
    .addPotionEffect("minecraft:jump_boost", 1, false, false)
    .addPotionEffect("legendarysurvivaloverhaul:temperature_immunity", 0, false, false)
    .addPotionEffect("legendarysurvivaloverhaul:hydration_fill", 0, false, false)
    .addPotionEffect("farmersdelight:comfort", 0, false, false)
    .addPotionEffect("farmersdelight:nourishment", 0, false, false)
    .addPotionEffect("minecraft:resistance", 1, false, false)
    .addPotionEffect("minecraft:fire_resistance", 0, false, false)
    .addPotionEffect("alexscaves:deepsight", 0, false, false)
    .setCounts(1);

  // jokey_2：-4生命，+5%速，+0.12跳跃，+0.025攻，+0.5热抗
  event.create(["fallout:jokey_2", "fallout:joker_hammer"], "jokey_2")
    .setName("小丑")
    .setCounts(2)
    .addAttribute("minecraft:generic.max_health", UUID.fromString("9a01b2d1-0001-4a00-a1b2-000000000001"), 4.0, "addition")
    .addAttribute("minecraft:generic.movement_speed", UUID.fromString("9a01b2d1-0002-4a00-a1b2-000000000002"), 0.05, "multiply_base")
    .addAttribute("forge:entity_gravity", UUID.fromString("9a01b2d1-0003-4a00-a1b2-000000000003"), -0.12, "multiply_base")
    .addAttribute("minecraft:generic.attack_damage", UUID.fromString("9a01b2d1-00f6-4a00-a1b2-000000000006"), 0.025, "multiply_base")

  // jokey_3：-8生命，+10%速，+0.24跳，+0.05攻，1.5冷抗
  event.create(["fallout:jokey_3", "fallout:reinbow_joker_hammer"], "jokey_3")
    .setName("快乐小丑")
    .setCounts(2)
    .addAttribute("minecraft:generic.max_health", UUID.fromString("9a01b2d1-0004-4a00-a1b2-000000000004"), 8.0, "addition")
    .addAttribute("minecraft:generic.movement_speed", UUID.fromString("9a01b2d1-0005-4a00-a1b2-000000000005"), 0.10, "multiply_base")
    .addAttribute("forge:entity_gravity", UUID.fromString("9a01b2d1-0006-4a00-a1b2-000000000006"), -0.24, "multiply_base")
    .addAttribute("minecraft:generic.attack_damage", UUID.fromString("9a01b2d1-00f6-4a00-a1b2-000000000006"), 0.05, "multiply_base")

  // jokey_4：-9生命，+15%速，+0.36跳，+0.15攻，1.0耐热
  event.create(["fallout:jokey_4", "fallout:reinbow_joker_hammer"], "jokey_4")
    .setName("狂喜小丑")
    .setCounts(2).addAttribute("minecraft:generic.max_health", UUID.fromString("9a01b2d1-0007-4a00-a1b2-000000000007"), 9.0, "addition")
    .addAttribute("minecraft:generic.movement_speed", UUID.fromString("9a01b2d1-0008-4a00-a1b2-000000000008"), 0.15, "multiply_base")
    .addAttribute("forge:entity_gravity", UUID.fromString("9a01b2d1-0009-4a00-a1b2-000000000009"), -0.36, "multiply_base")
    .addAttribute("minecraft:generic.attack_damage", UUID.fromString("9a01b2d1-00f6-4a00-a1b2-000000000006"), 0.15, "multiply_base")

  event.create(["fallout:un_armor_bounce", "tacz:modern_kinetic_gun"], "un_armor")
    .setName("维和部队")
    .setCounts(2)
    .addAttribute("gunsmithlib:bullet_damage", UUID.fromString("9a01b2d1-00f7-4a00-a1b2-000000000006"), 0.15, "multiply_base")

  event.create(["fallout:military_armor_bounce", "tacz:modern_kinetic_gun"], "military_armor")
    .setName("步兵")
    .setCounts(2)
    .addAttribute("gunsmithlib:bullet_damage", UUID.fromString("9a01b2d1-00f8-4a00-a1b2-000000000006"), 0.25, "multiply_base")

  event.create(["fallout:heavy_armor_bounce", "tacz:modern_kinetic_gun"], "heavy_armor")
    .setName("重装步兵")
    .setCounts(2)
    .addAttribute("gunsmithlib:bullet_damage", UUID.fromString("9a01b2d1-00f9-4a00-a1b2-000000000006"), 0.35, "multiply_base")
})

// ✅ 启用所有槽位
SetRangeManager.all()

// ✅ 正确地为每个物品添加两个槽位的黑名单：weapon 和 armor
const items = [
  "fallout:parasitic_skin",
  "fallout:champion_destruction",
  "fallout:champion_haste",
  "fallout:champion_suppression",
  "fallout:champion_vitality",
  "fallout:champion_domination",
  "fallout:wildcat",
  "fallout:radioactive_warding_bag",
  "fallout:parasite_skin",
  "fallout:forbidden_fruit",
]

for (const id of items) {
  SetRangeManager.addBlacklist(id, "weapon")
  SetRangeManager.addBlacklist(id, "armor")
}



