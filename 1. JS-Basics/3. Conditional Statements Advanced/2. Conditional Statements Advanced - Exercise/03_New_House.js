function newHouse(input) {

    let flowerType = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);

    let fullPrice = 0;
    let priceForOne = 0;


    switch (flowerType) {
        case "Roses":
            priceForOne = 5;
            fullPrice = quantity * priceForOne;
            if (quantity > 80) {
                fullPrice *= 0.90;
            }
            break;

        case "Dahlias":
            priceForOne = 3.80;
            fullPrice = quantity * priceForOne;
            if (quantity > 90) {
                fullPrice *= 0.85;
            }
            break;

        case "Tulips":
            priceForOne = 2.80;
            fullPrice = quantity * priceForOne;
            if (quantity > 80) {
                fullPrice *= 0.85;
            }
            break;

        case "Narcissus":
            priceForOne = 3;
            fullPrice = quantity * priceForOne;
            if (quantity < 120) {
                fullPrice *= 1.15;
            }
            break;

        case "Gladiolus":
            priceForOne = 2.50;
            fullPrice = quantity * priceForOne;
            if (quantity < 80) {
                fullPrice *= 1.20;
            }
            break;
    }

    if (budget >= fullPrice) {
        let moneyLeft = budget - fullPrice;
        console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < fullPrice) {
        let moneyNeeded = fullPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }

}
newHouse(["Narcissus", "119", "360"])