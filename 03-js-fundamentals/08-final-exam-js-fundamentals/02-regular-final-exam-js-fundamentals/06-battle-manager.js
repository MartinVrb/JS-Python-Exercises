function battleManager(input) {

    let record = {};
    let actions = input.shift();

    while (actions !== "Results") {

        let tokens = actions.split(":");

        let command = tokens.shift();

        if (command === "Add") {
            let personName = tokens.shift();
            let health = Number(tokens.shift());
            let energy = Number(tokens.shift());

            if (record.hasOwnProperty(personName)) {
                record[personName].health += health;
            } else {
                record[personName] = { health, energy };
            }

        } else if (command === "Attack") {
            let attackerName = tokens.shift();
            let defenderName = tokens.shift();
            let damage = Number(tokens.shift());

            if (record.hasOwnProperty(attackerName) && record.hasOwnProperty(defenderName)) {

                if (record[attackerName].energy > 0) {
                    record[defenderName].health -= damage;
                    record[attackerName].energy -= 1;
                }

                if (record[defenderName].health <= 0) {
                    delete record[defenderName];
                    console.log(`${defenderName} was disqualified!`);
                }


            }


            if (record.hasOwnProperty(attackerName) && record[attackerName].energy <= 0) {
                delete record[attackerName];
                console.log(`${attackerName} was disqualified!`);
            }

        } else if (command === "Delete") {
            let personName = tokens.shift();

            if (personName === "All") {
                record = {};
            } else {
                delete record[personName];
            }
        }
        actions = input.shift();
    }

    let peopleLeft = Object.keys(record).length;
    console.log(`People count: ${peopleLeft}`);

    for (let [personName, { health, energy }] of Object.entries(record)) {
        console.log(`${personName} - ${health} - ${energy}`);
    }

}
battleManager(["Add:Bonnie:3000:5", "Add:Johny:4000:10", "Delete:All", "Add:Bonnie:3333:3", "Add:Aleks:1000:70", "Add:Tom:4000:1", "Results"]);
// battleManager(["Add:Mark:1000:5", "Add:Clark:1000:2", "Attack:Clark:Mark:500", "Attack:Clark:Mark:800", "Add:Charlie:4000:10", "Results"]);
