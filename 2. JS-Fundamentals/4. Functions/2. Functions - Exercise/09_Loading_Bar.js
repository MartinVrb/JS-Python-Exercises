function loadingBar(num) {

    let division = num / 10;
    let procentsCount = "%".repeat(division);

    let points = (100 - num) / 10;
    let pointsCount = ".".repeat(points);

    if (num === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        console.log(`${num}% [${procentsCount}${pointsCount}]`);
        console.log("Still loading...");
    }

}
loadingBar(100);