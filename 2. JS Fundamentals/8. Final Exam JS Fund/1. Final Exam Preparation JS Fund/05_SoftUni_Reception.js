function softUniReception(input) {

    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let employeeThree = Number(input.shift());
    let people = Number(input.shift());

    let answersPerHour = employeeOne + employeeTwo + employeeThree;
    let neededHours = 0;

    while (people > 0) {

        neededHours++;
        people -= answersPerHour;

        if (neededHours % 4 === 0) {
            neededHours++;
        }
    }

    console.log(`Time needed: ${neededHours}h.`);

}
softUniReception(['1', '2', '3', '45']);