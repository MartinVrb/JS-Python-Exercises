function sumOfOddNumbers(oddNumbersNum) {

    let count = 0;
    let start = 1;

    let sumOfAllOfThem = 0;

    while (count !== oddNumbersNum) {

        console.log(start);

        sumOfAllOfThem += start;
        start += 2;

        count++;
    }

    console.log(`Sum: ${sumOfAllOfThem}`);

}
sumOfOddNumbers(3);