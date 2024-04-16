function sumFirstAndLast(array) {

    let firstNum = Number(array[0]);
    let lastNum = Number(array[array.length - 1]);

    let sum = firstNum + lastNum;

    console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);