function toyShop(input) {

    let excursionPrice = Number(input[0]);

    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesPrice = puzzles * 2.60;
    let talkingDollsPrice = talkingDolls * 3;
    let teddyBearsPrice = teddyBears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;

    let allToysNumber = puzzles + talkingDolls + teddyBears + minions + trucks;

    let allToysPrice = puzzlesPrice + talkingDollsPrice + teddyBearsPrice + minionsPrice + trucksPrice;


    if(allToysNumber >= 50){ 
        allToysPrice *= 0.75;
    }

    allToysPrice *= 0.90;

    if(allToysPrice >= excursionPrice){
        let moneyLeft = allToysPrice - excursionPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else{
        let moneyNeeded = excursionPrice - allToysPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);