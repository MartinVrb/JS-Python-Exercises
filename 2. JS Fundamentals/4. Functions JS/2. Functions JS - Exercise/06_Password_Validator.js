function passwordValidator(password) {
    let isValidLength = passLength(password);
    let hasOnlyLettersDigits = checkOnlyLettersDigits(password);
    let hasMin2Digits = checkDigitsCount(password);

    if (isValidLength === true && hasOnlyLettersDigits === true && hasMin2Digits === true) {

        console.log("Password is valid");
    }

    function passLength(passHowLong) {

        if (passHowLong.length < 6 || passHowLong.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }

        return true;


    }

    function checkOnlyLettersDigits(password) {
        let pattern = /^[A-Za-z0-9]+$/;

        let isValid = pattern.test(password);

        if (isValid === true) {
            return true;
        }

        console.log("Password must consist only of letters and digits");
        return false;
    }

    function checkDigitsCount(password) {
        let pattern = /[0-9]{2,}/;

        let isValid = pattern.test(password);

        if (isValid === true) {
            return true;
        }

        console.log("Password must have at least 2 digits");
        return false;

    }

}
passwordValidator('MyPass123');