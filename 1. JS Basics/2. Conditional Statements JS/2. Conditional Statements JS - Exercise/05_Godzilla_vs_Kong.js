function godzillaVsKong(input) {

    let filmBudget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let costumesPricePerActor = Number(input[2]);

    let decorPrice = filmBudget * 0.10;

    let costumesPrice = actorsCount * costumesPricePerActor;

    if (actorsCount > 150) {
        costumesPrice *= 0.90;
    }

    let totalPrice = decorPrice + costumesPrice;

    if (filmBudget >= totalPrice) {
        let moneyLeft = filmBudget - totalPrice;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }else{
        let moneyNeeded = totalPrice - filmBudget;
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
        
}
godzillaVsKong(["20000", "120", "55.5"]);
