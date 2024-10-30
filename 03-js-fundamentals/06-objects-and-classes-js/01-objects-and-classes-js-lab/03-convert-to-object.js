function convertToObejct(object) {

    let newObj = JSON.parse(object);

    for (let keys in newObj) {
        console.log(`${keys}: ${newObj[keys]}`);
    }

}
convertToObejct('{"name": "George", "age": 40, "town": "Sofia"}');