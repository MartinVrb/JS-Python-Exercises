function specialNumbers(input) {

    let num = Number(input[0]);

    let specialDigits = 0;

    let result = ``;

    for (let i = 1111; i <= 9999; i++) {

        let iToStr = String(i);

        for (let options = 0; options < iToStr.length; options++) {

            let digit = Number(iToStr[options]);

            if (num % digit === 0) {

                specialDigits++;

            } else if (num % digit !== 0) {
                break;
            }
        }

        if (specialDigits === 4) {
            result += `${i} `;
        }

        specialDigits = 0;
    }

    console.log(result);

}
specialNumbers(["3"]);