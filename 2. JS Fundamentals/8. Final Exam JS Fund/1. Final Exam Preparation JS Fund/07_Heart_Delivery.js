function heartDelivery(array) {

    let neighborhoodArray = array.shift().split("@").map(Number);
    let cur = 0;
    let curJump = 0;

    for (let houses of array) {

        let curHouse = houses.split(" ");
        let [command, jumps] = curHouse;
        jumps = Number(jumps);

        switch (command) {
            case "Jump":
                curJump += jumps;
                if (curJump >= neighborhoodArray.length) {
                    curJump = 0;
                    cur = Number(neighborhoodArray[curJump]) - 2;
                    if (Number(neighborhoodArray[curJump]) === 0) {
                        console.log(`Place ${curJump} already had Valentine's day.`);
                        break;
                    }
                    if (cur <= 0) {
                        console.log(`Place ${curJump} has Valentine's day.`);
                    }
                    neighborhoodArray.splice(curJump, 1, cur);
                } else {
                    if (Number(neighborhoodArray[curJump]) === 0) {
                        console.log(`Place ${curJump} already had Valentine's day.`);
                        break;
                    }
                    cur = Number(neighborhoodArray[curJump]) - 2;
                    if (cur <= 0) {
                        console.log(`Place ${curJump} has Valentine's day.`);
                    }
                    neighborhoodArray.splice(curJump, 1, cur);
                }
                break;

            default:
                console.log(`Cupid's last position was ${Number(curJump)}.`);
                break;

        }

    }

    let failed = 0;
    let counter = 0;
    for (let start of neighborhoodArray) {
        if (start === 0) {
            counter++;
        } else {
            failed++;
        }
    }

    if (failed === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failed} places.`);
    }

}
heartDelivery(["4@2@4@2",

    "Jump 1",

    "Jump 2",

    "Jump 1",

    "Jump 2",

    "Jump 2",

    "Jump 2",

    "Love!"]);