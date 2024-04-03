function equalSumsEvenOddPosition(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = ``;

    for (let curNum = startNum; curNum <= endNum; curNum++) {

        let sumEvenPositions = 0;
        let sumOddPositions = 0;

        let curNumStr = String(curNum);

        for (let i = 0; i < curNumStr.length; i++) {

            let digit = Number(curNumStr[i]);

            let postions = i + 1;

            if (postions % 2 === 0) {
                sumEvenPositions += digit;
            } else {
                sumOddPositions += digit;
            }
        }

        if (sumEvenPositions === sumOddPositions) {
            result += `${curNum} `;
        }
    }

    console.log(result);

}
equalSumsEvenOddPosition(["299900", "300000"]);