function amazingNumbers(num) {

    let numAsStr = String(num);
    let sum = 0;

    let something = "False";

    for (let start = 0; start < numAsStr.length; start++) {

        let curNum = Number(numAsStr[start]);

        sum += curNum;
    }

    let sumAsStr = String(sum);

    for (let secondStart = 0; secondStart < sumAsStr.length; secondStart++) {

        let digitFromSum = Number(sumAsStr[secondStart]);

        if (digitFromSum === 9) {
            something = "True";

        }

    }

    console.log(`${num} Amazing? ${something}`);

}
amazingNumbers(999);