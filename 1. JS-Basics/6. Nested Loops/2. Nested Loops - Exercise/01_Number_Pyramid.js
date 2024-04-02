function numberPyramid(input) {

    let maxNum = Number(input[0]);
    let currentNum = 1;

    let currentRow = 1;
    let currentRowNums = 0;

    let result = ``;

    while (currentNum <= maxNum) {

        if (currentRowNums < currentRow) {
            result += `${currentNum} `;
            currentRowNums++;
        } else {
            result += `\n${currentNum} `;
            currentRow++;
            currentRowNums = 1;
        }

        currentNum++;

    }

    console.log(result);


}
numberPyramid(["7"]);