function evenAndOddSubtraction(array) {

    let sumOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;

    for (let curNum of array) {

        if (curNum % 2 === 0) {

            sumOfEvenNumbers += curNum;
        } else {
            sumOfOddNumbers += curNum;
        }
    }

    let difference = sumOfEvenNumbers - sumOfOddNumbers;

    console.log(difference);

}
evenAndOddSubtraction([2, 4, 6, 8, 10]);