
StartupEvents.registry('mekanism:slurry', event => {
  event.create('dirty_mithril','dirty').color(0x3e4551);
  event.create('clean_mithril','clean').color(0xbec2d5)
  event.create('dirty_orichalcum','dirty').color(0x892d48)
  event.create('clean_orichalcum','clean').color(0xffa4f8)
});
// StartupEvents.registry('mekanism:gas', event => {
//     //注册气体（id，颜色，显示的名字）
//     event.create('flux_gas').color(0x8255e5).displayName('福鲁伊克斯气体')
// })