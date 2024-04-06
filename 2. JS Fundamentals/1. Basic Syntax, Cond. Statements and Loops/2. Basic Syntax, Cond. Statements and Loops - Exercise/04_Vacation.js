function vacation(people, typeOfTheGroup, day) {

    let pricePerPerson = 0;

    switch (day) {
        case "Friday":
            switch (typeOfTheGroup) {
                case "Students":
                    pricePerPerson = 8.45;
                    break;

                case "Business":
                    pricePerPerson = 10.90;
                    break;

                case "Regular":
                    pricePerPerson = 15;
                    break;
            }
            break;

        case "Saturday":
            switch (typeOfTheGroup) {
                case "Students":
                    pricePerPerson = 9.80;
                    break;

                case "Business":
                    pricePerPerson = 15.60;
                    break;

                case "Regular":
                    pricePerPerson = 20;
                    break;
            }
            break;

        case "Sunday":
            switch (typeOfTheGroup) {
                case "Students":
                    pricePerPerson = 10.46;
                    break;

                case "Business":
                    pricePerPerson = 16;
                    break;

                case "Regular":
                    pricePerPerson = 22.50;
                    break;
            }
            break;

    }

    let totalPrice = pricePerPerson * people;

    if (people >= 30 && typeOfTheGroup === "Students") {

        totalPrice *= 0.85;

    } else if (people >= 100 && typeOfTheGroup === "Business") {

        let freePeople = 10 * pricePerPerson;
        totalPrice -= freePeople;

    } else if (people >= 10 && people <= 20 && typeOfTheGroup === "Regular") {

        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(110,

    "Business",

    "Saturday");