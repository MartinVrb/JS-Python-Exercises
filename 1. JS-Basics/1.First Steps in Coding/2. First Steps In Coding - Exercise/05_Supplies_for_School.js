function supplies (input){

    let pens = Number(input[0]) * 5.80;
    let markers = Number(input[1]) * 7.20;
    let detergentLiters = Number(input[2]) * 1.20;
    let discountRate = Number(input[3]/100);
    let priceForAllMaterials = pens + markers + detergentLiters;
    let discountedPrice = priceForAllMaterials - (priceForAllMaterials * discountRate);
    
    console.log(discountedPrice)

};
supplies([ "2 ", "3 ", "4 ", "25 "]);