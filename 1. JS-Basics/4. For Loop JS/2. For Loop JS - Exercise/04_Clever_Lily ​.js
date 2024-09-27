function cleverLily(input) {

    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let toys = 0;

    let moneySaved = 0;
    let birthdayMoney = 10;

    for (let birthday = 1; birthday <= lilysAge; birthday++) {

        if (birthday % 2 === 0) {
            moneySaved += (birthdayMoney-1);
            birthdayMoney += 10;
        } else {
            toys++;
        }
    }

    toys *= pricePerToy;

    let finalPrice = moneySaved + toys;

    if (finalPrice >= washingMachinePrice) {
        let remainingMoney = finalPrice - washingMachinePrice;
        console.log(`Yes! ${remainingMoney.toFixed(2)}`);
    } else{
        let neededMoney = washingMachinePrice - finalPrice;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }

}
cleverLily(["10", "170.00", "6"]);