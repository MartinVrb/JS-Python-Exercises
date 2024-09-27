function delivery(input){

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);

    let chickenTotal = chickenMenus * 10.35;
    let fishTotal = fishMenus * 12.40;
    let vegetarianTotal = vegetarianMenus * 8.15;

    let bill = chickenTotal + fishTotal + vegetarianTotal;
    let dessert = bill * 0.20;
    let delivery = 2.50

    let totalSum = bill + dessert + delivery;

    console.log(totalSum);

}
delivery([ "2 ", "4 ", "3 " ]);