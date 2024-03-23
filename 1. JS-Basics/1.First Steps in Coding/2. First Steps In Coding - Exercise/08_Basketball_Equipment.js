function basketballEquipment(input){

    let annualFee = Number(input[0]);

    let basketballShoes = annualFee * 0.60
    
    let basketballShirt = basketballShoes * 0.80;

    let basketBall = basketballShirt * 0.25;

    let basketballAccessories = basketBall * 0.20;

    let total = annualFee + basketballShoes + basketballShirt + basketBall + basketballAccessories;

    console.log(total);

}
basketballEquipment([ "365 " ]);