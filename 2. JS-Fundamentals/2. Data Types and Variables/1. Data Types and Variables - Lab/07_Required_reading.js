function requiredReading(pagesNum, pagesIn1Hour, targetDays) {

    let pagesForDay = pagesNum / targetDays; // 106 

    let hoursForPagesInOneDay = pagesForDay / pagesIn1Hour;

    console.log(hoursForPagesInOneDay);

}
requiredReading(212, 20, 2);