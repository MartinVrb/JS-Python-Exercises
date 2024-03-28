function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examsMinutes = Number(input[1]);
    let arrivedHour = Number(input[2]);
    let arrivedMinutes = Number(input[3]);

    let examHourAsMinutes = examHour * 60;
    let arrivedHourAsMinutes = arrivedHour * 60;

    let allExamMinutes = examHourAsMinutes + examsMinutes;
    let allArrivedMinutes = arrivedHourAsMinutes + arrivedMinutes;

    if (allExamMinutes === allArrivedMinutes) {
        console.log(`On time`);
    } else if (allExamMinutes < allArrivedMinutes) {
        console.log(`Late`);
        let difference = allArrivedMinutes - allExamMinutes;
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = Math.floor(difference % 60);

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours after the start`);
        }
    } else if (allArrivedMinutes + 30 < allExamMinutes) {
        console.log(`Early`);
        let difference = Math.abs(allArrivedMinutes - allExamMinutes);
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = Math.floor(difference % 60);
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours before the start`);
        }
    } else {
        console.log(`On time`);
        let difference = Math.abs(allArrivedMinutes - allExamMinutes);
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = Math.floor(difference % 60);
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours before the start`);
        }
    }

}
onTimeForTheExam(["9", "00", "10", "30"]);