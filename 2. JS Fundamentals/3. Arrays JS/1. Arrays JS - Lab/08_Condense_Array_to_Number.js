function condenseArrayToNumber(inputArray) {

    while (inputArray.length > 1) {
        let condensedArray = [];

        for (let i = 0; i < inputArray.length - 1; i++) {
            condensedArray.push(inputArray[i] + inputArray[i + 1]);
        }

        inputArray = condensedArray;
    }

    let result = inputArray[0];
    console.log(result);
}
condenseArrayToNumber([5, 0, 4, 1, 2]);