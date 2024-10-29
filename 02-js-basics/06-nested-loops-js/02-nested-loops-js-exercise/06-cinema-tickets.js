function cinemaTickets(input) {

    let command = input[0];
    let index = 1;

    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    while (command !== "Finish") {
        let movieName = command;

        let totalPlaces = Number(input[index]);
        index++;

        let placesTaken = 0;

        let command1 = input[index];
        index++;

        while (command1 !== "End") {

            let typeOfTickets = command1;

            if (typeOfTickets === "student") {
                studentTickets++;

            } else if (typeOfTickets === "standard") {
                standardTickets++;

            } else if (typeOfTickets === "kid") {
                kidsTickets++;
            }

            placesTaken++;

            if (placesTaken === totalPlaces) {
                break;
            }

            command1 = input[index];
            index++;
        }

        let percentTaken = (placesTaken / totalPlaces) * 100;
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let totalTickets = studentTickets + standardTickets + kidsTickets;
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    let standardTicketsPercent = (standardTickets / totalTickets) * 100;
    let kidsTicketsPercent = (kidsTickets / totalTickets) * 100;

    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);

    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);

    console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);