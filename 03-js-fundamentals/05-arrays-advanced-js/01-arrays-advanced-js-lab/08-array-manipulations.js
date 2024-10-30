function arrayManipulations(input) {

    let numbers = input
        .shift()
        .split(' ')
        .map(Number);

    for (let row of input) {
        let [command, firstNum, secondNum] = row.split(' ');

        switch (command) {
            case "Add":
                numbers.push(Number(firstNum));
                break;

            case "Remove":
                numbers = numbers.filter(num => num !== Number(firstNum));
                break;

            case "RemoveAt":
                numbers.splice(Number(firstNum), 1);
                break;

            case "Insert":
                numbers.splice(secondNum, 0, Number(firstNum));
                break;
        }
    }
    console.log(numbers.join(' '));
}
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);