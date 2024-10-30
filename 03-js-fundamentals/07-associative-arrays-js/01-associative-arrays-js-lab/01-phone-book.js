function phoneBook(input) {

    let phoneB = {};

    input.forEach(commands => {
        let [name, phoneNum] = commands.split(" ");

        phoneB[name] = phoneNum;
    });

    for (let name in phoneB) {
        console.log(`${name} -> ${phoneB[name]}`);
    }

}
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);