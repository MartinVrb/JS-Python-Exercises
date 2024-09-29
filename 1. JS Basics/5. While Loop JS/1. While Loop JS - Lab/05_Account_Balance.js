function accountBalance(input) {

    let total = 0;
    let index = 0;

    while (index < input.length) {

        let currentRow = input[index];

        if (currentRow === "NoMoreMoney") {
            break;
        }

        currentRow = Number(input[index]);

        if (currentRow < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${currentRow.toFixed(2)}`);
        total += currentRow;
        index++;

    }

    console.log(`Total: ${total.toFixed(2)}`);

}
accountBalance(["120", "45.55", "-150"]);