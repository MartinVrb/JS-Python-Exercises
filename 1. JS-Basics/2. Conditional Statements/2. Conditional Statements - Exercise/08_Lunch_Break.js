function lunchBreak(input) {

    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration * (1/8);
    let leisureTime = breakDuration * (1/4);

    let totalPlannedTime = lunchTime + leisureTime;

    let timeForSerie = breakDuration - totalPlannedTime;

    if (timeForSerie >= episodeLength) {
        let timeLeft = timeForSerie - episodeLength;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        let timeNeeded = episodeLength - timeForSerie;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }

}
lunchBreak(["Teen Wolf", "48", "60"]);