function excellent(input){

    let grade = Number(input[0]);
    let isExcellent = grade >= 5.50;
    if(isExcellent){
        console.log(`Excellent!`);

    }

}
excellent(["5.50"]);