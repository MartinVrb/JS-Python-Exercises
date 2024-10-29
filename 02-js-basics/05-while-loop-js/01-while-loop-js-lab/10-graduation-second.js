function graduation(input) {

    let name = input[0];

    let averageGrade = 0;
    let allGradesSum = 0;
    let excluded = 0;
    let grNumber = 0;
    let index = 1;

    while (index < input.length) {

        let grade = Number(input[index]);
        index++;
        grNumber = index - 2;
       
        if (grade >= 4.00) {

            averageGrade += grade;
            allGradesSum++;

        } else if (grade <= 4.00) {
            excluded++;
        }

        let average = averageGrade / allGradesSum;

        if (excluded > 1) {
            console.log(`${name} has been excluded at ${grNumber} grade`);
            break;
        }

        if(index === input.length){
            console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
        }

    }
}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);