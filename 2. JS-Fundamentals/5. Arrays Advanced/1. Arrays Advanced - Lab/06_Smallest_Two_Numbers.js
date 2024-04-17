function smallestTwoNumbers(array) {

    let newArray = [];

    let smallNums = array.sort((a, b) => {

        return a - b;
    });

    newArray.push(smallNums[0]);
    newArray.push(smallNums[1]);

    console.log(newArray.join(" "));

}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);