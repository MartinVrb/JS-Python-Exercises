function shopping(input) {

    let petersBudget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuPrice = gpu * 250;

    let cpuPrice = (gpuPrice * 0.35) * cpu;

    let ramPrice = (gpuPrice * 0.10) * ram;

    let totalSum = gpuPrice + cpuPrice + ramPrice;
    if (gpu > cpu) {
        totalSum *= 0.85;
    }


    if (totalSum <= petersBudget) {
        let residualBudget = petersBudget - totalSum;
        console.log(`You have ${(residualBudget).toFixed(2)} leva left!`);
    } else {
        let neededBudget = totalSum - petersBudget;
        console.log(`Not enough money! You need ${(neededBudget).toFixed(2)} leva more!`);
    }


}
shopping(["900", "2", "1", "3"]);