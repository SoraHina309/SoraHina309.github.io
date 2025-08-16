FeatureEvents.configured(event => {
    // 创建配置特性，定义矿物生成逻辑
    event.create("fallout:configured_orichalcum_ore")
        .type("minecraft:ore")
        .oreConfiguration(properties => {
            properties
                .size(3) // 每个矿脉的大小
                // .addTarget("#minecraft:stone_ore_replaceables", "fallout:deepslate_orichalcum_ore") // 替换石头生成矿石
                .addTarget("#minecraft:deepslate_ore_replaceables", "fallout:deepslate_orichalcum_ore");
        });
    event.create("fallout:configured_mithril_ore")
        .type("minecraft:ore")
        .oreConfiguration(properties => {
            properties
                .size(3) // Mithril 每个矿脉的大小
                // .addTarget("#minecraft:stone_ore_replaceables", "fallout:deepslate_mithril_ore") // 替换石头为 Mithril
                .addTarget("#minecraft:deepslate_ore_replaceables", "fallout:deepslate_mithril_ore"); // 替换深板岩为 Mithril
        });
});
FeatureEvents.placed(event => {
    let modifiers = event.getPlacementModifiers();

    // Orichalcum 放置特性
    event.create("fallout:placed_orichalcum_ore")
        .feature("fallout:configured_orichalcum_ore")
        .placement(
            modifiers.count(1), // 每区块生成 1 个矿脉
            modifiers.inSquare(),
            modifiers.heightRangeUniform(VerticalAnchor.aboveBottom(10), VerticalAnchor.aboveBottom(30)), // 高度范围 10-30
            modifiers.biomeFilter()
        );

    // Mithril 放置特性
    event.create("fallout:placed_mithril_ore")
        .feature("fallout:configured_mithril_ore")
        .placement(
            modifiers.count(1), // 每区块生成 1 个矿脉
            modifiers.inSquare(),
            modifiers.heightRangeUniform(VerticalAnchor.aboveBottom(20), VerticalAnchor.aboveBottom(40)), // 高度范围 20-40
            modifiers.biomeFilter()
        );
});

FeatureEvents.biomeModifier(event => {
    // 将矿石特性绑定到地下矿石生成阶段
    event.addFeatures("#minecraft:is_overworld", "fallout:placed_orichalcum_ore", "underground_ores");
    event.addFeatures("#minecraft:is_overworld", "fallout:placed_mithril_ore", "underground_ores");
});

//矿物掉落
ServerEvents.blockLootTables(e=>{
    e.modifyBlock("fallout:deepslate_orichalcum_ore",loot=>{
        let pool = [{
            "type":"minecraft:item",
            "name":"fallout:raw_orichalcum"
        }]
        let arr = loot.pools.get(0).asJsonObject.get("entries").asJsonArray
        arr.addAll(pool)
    });
    e.modifyBlock("fallout:deepslate_mithril_ore",loot=>{
        let pool = [{
            "type":"minecraft:item",
            "name":"fallout:raw_mithril"
        }]
        let arr = loot.pools.get(0).asJsonObject.get("entries").asJsonArray
        arr.addAll(pool)
    });
});


