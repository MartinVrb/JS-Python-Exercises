function ages(age) {

    let current = "";

    if (0 <= age && age <= 2) {
        current = "baby";
    } else if (3 <= age && age <= 13) {
        current = "child";
    } else if (14 <= age && age <= 19) {
        current = "teenager";
    } else if (20 <= age && age <= 65) {
        current = "adult";
    } else {
        current = "elder";
    }

    if (age < 0) {
        console.log("out of bounds");
    } else {
        console.log(current);
    }

}
ages(100);