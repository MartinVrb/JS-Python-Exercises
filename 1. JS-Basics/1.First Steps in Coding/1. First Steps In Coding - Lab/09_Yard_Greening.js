function yardGreening(input){

    let area = Number(input[0]);
    let firstPrice = area * 7.61;
    let discount = firstPrice * 0.18;

    let totalCost = firstPrice-discount;

    console.log(`The final price is: ${totalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);

};
yardGreening(["550"]);