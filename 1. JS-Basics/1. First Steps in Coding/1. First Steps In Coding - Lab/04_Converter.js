function inchesToCentimeters(input) {
    let inch1 = (input[0]);
    let centimeter1 = (input[1]);
    let result1 = inch1 * centimeter1;

    console.log(`Thats the first one ${result1}`);

    let inch2 = (input[2]);
    let centimeter2 = (input[1]);
    let result2 = inch2 * centimeter2;

    console.log(`Thats the second one, lets see what we have become ${result2}`);

    let inch3 = (input[3]);
    let centimeter3 = (input[1]);
    let result3 = inch3 * centimeter3;

    console.log(`Thats the third one, the final one ${result3}`)

}
inchesToCentimeters(["5", "2.54", "7", "8"]);