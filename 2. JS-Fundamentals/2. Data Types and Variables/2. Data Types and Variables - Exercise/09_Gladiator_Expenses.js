function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let finalPriceForHelmet = 0;

    let finalPriceForSword = 0;

    let timesBrokenShield = 0;
    let finalPriceForShield = 0;

    let finalPriceForArmor = 0;


    for (let lostBattles = 1; lostBattles <= lostFights; lostBattles++) {

        if (lostBattles % 2 === 0) {

            finalPriceForHelmet += helmetPrice;

        }

        if (lostBattles % 3 === 0) {

            finalPriceForSword += swordPrice;

        }

        if (lostBattles % 2 === 0 && lostBattles % 3 === 0) {

            timesBrokenShield++;
            finalPriceForShield += shieldPrice;

            if (timesBrokenShield % 2 === 0) {

                finalPriceForArmor += armorPrice;
            }
        }
    }


    let expensesForTheYear = finalPriceForHelmet + finalPriceForSword + finalPriceForShield + finalPriceForArmor;

    console.log(`Gladiator expenses: ${expensesForTheYear.toFixed(2)} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5);