function arrayManipulator(nums, stringElements) {

    let index = 0;
    let curElement = 0;
    let position = 0;
    let begin = 0;
    let secondNewArray = [];

    for (let element of stringElements) {
        let curArray = element.split(" ");

        let [command] = curArray;

        switch (command) {
            case "add":
                index = Number(curArray[1]);
                curElement = Number(curArray[2]);
                nums.splice(index, 0, curElement);
                break;

            case "addMany":
                for (let start = 2; start < curArray.length; start++) {
                    index = Number(curArray[1]);
                    let startElement = Number(curArray[start]);
                    nums.splice(index, 0, startElement);
                    break;
                }
                for (let secondStart = 3; secondStart < curArray.length; secondStart++) {
                    let secondStartElement = Number(curArray[secondStart]);
                    index++;
                    nums.splice(index, 0, secondStartElement);
                }
                break;

            case "contains":
                curElement = Number(curArray[1]);

                if (nums.indexOf(curElement) === -1) {
                    console.log(-1);
                } else {
                    console.log(nums.indexOf(curElement));
                }
                break;

            case "remove":
                index = Number(curArray[1]);
                nums.splice(index, 1);
                break;

            case "shift":
                position = Number(curArray[1]);
                for (let startPositions = 0; startPositions < position; startPositions++) {
                    let removedNum = nums.shift();
                    nums.push(removedNum);
                }
                break;

            case "sumPairs":
                while (begin !== nums.length) {
                    let firstNum = nums.shift();
                    if (begin !== nums.length) {
                        let secondNum = nums.shift();
                        let sum = firstNum + secondNum;
                        secondNewArray.push(sum);
                    } else {
                        secondNewArray.push(firstNum);
                    }
                }
                nums = secondNewArray;
                secondNewArray = [];
                break;

            case "print":
                console.log(`[ ${nums.join(', ')} ]`);
                return;
        }
    }
}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);