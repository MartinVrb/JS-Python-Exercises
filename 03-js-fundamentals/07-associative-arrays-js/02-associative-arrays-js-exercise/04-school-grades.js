function schoolGrades(input) {

    let studentsBook = {};

    for (let studentInfo of input) {

        studentInfo = studentInfo.split(" ");
        let studentName = studentInfo.shift();
        let grades = studentInfo.join(" ")


        if (!studentsBook.hasOwnProperty(studentName)) {
            studentsBook[studentName] = grades;
        } else {
            studentsBook[studentName] += ` ${grades}`;
        }

    }

    let sortedNames = Object.keys(studentsBook).sort((a, b) => a.localeCompare(b));

    for (let name of sortedNames) {
        let average = 0;
        let counter = 0;
        for (let element of studentsBook[name].split(" ")) {
            average += Number(element);
            counter++;
        }

        average /= counter;
        console.log(`${name}: ${average.toFixed(2)}`);

    }
}
schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);