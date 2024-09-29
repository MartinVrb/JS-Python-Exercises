function convertToJSON(name, lastName, hairColor) {

    let object = {};

    object.name = name;
    object.lastName = lastName;
    object.hairColor = hairColor;

    console.log(JSON.stringify(object));

}
convertToJSON('George', 'Jones', 'Brown');