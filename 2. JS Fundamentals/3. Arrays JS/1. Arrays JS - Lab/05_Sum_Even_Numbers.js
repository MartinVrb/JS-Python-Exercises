function sumEvenNumbers(array) {

    let sum = 0;

    for (let curStr of array) {

        let curNum = Number(curStr);

        if (curNum % 2 === 0) {

            sum += curNum;

        }
    }

    console.log(sum);

}
sumEvenNumbers(['3','5','7','9']);