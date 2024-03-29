function sumOfNumbers(input) {

    let array = input[0];
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        let currentNumber = Number(array[index]);
        sum += currentNumber;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);