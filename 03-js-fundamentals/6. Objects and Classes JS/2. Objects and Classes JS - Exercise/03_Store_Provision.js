function storeProvision(array, secondArray) {

    let cur = 0;
    let newElement = 0;

    while (cur < secondArray.length) {
        let productElement = secondArray[cur];
        if (!array.includes(productElement)) {
            array.push(productElement);
            cur++;
            let num = Number(secondArray[cur]);
            array.push(num);
        } else {
            cur++;
            let num = Number(secondArray[cur]);
            let index = array.indexOf(productElement);
            index++;
            let sum = Number(array[index]) + num;
            array.splice(index, 1, sum);
        }

        cur++;
    }

    while (newElement < array.length) {
        let product = array[newElement];
        newElement++;
        let quantity = Number(array[newElement]);
        let object = { name: product, quantity: quantity }
        console.log(`${object.name} -> ${object.quantity}`);
        newElement++;
    }

}
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);