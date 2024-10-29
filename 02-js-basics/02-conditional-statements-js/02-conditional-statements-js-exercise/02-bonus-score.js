function bonusScore(input){

    let startingPoints = Number(input[0]);
    let bonusPoints = 0;

    if(startingPoints <= 100){
        bonusPoints = 5;
    } else if(startingPoints < 1000){
        bonusPoints = startingPoints * 0.20;
    } else if(startingPoints > 1000){
        bonusPoints = startingPoints * 0.10;
    }

    let bonus = 0;
    if(startingPoints % 2 === 0){
        bonus = + 1
    } else if(startingPoints % 10 === 5){
        bonus = + 2;
    }

    console.log(bonusPoints + bonus);
    console.log(startingPoints + bonusPoints + bonus);

}
bonusScore(["2703"]);