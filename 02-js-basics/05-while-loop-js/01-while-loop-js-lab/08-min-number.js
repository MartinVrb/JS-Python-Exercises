function minNumber(input) {

    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;

    while (index < input.length) {

        let currentElement = input[index];

        if (currentElement === "Stop") {
            break;
        }

        currentElement = Number(input[index]);

        if (currentElement < min) {
            min = currentElement
        }

        index++;

    }

    console.log(min);

}
minNumber(["-1", "-2", "Stop"])