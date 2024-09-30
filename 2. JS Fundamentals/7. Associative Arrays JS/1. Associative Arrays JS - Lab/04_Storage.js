function storage(array) {

    let map = new Map();

    for (let itemsAndAmount of array) {

        let [item, price] = itemsAndAmount.split(" ");
        price = Number(price);

        if (!map.has(item)) {
            map.set(item, price);
        } else {
            let gotted = map.get(item);
            let sum = gotted + price;
            map.set(item, sum);
        }

    }

    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }

}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);