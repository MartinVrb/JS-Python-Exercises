function findSmallestNum(num1, num2, num3) {

    let tempSmallest = findSmallerNum(num1, num2);
    let smallestNum = findSmallerNum(tempSmallest, num3)

    console.log(smallestNum);

    function findSmallerNum(x, y) {
        if (x < y) {
            return x;
        } else {
            return y;
        }
    }
}
findSmallestNum(600, 342, 123);