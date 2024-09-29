function evenPowers(input){

    for(let i = 0; i <= Number(input[0]); i+= 2){
        let result = Math.pow(2,i)
        console.log(result);
    }
}
evenPowers(["4"]);