function numbersDivisible(input) {

    let loopStart = Number(input[0]);
    let loopEnd = Number(input[1]);
    let sum = 0;

    for (let current = loopStart; current <= loopEnd; current++) {

        if (current % 9 === 0) {
            sum = sum + current;
        }
    }
    console.log(`The sum: ${sum}`);

    for (let current = loopStart; current <= loopEnd; current++) {

        if (current % 9 === 0) {
            console.log(current);
        }
    }
}
numbersDivisible(["100", "200"]);