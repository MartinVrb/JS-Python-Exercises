function legendaryFarming(input) {
    let arr = input.split(" ");

    let keyMaterialQtys = { shards: 0, fragments: 0, motes: 0 };
    let junkMaterialsQtys = {};

    let legendaries = { shards: "Shadowmourne", fragments: "Valanyr", motes: "Dragonwrath" }

    for (let index = 0; index < arr.length; index += 2) {
        let qty = Number(arr[index]);
        let material = arr[index + 1].toLowerCase();

        if (material in keyMaterialQtys) {
            keyMaterialQtys[material] += qty;

            if (keyMaterialQtys[material] >= 250) {
                let legegendary = legendaries[material];
                console.log(`${legegendary} obtained!`);
                keyMaterialQtys[material] -= 250;
                break;
            }
        } else {
            if (material in junkMaterialsQtys) {
                junkMaterialsQtys[material] += qty;
            } else {
                junkMaterialsQtys[material] = qty;
            }
        }
    }

    let keyMaterialsEntries = Object.entries(keyMaterialQtys).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let junkMaterialsEntries = Object.entries(junkMaterialsQtys).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [keyMaterial, qty] of keyMaterialsEntries) {
        console.log(`${keyMaterial}: ${qty}`);
    }

    for (let [junkMaterial, qty] of junkMaterialsEntries) {
        console.log(`${junkMaterial}: ${qty}`);
    }

}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')