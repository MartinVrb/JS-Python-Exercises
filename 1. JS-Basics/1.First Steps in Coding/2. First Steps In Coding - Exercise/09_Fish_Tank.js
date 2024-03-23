function fishTank(input){

    let lengthSm = Number(input[0]);
    let widthSm = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]/100);

    let aquariumVolumeSm = lengthSm * widthSm * height;

    let aquariumLiters = aquariumVolumeSm / 1000;

    let total = aquariumLiters * 0.83;

    console.log(total);

}
fishTank([ "85 ", "75 ", "47 ", "17 "]);