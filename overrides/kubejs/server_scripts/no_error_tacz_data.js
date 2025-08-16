TaCZServerEvents.gunDataLoad((event) => {
    const id = event.getId().toString();

if (id === "tacz:spr15hb_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 22;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":22},{"distance":120,"damage":22.5},{"distance":"infinite","damage":20.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:springfield1873_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'qkl:16mm';
    json.bullet.damage = 34;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.95;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":34},{"distance":90,"damage":30},{"distance":120,"damage":24},{"distance":"infinite","damage":20}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:minigun_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 12.7;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 1.27;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":12.7},{"distance":55,"damage":13},{"distance":"infinite","damage":11.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:ak47_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 21;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":25,"damage":21},{"distance":55,"damage":17},{"distance":"infinite","damage":14.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 19;
    json.bullet.extra_damage.armor_ignore = 0.1;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":19},{"distance":72,"damage":18},{"distance":50,"damage":16.5},{"distance":"infinite","damage":16.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_amnesty_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 35;
    json.bullet.extra_damage.armor_ignore = 0.20;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":35},{"distance":72,"damage":32},{"distance":50,"damage":30},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_reliable_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 35;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":35},{"distance":72,"damage":32},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}


if (id === "cyber_armorer:overture_crash_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 37;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":37},{"distance":72,"damage":32},{"distance":50,"damage":30},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_archangel_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 37.5;
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":37.5},{"distance":72,"damage":32},{"distance":50,"damage":30},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_rosco_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 39.5;
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":39.5},{"distance":72,"damage":32},{"distance":50,"damage":30},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

})