function oddAndEvenSum(num) {

    let numAsStr = String(num);
    let newArr = numAsStr.split(``);
    let evenSum = 0;
    let oddSum = 0;

    for (let curDigit of newArr) {

        let curDigitToNum = Number(curDigit);

        if (curDigitToNum % 2 === 0) {
            evenSum += curDigitToNum;
        } else {
            oddSum += curDigitToNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);