function sumFirstAndLastArrayElements(input) {

    let firstElement = input[0];
    let lastElement = input[input.length - 1]

    let sum = firstElement + lastElement;

    console.log(sum);

}
sumFirstAndLastArrayElements([10, 17, 22, 33]);