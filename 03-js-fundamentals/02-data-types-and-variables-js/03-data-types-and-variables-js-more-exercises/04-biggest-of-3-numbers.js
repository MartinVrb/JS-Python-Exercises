function biggestOf3Numbers(first, second, third) {

    let myArray = [];
    myArray.push(first);
    myArray.push(second);
    myArray.push(third);

    let myNum = Math.max(...myArray);
    console.log(myNum);

}
biggestOf3Numbers(-2, 7, 3)