function sortNumbers(first, second, third) {

    let array = [];
    array.push(first);
    array.push(second);
    array.push(third);

    let sortedArray = array.sort((a, b) => b - a);

    for (let element of sortedArray) {
        console.log(element);

    }

}
sortNumbers(2, 1, 3);