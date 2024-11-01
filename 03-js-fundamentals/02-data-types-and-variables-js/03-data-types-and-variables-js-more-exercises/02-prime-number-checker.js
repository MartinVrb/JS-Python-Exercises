function primeNumberChecker(num) {

    let isIt = true;

    for (let start = 2; start <= 9; start++) {

        if (num % start === 0 && num !== start) {
            isIt = false;
            break;
        }

    }

    if (isIt === true) {
        console.log("true");
    } else {
        console.log("false");
    }

}
primeNumberChecker(81);