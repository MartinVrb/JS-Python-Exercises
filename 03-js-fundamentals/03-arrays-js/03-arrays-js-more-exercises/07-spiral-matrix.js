function generateSpiralMatrix(rows, cols) {

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(0);
        }
    }

    let num = 1;
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = num++;
        }
        top++;

        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = num++;
        }
        right--;

        for (let col = right; col >= left; col--) {
            matrix[bottom][col] = num++;
        }
        bottom--;

        for (let row = bottom; row >= top; row--) {
            matrix[row][left] = num++;
        }
        left++;
    }

    // Print the matrix
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
generateSpiralMatrix(5, 5);