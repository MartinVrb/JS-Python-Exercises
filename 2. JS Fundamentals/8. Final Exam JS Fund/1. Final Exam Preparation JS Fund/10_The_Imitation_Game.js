function theImitationGame(input) {

    let arr = input.slice(0);
    let encryptedMessage = arr.shift();
    let currentLine = arr.shift();

    while (currentLine !== "Decode") {

        let tempMessage = " ";
        let tokens = currentLine.split("|");

        let command = tokens.shift();

        if (command === "Move") {

            let lettersNumber = Number(tokens.shift());
            let lettersToMove = encryptedMessage.substring(0, lettersNumber);
            tempMessage = encryptedMessage.replace(lettersToMove, "");
            tempMessage += lettersToMove;
            encryptedMessage = tempMessage;

        } else if (command === "Insert") {
            let index = Number(tokens.shift());
            let value = tokens.shift();

            tempMessage = encryptedMessage.split("");
            tempMessage.splice(index, 0, value);
            encryptedMessage = tempMessage.join("");

        } else if (command === "ChangeAll") {
            let substring = tokens.shift();
            let replacement = tokens.shift();

            while (encryptedMessage.includes(substring)) {
                tempMessage = encryptedMessage.replace(substring, replacement);
                encryptedMessage = tempMessage;
            }
            encryptedMessage = tempMessage;
        }

        currentLine = arr.shift();
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);

}
theImitationGame(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);