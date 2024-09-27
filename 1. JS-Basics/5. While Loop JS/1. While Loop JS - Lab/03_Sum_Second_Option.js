function sumNumbers(input) {

    let goalNumber = Number(input[0]);
    let sumOfNumbers = 0;
    let index = 1;


    while (index < input.length) {

        let currentNumber = Number(input[index]);
        sumOfNumbers += currentNumber;
        index++

        if (goalNumber === sumOfNumbers) {
            break;
        }
    }

    console.log(sumOfNumbers)
}
sumNumbers(["100", "10", "20", "30", "40"]);