function processOddNumbers(array) {

    let newArray = array
        .filter((x, i) => i % 2 !== 0)
        .map(y => (y * 2))
        .reverse();

    console.log(newArray.join(" "));

}
processOddNumbers([3, 0, 10, 4, 7, 3]);