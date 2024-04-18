function sorting(arr) {

    arr = arr.sort((a, b) => a - b);
    let sortedArr = [];

    while (arr.length > 0) {
        let biggestNum = arr.pop();
        sortedArr.push(biggestNum);

        if (arr.length > 0) {
            let smallestNum = arr.shift();
            sortedArr.push(smallestNum);
        }
    }

    console.log(sortedArr.join(" "));

}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);