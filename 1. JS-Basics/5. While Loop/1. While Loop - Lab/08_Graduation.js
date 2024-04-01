function graduationSecond(input) {

    let name = input[0];
    let grade = 1;
    let sumOfGrades = 0;

    let excluded = 0;

    while (grade <= 12) {

        let currentGrade = Number(input[grade]);

        if (currentGrade < 4) {
            excluded++
        }

        if (excluded > 1) {
            console.log(`${name} has been excluded at ${grade - 1} grade`);
            break;
        }

        sumOfGrades += currentGrade;
        grade++;

    }

    let averageGrade = sumOfGrades / 12;
    
    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }

}
graduationSecond(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);