function shootForTheWin(array) {

    let targetArray = array.shift().split(" ").map(Number);
    let index = 0;
    let count = 0;

    for (let element of array) {

        if (element === "End") {
            break;
        }

        element = Number(element);

        if (element < targetArray.length) {

            let num = Number(targetArray[element]);

            for (let start of targetArray) {

                if (num !== -1 && start !== -1 && start > num) {
                    start -= num;

                    if (start <= 0) {
                        targetArray.splice(index, 1, -1);
                        count++;
                    } else {
                        targetArray.splice(index, 1, start);
                    }

                } else if (num !== -1 && start !== -1 && start <= num) {
                    start += num;
                    targetArray.splice(index, 1, start);

                }

                index++;
            }

            targetArray.splice(element, 1, -1);

            count++;
            index = 0;
        }

    }

    console.log(`Shot targets: ${count} -> ${targetArray.join(" ")}`);

}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);