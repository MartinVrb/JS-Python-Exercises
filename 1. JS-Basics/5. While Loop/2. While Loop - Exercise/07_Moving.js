function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let volume = width * length * height;

    let index = 3;

    let boxesSpace = 0;

    let command = input[index];

    while (command !== "Done") {

        command = Number(input[index]);

        boxesSpace += command;

        if (boxesSpace > volume) {
            let metersNeeded = boxesSpace - volume;
            console.log(`No more free space! You need ${metersNeeded} Cubic meters more.`);
            break;
        }

        index++;
        command = input[index];

    }

    if (command === "Done" && volume > boxesSpace) {
        let freeCubicMeters = volume - boxesSpace;
        console.log(`${freeCubicMeters} Cubic meters left.`);
    }

}
moving(["10", "10", "2", "20", "20", "20", "20", "122"])