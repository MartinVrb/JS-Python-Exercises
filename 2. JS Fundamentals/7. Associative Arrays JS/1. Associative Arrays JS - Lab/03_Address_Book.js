function addressBook(array) {

    let personData = {};

    for (let commands of array) {

        let [name, address] = commands.split(":");

        personData[name] = address;
    }

    let sortedArray = Object.keys(personData).sort((a, b) => a.localeCompare(b));

    for (let names of sortedArray) {

        console.log(`${names} -> ${personData[names]}`);

    }
    
}
addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);