function arrayModifier(array) {

    let integersArray = array.shift().split(" ").map(Number);
    let firstNum = 0;
    let secondNum = 0;
    let result = 0;


    for (let element of array) {

        let curElement = element.split(" ");

        let [command, index1, index2] = curElement;
        index1 = Number(index1);
        index2 = Number(index2);

        switch (command) {
            case "swap":
                firstNum = Number(integersArray[index1]);
                secondNum = Number(integersArray[index2]);

                integersArray.splice(index1, 1, secondNum);
                integersArray.splice(index2, 1, firstNum);
                break;

            case "multiply":
                firstNum = Number(integersArray[index1]);
                secondNum = Number(integersArray[index2]);
                result = firstNum * secondNum;
                integersArray.splice(index1, 1, result);
                break;

            case "decrease":
                integersArray = integersArray.map(Number).map(n => n - 1);
                break;

            default:
                break;
        }
    }

    console.log(integersArray.join(", "));

}
arrayModifier([ '1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end' ]);