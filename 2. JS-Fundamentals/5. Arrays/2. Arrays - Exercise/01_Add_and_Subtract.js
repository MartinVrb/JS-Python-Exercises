function addAndSubtract(array) {

    let index = 0;
    let newArray = [];
    let sum = 0;
    let sumOfNewArray = 0;

    for (let curNum of array) {

        sum += curNum;

        if (curNum % 2 === 0) {
            curNum += index;
            newArray.push(curNum);
            sumOfNewArray += curNum;
        } else {
            curNum -= index;
            newArray.push(curNum);
            sumOfNewArray += curNum;
        }

        index++;
    }

    console.log(newArray);
    console.log(sum);
    console.log(sumOfNewArray);

}
addAndSubtract([5, 15, 23, 56, 35]);