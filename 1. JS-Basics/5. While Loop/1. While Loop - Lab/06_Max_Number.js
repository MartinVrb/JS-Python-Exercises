function maxNumber(input) {

    let index = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while (index < input.length) {

        let currentElement = input[index];

        if (currentElement === "Stop") {
            break;
        }

        currentElement = Number(input[index]);

        if (currentElement > max) {
            max = currentElement;
        }

        index++;

    }

    console.log(max);
}
maxNumber(["100", "99", "80", "70", "Stop"]);