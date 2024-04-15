function perfectNumber(num) {

    let sumProperDivisors = 0;

    if (perfectNum(num) === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function perfectNum(startNum) {

        for (let divisor = 1; divisor <= startNum - 1; divisor++) {

            if (startNum % divisor === 0) {
                sumProperDivisors += divisor;
            }
        }

        return sumProperDivisors;
    }

}
perfectNumber(1236498);