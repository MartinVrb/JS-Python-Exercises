function meetings(array) {

    let object = {};

    for (let commands of array) {

        let [weekday, name] = commands.split(" ");

        if (!object.hasOwnProperty(weekday)) {
            object[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    for (let success in object) {
        console.log(`${success} -> ${object[success]}`);

    }
    
}
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])