function palindromeIntegers(arr) {

    for (let num of arr) {
        let isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);

    }

    function checkIfPalindrome(number) {
        let numAsStr = String(number);
        let reversedString = numAsStr.split(``).reverse().join(``);

        if (numAsStr === reversedString) {
            return "true";
        } else {
            return "false";
        }
    }
}
palindromeIntegers([32, 2, 232, 1010]);