function cinema(input) {

    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    price = 0;


    if (projectionType === "Premiere") {
        price = 12;
    } else if (projectionType === "Normal") {
        price = 7.50;
    } else if (projectionType === "Discount") {
        price = 5;
    }

    console.log(`${(price * rows * columns).toFixed(2)} leva`);
    
}
cinema(["Discount", "12", "30"]);