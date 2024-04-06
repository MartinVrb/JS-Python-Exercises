function printAndSum(start, end) {

    let sum = 0;
    let allNums = ``;

    for (let curNum = start; curNum <= end; curNum++) {

        allNums += `${curNum} `
        sum += curNum;

    }

    console.log(allNums);
    console.log(`Sum: ${sum}`);

}
printAndSum(5, 10);