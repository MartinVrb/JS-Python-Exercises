function listOfProducts(array) {

    let fruitWheel = array.sort();

    for (let i = 0; i < fruitWheel.length; i++) {
        console.log(`${i + 1}.${fruitWheel[i]}`);
    }

}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);