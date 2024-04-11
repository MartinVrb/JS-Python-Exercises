function eachDigitsSum() {

    let arrOfNumber = [35, 26, 15];
    let sumOfEachDigit = 0;
    let sumOfAllNumbersDigits = 0;

    for (let curNumber of arrOfNumber) {

        let curNumberStr = curNumber.toString();

        for (let start = 0; start < curNumberStr.length; start++) {

            let curDigit = Number(curNumberStr[start]);
            sumOfEachDigit += curDigit;
        }

        console.log(sumOfEachDigit);

        sumOfAllNumbersDigits += sumOfEachDigit;

        sumOfEachDigit = 0;

    }

    console.log(sumOfAllNumbersDigits);


}
eachDigitsSum();