function repainting(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursOfWork = Number(input[3]);
    let bagPrice = 0.40;

    let nylonTotal = (nylon + 2) * 1.50;
    let paintTotal = (paint * 1.10) * 14.50
    let thinerTotal = (thinner * 5);

    let expenses = nylonTotal + paintTotal + thinerTotal + bagPrice;
    let masterPrice  = (expenses * 0.30) * hoursOfWork;
    let totalPrice = expenses + masterPrice;

    console.log(totalPrice);

}
repainting([ "10 ", "11 ", "4 ", "8 "]);