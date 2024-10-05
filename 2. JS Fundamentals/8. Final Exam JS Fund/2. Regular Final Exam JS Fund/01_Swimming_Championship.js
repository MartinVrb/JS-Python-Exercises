function swimmingChampionship(input) {

    let days = Number(input[0]);
    let points = Number(input[1]);
    let swimmersCount = Number(input[2]);
    let hotelRoomPriceForSwimmer = Number(input[3]);
    let participationFeeForSwimmer = Number(input[4]);

    let hotelsMoney = swimmersCount * hotelRoomPriceForSwimmer * days;
    let allSwimmersParticipation = swimmersCount * participationFeeForSwimmer;

    let totalMoney = hotelsMoney + allSwimmersParticipation;

    let totalPoints = 0;

    for (let start = 0; start < days; start++) {
        let pointsEarned = Number(input[start + 5]);
        totalPoints += pointsEarned;
        if (start > 0) {
            start--;
            let previous = Number(input[start + 5]);
            let additionalPoints = 0.05 * previous;
            totalPoints += additionalPoints;
            start++;
        }
    }

    let covered = 0;

    if (points <= totalPoints) {
        covered = totalMoney * 0.25;
        totalMoney -= covered;
        console.log(`Money left to pay: ${totalMoney.toFixed(2)} BGN.`);
        console.log(`The championship was successful!`);
    } else {
        covered = totalMoney * 0.10;
        totalMoney -= covered;
        console.log(`Money left to pay: ${totalMoney.toFixed(2)} BGN.`);
        console.log(`The championship was not successful.`);

    }
}
swimmingChampionship(["3", "500", "5", "100.9", "50.1", "100.5", "301.0", "80.0"]);