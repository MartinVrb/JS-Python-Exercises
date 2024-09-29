function inventory(arr) {
    let heroes = [];

    for (let heroInfo of arr) {
        let [heroName, heroLevel, heroItems] = heroInfo.split(" / ");
        heroLevel = Number(heroLevel);

        let heroObj = { name: heroName, level: heroLevel, items: heroItems };
        heroes.push(heroObj);
    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (let heroObj of sortedHeroes) {
        console.log(`Hero: ${heroObj.name}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);
    }
}
inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);