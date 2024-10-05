function archeryChampion(input) {

    let targetsArray = input.shift().split("|").map(Number);
    let johnsPoints = 0;

    for (let command of input) {

        if (command === "Game over") {
            break;
        }

        if (command === "Reverse") {
            targetsArray.reverse();
        } else {
            let [action, second] = command.split(" ")
            let [direction, index, length] = second.split("@");

            index = Number(index);
            length = Number(length);

            if (direction === "Left") {
                if (index >= 0 && index < targetsArray.length) {
                    for (let i = 0; i < length; i++) {
                        index--;
                        if (index < 0) {
                            index = targetsArray.length - 1;
                        }
                    }
                    let target = targetsArray[index];
                    if (target >= 5) {
                        johnsPoints += 5;
                        targetsArray[index] -= 5;
                    } else {
                        johnsPoints += target;
                        targetsArray[index] = 0;
                    }
                }

            } else if (direction === "Right") {
                if (index >= 0 && index < targetsArray.length) {

                    for (let i = 0; i < length; i++) {
                        index++;
                        if (index >= targetsArray.length) {
                            index = 0;
                        }
                    }
                    let target = targetsArray[index];
                    if (target >= 5) {
                        johnsPoints += 5;
                        targetsArray[index] -= 5;
                    } else {
                        johnsPoints += target;
                        targetsArray[index] = 0;
                    }

                }

            }
        }
    }

    console.log(targetsArray.join(" - "));
    console.log(`John finished the archery tournament with ${johnsPoints} points!`);

}
archeryChampion(["20|30|40|50|60", "Shoot Left@0@12", "Shoot Right@4@15", "Shoot Left@6@5", "Reverse", "Game over"]);
