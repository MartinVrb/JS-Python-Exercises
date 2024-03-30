function trekkingMania(input) {
    let groupsCount = Number(input[0]);

    let musalaCount = 0;
    let monblanCount = 0;
    let kilimanjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    let totalPeople = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let peopleInGroup = Number(input[i]);

        if (peopleInGroup <= 5) {
            musalaCount += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            monblanCount += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kilimanjaroCount += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2Count += peopleInGroup;
        } else {
            everestCount += peopleInGroup;
        }

        totalPeople += peopleInGroup;
    }

    let musalaPercent = (musalaCount / totalPeople) * 100;
    let monblanPercent = (monblanCount / totalPeople) * 100;
    let kilimanjaroPercent = (kilimanjaroCount / totalPeople) * 100;
    let k2Percent = (k2Count / totalPeople) * 100;
    let everestPercent = (everestCount / totalPeople) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania(["5", "25", "41", "31", "250", "6"]);