function sumOfTwoNumber(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let operations = 0;
    let isValidCombination = false;


    for (let begin = start; begin <= end; begin++) {
        for (let secondBegin = start; secondBegin <= end; secondBegin++) {

            operations++;

            if (begin + secondBegin === magicNumber) {
                console.log(`Combination N:${operations} (${begin} + ${secondBegin} = ${magicNumber})`);
                isValidCombination = true;
                break;
            }
        }

        if (isValidCombination) {
            break;
        }
    }

    if (!isValidCombination) {
        console.log(`${operations} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumber(["23",

"24",

"20"])