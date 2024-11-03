function printElement(array) {

    let step = array.pop();
    step = Number(step);
    let index = 0;
    let buff = "";

    while (index < array.length) {

        let element = array[index];

        buff += ` ${element}`;
        index += step;

    }

    console.log(buff);

}
printElement(['5', '20', '31', '4', '20', '2']);