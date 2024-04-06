function multiplicationTable(num) {

    for (let start = 1; start <= 10; start++) {

        let result = num * start;

        console.log(`${num} X ${start} = ${result}`);

    }
}
multiplicationTable(5);