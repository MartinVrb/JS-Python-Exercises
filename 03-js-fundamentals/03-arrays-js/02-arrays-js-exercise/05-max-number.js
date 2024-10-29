function maxNumber(array) {

    let newArray = [];
    let counter = 0;
    let firstNewArray = array.slice(0);

    for (let i = 0; i < array.length; i++) {

        let curElement = array[i];

        for (let curIndex = i + 1; curIndex < array.length; curIndex++) {

            let newCur = array[curIndex];

            if (curElement > newCur) {
                counter++;
            }
        }

        if (counter === firstNewArray.length - 1) {
            newArray.push(curElement);
        }

        firstNewArray.shift();

        counter = 0;

    }

    console.log(newArray.join(` `));
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);