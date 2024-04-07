function echoType(num) {

    console.log(typeof num);

    if (typeof(num) === `string` || typeof(num) === `number`) {
        console.log(num);
    } else {
        console.log("Parameter is not suitable for printing");
    }

}
echoType(18);