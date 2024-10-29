function trainTheTrainers(input) {

    let judgesCount = Number(input[0]);

    let gradesSum = 0;
    let gradesCount = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let presentationName = command;

        let presentationGradeSum = 0;
        let presentationGradeCount = judgesCount;

        for (let curJudge = 1; curJudge <= judgesCount; curJudge++) {
            let curGrade = Number(input[index]);
            index++;

            presentationGradeSum += curGrade;
        }

        let presentationAverageGrade = presentationGradeSum / presentationGradeCount;
        console.log(`${presentationName} - ${presentationAverageGrade.toFixed(2)}.`);

        gradesCount++;
        gradesSum += presentationAverageGrade;


        command = input[index];
        index++;

    }

    let averageAllGrades = gradesSum / gradesCount;
    console.log(`Student's final assessment is ${averageAllGrades.toFixed(2)}.`);

}
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);