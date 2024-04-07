function sumDigits(num) {

    let numAsString = String(num);
    let sum = 0;

    for (let start = 0; start < numAsString.length; start++) {

        let currentDigit = Number(numAsString[start]);
        sum += currentDigit;

    }

    console.log(sum);

}
sumDigits(97561);