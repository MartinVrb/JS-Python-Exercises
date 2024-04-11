function reverseAnArrayOfNumbers(num, array) {

    let newArray = array.slice(0).reverse();

    for (let times = num; num < newArray.length; times++) {

        newArray.shift();

    }

    console.log(newArray.join(` `));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);