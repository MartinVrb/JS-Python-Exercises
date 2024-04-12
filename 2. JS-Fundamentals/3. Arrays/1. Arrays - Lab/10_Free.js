function free(array) {

    let index = 1;

    let sumOfFirstTwo = 0;

    let newArray = [];

    let isItRight = true;

    let addIndex = array[0];

    if (array.length < 2) {
        console.log(`${addIndex}`);
        return;
    }

    if (array.length > 1) {

        for (let curNum of array) {

            for (let start = index; start < array.length; start++) {

                let forNum = Number(array[start]);

                if (isItRight = true) {
                    sumOfFirstTwo = curNum + forNum;
                    newArray.push(sumOfFirstTwo);
                    break;
                }
            }

            index++;

            if (index === array.length) {
                break;
            }
        }

        if (newArray.length < 2) {
            console.log(newArray.toString());
            return;
        }
    }

    let secondIndex = 1;

    let secondSumOfTwo = 0;

    let secondNewArray = [];

    if (newArray.length > 1) {

        for (let curNumNewArray of newArray) {

            for (let secondStart = secondIndex; secondStart < newArray.length; secondStart++) {

                let secondForNum = Number(newArray[secondStart]);

                if (isItRight = true) {
                    secondSumOfTwo = curNumNewArray + secondForNum;
                    secondNewArray.push(secondSumOfTwo);
                    break;
                }
            }

            secondIndex++;

            if (secondIndex === newArray.length) {
                break;
            }
        }

        if (secondNewArray.length < 2) {
            console.log(secondNewArray.toString());
            return;
        }
    }

    let thirdIndex = 1;

    let thirdSumOfTwo = 0;

    let thirdNewArray = [];

    if (secondNewArray.length > 1) {

        for (let curNumThirdArray of secondNewArray) {

            for (let thirdStart = thirdIndex; thirdStart < secondNewArray.length; thirdStart++) {

                let thirdForNum = Number(secondNewArray[thirdStart]);

                if (isItRight = true) {
                    thirdSumOfTwo = curNumThirdArray + thirdForNum;
                    thirdNewArray.push(thirdSumOfTwo);
                    break;
                }
            }

            thirdIndex++;

            if (thirdIndex === secondNewArray.length) {
                break;
            }
        }

        if (thirdNewArray.length < 2) {
            console.log(thirdNewArray.toString());
            return;
        }
    }

    let finalSum = 0;
    let fourthNewArray = [];

    if (thirdNewArray.length > 1) {

        for (let fourthIndex = 0; fourthIndex < thirdNewArray.length; fourthIndex++) {

            let fourthCurNum = thirdNewArray[fourthIndex];
            finalSum += fourthCurNum;
        }

        fourthNewArray.push(finalSum);

        if (fourthNewArray.length < 2) {
            console.log(fourthNewArray.toString());
            return;
        }
    }
}
free([1]);