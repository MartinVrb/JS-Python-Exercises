function walking(input) {

    let totalSteps = 0;
    let goal = 10000;

    let index = 0;
    let command = ``;
    let stepsNeeded = 0;

    while (index < input.length) {

        command = input[index];

        if (command === "Going home") {
            index++;
            command = Number(input[index])
            totalSteps += command;

            if (totalSteps >= goal) {
                let difference = totalSteps - goal;
                console.log(`Goal reached! Good job!`);
                console.log(`${difference} steps over the goal!`);
            } else if (totalSteps < goal) {
                stepsNeeded = goal - totalSteps;
                console.log(`${stepsNeeded} more steps to reach goal.`);
            }

            break;
        }

        command = Number(input[index]);
        totalSteps += command;

        if (totalSteps >= goal) {
            let difference = totalSteps - goal;
            console.log(`Goal reached! Good job!`);
            console.log(`${difference} steps over the goal!`);
        }


        index++

    }
}
walking(["1000",

"1500",

"2000",

"6500"]);