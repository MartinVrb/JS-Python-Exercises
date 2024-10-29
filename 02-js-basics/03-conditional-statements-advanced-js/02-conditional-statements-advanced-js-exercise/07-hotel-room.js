function hotelroom(input) {

    let month = input[0];
    let overnightNumber = Number(input[1]);

    let studioPriceForNight = 0;
    let apartmentPriceForNight = 0;

    switch (month) {
        case "May":
        case "October":
            studioPriceForNight = 50;
            apartmentPriceForNight = 65;
            if (overnightNumber > 7 && overnightNumber < 14) {
                studioPriceForNight *= 0.95;
            } else if (overnightNumber > 14) {
                studioPriceForNight *= 0.70;
            }

            if (overnightNumber > 14) {
                apartmentPriceForNight *= 0.9;
            }
            break;
        case "June":
        case "September":
            studioPriceForNight = 75.20;
            apartmentPriceForNight = 68.70;
            if (overnightNumber > 14) {
                studioPriceForNight *= 0.80;
            }

            if (overnightNumber > 14) {
                apartmentPriceForNight *= 0.9;
            }
            break;
        case "July":
        case "August":
            studioPriceForNight = 76;
            apartmentPriceForNight = 77;
            if (overnightNumber > 14) {
                apartmentPriceForNight *= 0.9;
            }
            break;
    }

    console.log(`Apartment: ${(overnightNumber * apartmentPriceForNight).toFixed(2)} lv.`);
    console.log(`Studio: ${(overnightNumber * studioPriceForNight).toFixed(2)} lv.`);

}
hotelroom(["June", "14"])