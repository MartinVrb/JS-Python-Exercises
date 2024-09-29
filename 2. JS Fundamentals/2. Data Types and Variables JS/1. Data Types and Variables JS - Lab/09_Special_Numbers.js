function specialNumbers(num) {

    let value = ``;
    let sum = 0;

    for (let curNum = 1; curNum <= num; curNum++) {

        let curNumAsStr = String(curNum);

        for (let secondStart = 0; secondStart < curNumAsStr.length; secondStart++) {

            let curDigit = Number(curNumAsStr[secondStart]);
            sum += curDigit;

        }

        if (sum === 5 || sum === 7 || sum === 11) {
            value = "True";
        } else {
            value = "False";
        }

        console.log(`${curNum} -> ${value}`);

        sum = 0;
    }

}
specialNumbers(15);