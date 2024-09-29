function examPreparation(input) {

    let maxBadGrades = Number(input[0]);
    let command = input[1];
    let index = 2;
    let badGradesNumber = 0;
    let totalGrades = 0;
    let gradesSum = 0;

    let lastProblem = ``;

    while (command !== "Enough") {
        lastProblem = command;
        let grade = Number(input[index]);
        index++;

        if (grade <= 4) {
            badGradesNumber++;
        }

        if (badGradesNumber === maxBadGrades) {
            console.log(`You need a break, ${badGradesNumber} poor grades.`);
            break;
        }

        totalGrades++;
        gradesSum += grade;

        command = input[index];
        index++;
    }


    if (command === "Enough") {
        let average = gradesSum / totalGrades;
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${totalGrades}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPreparation(["3", "Money", "6", "Story", "4", "SpringTime", "5", "Bus", "6", "Enough"])