ItemEvents.tooltip(event => {
  event.add(['fallout:un_full_bounce'], "§b右键以清空战术背心，获得内部的武器与弹药")
  
})

/** @type {SetsTooltipInjectHelper_} */
const TooltipHelper = ContentPacks.getShared('client', 'com.whisent.seteffects.tooltip')

TooltipHelper.injectShiftTooltipFunc('un_armor_bounce', (event, item, advance, text, set, count) => {
  text.add(2, "§b你接受的训练使你穿戴胸挂后持枪能对敌人开枪射击造成的增加15%。")
})

TooltipHelper.injectShiftTooltipFunc('military_armor_bounce', (event, item, advance, text, set, count) => {
  text.add(2, "§b久经沙场使你穿戴胸挂后持枪能对敌人开枪射击造成的伤害增加25%。")
})

TooltipHelper.injectShiftTooltipFunc('heavy_armor_bounce', (event, item, advance, text, set, count) => {
  text.add(2, "§b多次出生入死的经历使你穿戴胸挂后持枪能对敌人开枪射击造成的增加35%。")
})

TooltipHelper.injectShiftTooltipFunc('radioactive_warding_bag', (event, item, advance, text, set, count) => {
  text.add(2, "§b一种特殊防辐射布料制成的橙色密封袋，内部装有安全放射源。能释放令昆虫恐惧逃散的辐射波，但对人体完全无害。请勿拆解内部放射源。")
})

TooltipHelper.injectShiftTooltipFunc('parasitic_skin', (event, item, advance, text, set, count) => {
  text.add(2, "§5它看起来跟普通的§c画皮§5不一样，它仍然能§c说话§5并且§c保有理智§5 ")
})

TooltipHelper.injectShiftTooltipFunc('forbidden_fruit', (event, item, advance, text, set, count) => {
  text.add(2, "§4由鲜血血、金苹果与幽匿果汁在世界之底淬炼而成的完美结晶");
  text.add(3, "§5经过古代机关净化的它，赐予你永恒的生命力而不再有副作用");
  text.add(4, "§d现在，你已真正君临天下");
});

// fallout:champion_destruction
TooltipHelper.injectShiftTooltipFunc('champion_destruction', (event, item, advance, text, set, count) => {
  text.add(2, "§5暴烈的能量在血脉中奔涌，赋予你摧枯拉朽的破坏力");
  text.add(3, "§5但这股力量也在灼烧你的躯体，削弱你的防御");
});

// fallout:champion_haste
TooltipHelper.injectShiftTooltipFunc('champion_haste', (event, item, advance, text, set, count) => {
  text.add(2, "§5世界在你眼中变得缓慢，每一步都跨越惊人的距离");
  text.add(3, "§5但要当心，过快的速度可能让你付出沉重代价");
});

// fallout:champion_suppression
TooltipHelper.injectShiftTooltipFunc('champion_suppression', (event, item, advance, text, set, count) => {
  text.add(2, "§5你的肉体开始拒绝一切外界干涉，连最基本的生理需求都被抑制——不再需要饮水，不再畏惧寒暑。")
  text.add(3, "§5但这份保护是残酷的等价交换：所有伤害降低50%，如同被无形的枷锁束缚。")
})

// fallout:champion_vitality
TooltipHelper.injectShiftTooltipFunc('champion_vitality', (event, item, advance, text, set, count) => {
  text.add(2, "§5你的血肉获得了近乎永动的活性，伤口转瞬愈合，生命力澎湃不息");
  text.add(3, "§5但这狂暴的新陈代谢让你时刻饱受饥渴折磨，护甲在血肉蠕动下化为齑粉");
  text.add(4, "§8（你能感受到每个细胞都在疯狂分裂重组）");
});

// fallout:champion_domination
TooltipHelper.injectShiftTooltipFunc('champion_domination', (event, item, advance, text, set, count) => {
  text.add(2, "§5力量、速度、回复以及防御，异种力量的结晶在此刻结合。")
  text.add(3, "§5猎杀了如此多强大怪物的你，拥有了控制它们力量的权利。")
  text.add(4, "§5可惜，这终究是来自怪物的力量……")
})
