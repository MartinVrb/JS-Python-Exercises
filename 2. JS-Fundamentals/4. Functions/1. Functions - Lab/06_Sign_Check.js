function signCheck(first, second, last) {

    let firstAndSecondMultiply = (a, b) => {
        return a * b;
    }
    let firstAndSecondResult = firstAndSecondMultiply(first, second);

    let finalResult = firstAndSecondResult * last;

    if (finalResult < 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }

}
signCheck(5, 12, -15);