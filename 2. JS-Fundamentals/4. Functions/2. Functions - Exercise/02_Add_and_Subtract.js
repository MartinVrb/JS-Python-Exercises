function addAndSubtract(num1, num2, num3) {

    let sum = (firstPlus, secondPlus) => {

        return firstPlus + secondPlus;
    }
    let result = sum(num1, num2);

    let subtract = (firstMinus, secondMinus) => {

        return firstMinus - secondMinus;
    }
    console.log(subtract(result, num3));

}
addAndSubtract(23, 6, 10);