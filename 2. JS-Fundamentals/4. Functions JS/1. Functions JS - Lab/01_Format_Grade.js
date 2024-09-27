function formatGrade(grade) {

        let actual = ``;

        if (grade < 3.00) {
                actual = "Fail";
                grade = 2;

        } else if (grade >= 3.00 && grade < 3.50) {
                actual = "Poor";

        } else if (grade >= 3.50 && grade < 4.50) {
                actual = "Good";

        } else if (grade >= 4.50 && grade < 5.50) {
                actual = "Very good";

        } else if (grade >= 5.50) {
                actual = "Excellent";
        }

        if (grade <= 3.00) {
                console.log(`${actual} (${grade})`);
        } else {
                console.log(`${actual} (${grade.toFixed(2)})`);
        }

}
formatGrade(4.50);