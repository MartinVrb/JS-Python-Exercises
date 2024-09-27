function commonElements(array1, array2) {

    for (let firstCurrent of array1) {

        for (let index of array2) {

            if (firstCurrent === index) {
                console.log(firstCurrent);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);