function tennisRanklist(input) {

    let participatedTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let points = 0;
    let wins = 0;


    for (let i = 2; i < input.length; i++) {
        let competition = input[i];

        if (competition === `W`) {
            points += 2000;
            wins++
        } else if (competition === `F`) {
            points += 1200;
        } else if (competition === `SF`) {
            points += 720;
        }
    }

    points += startingPoints;

    let averagePoints = ((points - startingPoints)  / participatedTournaments);

    let tournamentsWon = ( wins / participatedTournaments) * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${tournamentsWon.toFixed(2)}%`);

}
tennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"]);