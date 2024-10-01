function minerTask(input) {

    let index = 0;
    let items = {};

    while (index < input.length) {

        let resource = input[index];
        index++;
        let quantity = Number(input[index]);

        if (!items.hasOwnProperty(resource)) {
            items[resource] = quantity;
        } else {
            items[resource] += quantity;
        }

        index++;
    }

    for (let current in items) {
        console.log(`${current} -> ${items[current]}`);
    }

}
minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);