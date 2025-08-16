ServerEvents.tags('item', event => {
    // 矿物
    const materials = ['mithril', 'orichalcum', 'blue_steel', 'black_steel', 'red_steel'];
    materials.forEach(material => {
        event.add('forge:tools/paxel', `fallout:${material}_paxel`);
        event.add(`forge:plates/${material}`, `fallout:${material}_sheet`);
        event.add(`forge:ingots/${material}`, `fallout:${material}_ingot`);
        event.add(`forge:nuggets/${material}`, `fallout:${material}_nugget`);
        event.add('forge:plates', `fallout:${material}_sheet`);
        event.add('forge:ingots', `fallout:${material}_ingot`);
        event.add('forge:nuggets', `fallout:${material}_nugget`);
    });
//刀

    // 合并所有machine分类
    const machineTiers = [
        { tier: 't1_machine', machines: ['mekanismgenerators:bio_generator', 'mekanismgenerators:gas_burning_generator', 'mekanismgenerators:heat_generator', 'mekanismgenerators:solar_generator', 'mekanismgenerators:advanced_solar_generator', 'mekanism:pigment_extractor', 'mekanism:energized_smelter', 'mekanism:resistive_heater', 'mekanism:metallurgic_infuser', 'mekanism:seismic_vibrator', 'mekanism:precision_sawmill', 'mekanism:enrichment_chamber', 'mekanism:nutritional_liquifier', 'mekanism:fluidic_plenisher', 'mekanism:electric_pump'] },
        { tier: 't2_machine', machines: ['mekanismgenerators:rotational_complex', 'mekanism:painting_machine', 'mekanism:fuelwood_heater', 'mekanism:chemical_oxidizer', 'mekanism:oredictionificator', 'mekanism:chemical_infuser', 'mekanism:electrolytic_separator', 'mekanism:osmium_compressor', 'mekanism:pressurized_reaction_chamber', 'mekanism:formulaic_assemblicator', 'mekanism:personal_chest', 'mekanism:rotary_condensentrator'] },
        { tier: 't3_machine', machines: ['mekanismgenerators:control_rod_assembly', 'mekanism:security_desk', 'mekanism:combiner', 'mekanism:laser', 'mekanism:laser_tractor_beam', 'mekanism:chemical_injection_chamber', 'mekanism:solar_neutron_activator', 'mekanism:laser_amplifier'] },
        { tier: 't4_machine', machines: ['mekanismgenerators:fusion_reactor_controller', 'mekanism:sps_casing', 'mekanism:sps_port', 'mekanism:chemical_crystallizer', 'mekanism:chemical_washer', 'mekanism:chemical_dissolution_chamber', 'mekanism:dimensional_stabilizer', 'mekanism:teleporter_frame', 'mekanism:isotopic_centrifuge'] },
        { tier: 't5_machine', machines: ['mekanism:antiprotonic_nucleosynthesizer', 'mekanism:modification_station', 'mekanism:qio_drive_array', 'mekanism:qio_exporter', 'mekanism:qio_importer', 'mekanism:digital_miner', 'mekanism:teleporter', 'mekanism:quantum_entangloporter'] }
    ];

    machineTiers.forEach(entry => {
        const tier = entry.tier;
        const machines = entry.machines;
        machines.forEach(machine => {
            event.add(`mekanism:${tier}`, machine);
        });
    });

    // meka工厂循环优化
    const factorys = [
        'smelting_factory', 'enriching_factory', 'crushing_factory', 'compressing_factory',
        'purifying_factory', 'injecting_factory', 'infusing_factory', 'sawing_factory', 'combining_factory'
    ];
    const factoryTiers = ['basic', 'advanced', 'elite', 'ultimate'];
    factoryTiers.forEach((tier, index) => {
        factorys.forEach(factory => {
            event.add(`mekanism:t${index + 1}_machine`, `mekanism:${tier}_${factory}`);
        });
    });


    // 杂项
    event.add('umvuthana:mask', ['mowziesmobs:umvuthana_mask_fear','mowziesmobs:umvuthana_mask_fury','mowziesmobs:umvuthana_mask_faith','mowziesmobs:umvuthana_mask_bliss','mowziesmobs:umvuthana_mask_misery','mowziesmobs:umvuthana_mask_rage']);
    event.add('forge:investigatable/t3', ['cataclysm:witherite_ingot', 'cataclysm:ancient_metal_ingot', 'cataclysm:ignitium_ingot', 'cataclysm:cursium_ingot']);
    event.add('forge:investigatable/t2', ['alexscaves:immortal_embryo', 'alexscaves:tectonic_shard']);
    event.add('forge:investigatable/t1', ['iceandfire:fire_dragon_heart', 'iceandfire:ice_dragon_heart', 'iceandfire:lightning_dragon_heart']);
    event.add('forge:ingots/black_steel', ['cataclysm:black_steel_ingot']);
    event.add('forge:ingots', ['cataclysm:black_steel_ingot']);
    event.add('forge:nuggets', ['cataclysm:black_steel_nugget']);
    event.add('forge:nuggets/black_steel', ['cataclysm:black_steel_nugget']);
    event.add('forge:dusts/red_steel', ['fallout:red_steel_dust']);
    event.add('forge:dusts', ['fallout:red_steel_dust','fallout:blue_steel_dust']);
    event.add('forge:dusts/blue_steel', ['fallout:blue_steel_dust']);
    event.add('forge:wafer', ['fallout:silicon_wafer', 'fallout:mithril_wafer', 'fallout:orichalcum_wafer']);
    event.add('forge:block/legend', ['fallout:mithril_ingot', 'fallout:orichalcum_ingot']);
    event.add('forge:plates/legend', ['fallout:mithril_sheet', 'fallout:orichalcum_sheet']);
    event.add('forge:ores/mithril', 'fallout:mithril_ore')
    event.add('forge:ores/orichalcum', 'fallout:orichalcum_ore')
    event.add('forge:tools/paxel', ['fallout:brass_paxel','fallout:bronze_paxel','fallout:copper_paxel']);
    event.add('forge:plates/brass', ['fallout:bronze_sheet']);
    event.add('forge:plates', ['fallout:bronze_sheet','fallout:tin_sheet']);
    event.add('forge:plates/tin', ['fallout:tin_sheet']);
    event.add('create:blaze_burner_fuel/special', ['immersiveengineering:coal_coke']);
    event.add('forge:t1', ['fallout:steam','fallout:primordial']);
    event.add('forge:t2', ['fallout:power','fallout:adaptation']);
    event.add('forge:t3', ['fallout:atom','fallout:assimilation']);
    event.add('mekanism:atomic_disassembler', ['mekanism:atomic_disassembler']);
});
