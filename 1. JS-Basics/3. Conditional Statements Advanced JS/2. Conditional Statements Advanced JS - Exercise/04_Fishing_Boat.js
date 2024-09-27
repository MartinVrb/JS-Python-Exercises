function fishingBoat(input) {

    let groupBudget = Number(input[0]);
    let season = input[1];
    let fishermens = Number(input[2]);

    let vesselRent = 0;

    switch (season) {
        case "Spring":
            vesselRent = 3000;
            break;
        case "Summer":
        case "Autumn":
            vesselRent = 4200;
            break;
        case "Winter":
            vesselRent = 2600;
            break;
    }

    let discount = 0;

    if (fishermens <= 6) {
        discount = vesselRent * 0.9;
    } else if (fishermens <= 11) {
        discount = vesselRent * 0.85;
    } else if (fishermens >= 12) {
        discount = vesselRent * 0.75;
    }

    if (fishermens % 2 === 0 && season !== "Autumn") {
        discount *= 0.95
    }

    if(groupBudget >= discount){
        let moneyLeft = groupBudget - discount;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else{
        let moneyNeeded = discount - groupBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }

}
fishingBoat(["3600","Autumn","6"]);