function factorialDivision(num1, num2) {

    let factorial1 = secondFunction(num1);
    let factorail2 = secondFunction(num2);

    let finalResult = factorial1 / factorail2;
    console.log(finalResult.toFixed(2));

    function secondFunction(num) {
        for (let start = num - 1; start !== 0; start--) {
            num *= start;
        }
        return num;
    }
}
factorialDivision(5, 2);