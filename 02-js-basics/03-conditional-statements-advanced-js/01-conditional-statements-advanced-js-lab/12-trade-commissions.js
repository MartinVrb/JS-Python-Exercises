function tradeCommissions(input) {

    let city = input[0];
    let salesVolume = Number(input[1]);


    switch (city) {
        case "Sofia":
            if (salesVolume >= 0 && salesVolume <= 500) {
                console.log((salesVolume * 0.05).toFixed(2));
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                console.log((salesVolume * 0.07).toFixed(2));
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                console.log((salesVolume * 0.08).toFixed(2));
            } else if (salesVolume > 10000) {
                console.log((salesVolume * 0.12).toFixed(2));
            } else {
                console.log(`error`);
            }
            break;
        case "Varna":
            if (salesVolume >= 0 && salesVolume <= 500) {
                console.log((salesVolume * 0.045).toFixed(2));
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                console.log((salesVolume * 0.075).toFixed(2));
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                console.log((salesVolume * 0.10).toFixed(2));
            } else if (salesVolume > 10000) {
                console.log((salesVolume * 0.13).toFixed(2));
            } else {
                console.log(`error`);
            }
            break;
        case "Plovdiv":
            if (salesVolume >= 0 && salesVolume <= 500) {
                console.log((salesVolume * 0.055).toFixed(2));
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                console.log((salesVolume * 0.08).toFixed(2));
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                console.log((salesVolume * 0.12).toFixed(2));
            } else if (salesVolume > 10000) {
                console.log((salesVolume * 0.145).toFixed(2));
            } else {
                console.log(`error`);
            }
            break;

        default:
            console.log(`error`);
    }

    // Град    0 ≤ s ≤ 500     500 < s ≤ 1 000    1 000 < s ≤ 10 000      s > 10 000

    // Sofia       5%               7%                    8%                   12%

    // Varna       4.5%           7.5%                    10%                   13%

    // Plovdiv     5.5%            8%                     12%                  14.5%


}
tradeCommissions(["Sofia", "1500"]);