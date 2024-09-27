function depositCalculator(input){

    let amountDeposited = Number(input[0]);
    let annualInterestRate = Number(input[2] / 100)
    let termOfTheDeposit = Number(input[1]);
    let finalSum = amountDeposited + termOfTheDeposit * ((amountDeposited * annualInterestRate) / 12);

    console.log(finalSum);

}
depositCalculator([ "200 ", "3 ", "5.7 "]);