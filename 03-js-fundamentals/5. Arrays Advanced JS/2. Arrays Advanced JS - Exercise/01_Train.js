function train(array) {

    let wagonsArray = array
        .shift()
        .split(' ')
        .map(Number);

    let maxCapacity = Number(array.shift());

    for (let passengers of array) {

        let [command, firstNum] = passengers.split(' ');

        switch (command) {
            case "Add":
                wagonsArray.push(Number(firstNum));
                command = '';
                break;

            default:

                for (let start = 0; start < wagonsArray.length; start++) {
                    let cur = Number(wagonsArray[start]);

                    if (cur + Number(command) <= maxCapacity) {
                        let curIndex = wagonsArray.indexOf(cur);
                        wagonsArray.splice(curIndex, 1);
                        cur += Number(command);
                        wagonsArray.splice(curIndex, 0, cur);
                        break;
                    }
                }
        }
    }

    console.log(wagonsArray.join(' '));

}
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);