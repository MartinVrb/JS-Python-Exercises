function dungeonestDark(array) {

    let roomsInfo = array[0];
    let rooms = roomsInfo.split(`|`);

    let health = 100;
    let coins = 0;
    let allCoins = 0;

    let counter = 0;

    let healingNumber = 0;

    let monstersName = ``;
    let attackOfTheMonster = 0;

    for (let room = 0; room < rooms.length; room++) {

        let bothRooms = rooms[room];
        counter++;
        let newArray = bothRooms.split(` `);

        for (let index = 0; index < newArray.length; index++) {

            let curElement = newArray[index];
            let curElementNum = Number(newArray[index + 1]);

            switch (curElement) {
                case "potion":

                    if (health <= 100) {
                        healingNumber = curElementNum;
                        let newHealth = 100 - health;
                        health += healingNumber;

                        if (health > 100) {
                            healingNumber = newHealth;
                            health = 100;
                        }
                    }
                    console.log(`You healed for ${healingNumber} hp.`);
                    console.log(`Current health: ${health} hp.`);
                    break;

                case "chest":
                    coins = curElementNum;
                    allCoins += coins;
                    console.log(`You found ${coins} coins.`);
                    break;

                default:
                    monstersName = curElement;
                    attackOfTheMonster = curElementNum;
                    health -= attackOfTheMonster;

                    if (health > 0) {
                        console.log(`You slayed ${monstersName}.`);
                    } else {
                        console.log(`You died! Killed by ${monstersName}.`);
                        console.log(`Best room: ${counter}`);
                        return;
                    }
            }
            index++;
        }
        index = 0;
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${allCoins}`);
        console.log(`Health: ${health}`);

    }

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);