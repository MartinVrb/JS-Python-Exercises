function magicMatrices(array) {

    let isIt = true;

    let sum = 0;
    for (let num of array[0]) {
        sum += num;
    }

    for (let col = 0; col < array[0].length; col++) {
        let columnSum = 0;
        for (let row of array) {
            columnSum += row[col];
        }
        if (columnSum !== sum) {
            isIt = false;
        }
    }

    for (let row of array) {
        let rowSum = 0;
        for (let num of row) {
            rowSum += num;
        }
        if (rowSum !== sum) {
            isIt = false;
        }
    }

    console.log(isIt);

}
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
