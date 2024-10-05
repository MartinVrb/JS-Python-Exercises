function registration(input) {

    let inputsCount = Number(input.shift());
    let index = 0;
    let isIt = true;
    let username = ``;
    let myPass = ``;
    let successful = 0;

    while (index < inputsCount) {

        let curRegistra = input[index];

        let startUserIn = curRegistra.indexOf("U$") + 2;
        let endUserIn = curRegistra.indexOf("U$", startUserIn);

        if (startUserIn !== -1 && endUserIn !== -1) {
            username = curRegistra.substring(startUserIn, endUserIn);

            if (!/^[A-Z][a-z]{2,}$/.test(username)) {
                isIt = false;
            }

        } else {
            isIt = false;
        }

        let startPassIn = curRegistra.indexOf("P@$") + 3;
        let endPassIn = curRegistra.lastIndexOf("P@$");

        if (startPassIn === endPassIn) {
            isIt = false;
        } else {
            myPass = curRegistra.substring(startPassIn, endPassIn);

            if (!/^[a-zA-Z]{5,}\d+$/.test(myPass)) {
                isIt = false;
            }

        }

        if (isIt === false) {
            console.log("Invalid username or password");
        } else {
            successful++;
            console.log("Registration was successful");
            console.log(`Username: ${username}, Password: ${myPass}`);
        }

        isIt = true;
        index++;
    }

    console.log(`Successful registrations: ${successful}`);

}
registration(["3", "U$myU$-->P@$asdqwe123P@$", "Sara 1232412", "U$NameU$P@$Pass234P@$"]);