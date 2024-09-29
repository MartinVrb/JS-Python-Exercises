function cake(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);

    let allPieces = length * width;

    let pieces = 0;
    let index = 2;

    let command = input[index];

    while (command !== "STOP") {

        command = Number(input[index]);

        pieces += command;

        if (pieces > allPieces) {
            let neededPiecess = pieces - allPieces
            console.log(`No more cake left! You need ${neededPiecess} pieces more.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "STOP") {
        let piecesLeft = allPieces - pieces;
        console.log(`${piecesLeft} pieces are left.`);
    }

}
cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"])