function arrayRotation(array, rotations) {

    let start = 0;
    let newArray = array.slice(0);

    for (let index = 0; index < rotations; index++) {

        let current = newArray[index];

        newArray.push(current);

    }

    while (start < rotations) {

        newArray.shift();
        start++;

    }

    console.log(newArray.join(` `));

}
arrayRotation([32, 21, 61, 1], 4);