function equalArrays(firstArray, secondArray) {

    let sumOfFirstArray = 0;

    let index = 0;

    let isThatRight = true;

    for (let firstCurStr of firstArray) {
        let curNumFirstArray = Number(firstCurStr);

        for (let start = index; start < secondArray.length; start++) {
            let curNumSecondArray = Number(secondArray[start]);

            if (curNumFirstArray === curNumSecondArray) {
                sumOfFirstArray += curNumFirstArray;
                break;
            } else {
                console.log(`Arrays are not identical. Found difference at ${index} index`);
                isThatRight = false;
                break;
            }
        }

        if (isThatRight === false) {
            break;
        }

        index++;

    }

    if (isThatRight === true) {
        console.log(`Arrays are identical. Sum: ${sumOfFirstArray}`);
    }

}
equalArrays(['1'], ['10']);