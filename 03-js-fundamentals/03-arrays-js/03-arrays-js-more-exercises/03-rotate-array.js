function rotateArray(array) {

    let rotationCount = array.pop();

    for (let i = 0; i < rotationCount; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(' '));

}
rotateArray(['1', '2', '3', '4', '2']);