function vacation(input){

    let allPagesInBook = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);
    let allHours = allPagesInBook / pagesForHour
    let requiredHoursPerDay = allHours /2

    console.log(requiredHoursPerDay);

};
vacation(["212 ", "20 ", "2 "]);
