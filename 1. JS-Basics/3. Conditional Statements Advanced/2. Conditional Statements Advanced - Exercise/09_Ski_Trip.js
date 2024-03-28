function skiTrip(input) {

    let daysTostay = Number(input[0]);
    let typeOfRoom = input[1];
    let evaluation = input[2];

    let priceForNight = 0;
    let discount = 0;

    let nights = daysTostay - 1;
    
    switch (typeOfRoom) {
        case "room for one person":
            priceForNight = 18;
            if (nights < 10) {
                discount = priceForNight * nights;
            } else if (nights >= 10 && nights <= 15) {
                discount = priceForNight * nights;
            } else if (nights > 15) {
                discount = priceForNight * nights;
            }
            break;
        case "apartment":
            priceForNight = 25;
            if (nights < 10) {
                discount = (priceForNight * nights) * 0.70;
            } else if (nights >= 10 && nights <= 15) {
                discount = (priceForNight * nights) * 0.65;
            } else if (nights > 15) {
                discount = (priceForNight * nights) * 0.50;
            }
            break;
        case "president apartment":
            priceForNight = 35;
            if (nights < 10) {
                discount = (priceForNight * nights) * 0.90;
            } else if (nights >= 10 && nights <= 15) {
                discount = (priceForNight * nights) * 0.85;
            } else if (nights > 15) {
                discount = (priceForNight * nights) * 0.80;
            }
            break;

    }

    if (evaluation === `positive`) {
        discount *= 1.25;
    } else if (evaluation === `negative`) {
        discount *= 0.9;
    }

    console.log(`${discount.toFixed(2)}`);

}
skiTrip(["2", "apartment", "positive"]);