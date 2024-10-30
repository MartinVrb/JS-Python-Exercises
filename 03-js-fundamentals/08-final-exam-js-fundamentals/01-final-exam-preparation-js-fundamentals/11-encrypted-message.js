function decryptMessage(input) {
    let message = input.shift();

    let escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    let index = 0; // To keep track of the current command index

    while (index < input.length) {
        let line = input[index].split('|').map(item => item.trim().toLowerCase());
        let command = line[0];
        let params = line.slice(1);

        switch (command) {
            case 'move':
                let numberOfLetters = Number(params[0]);
                message = message.substring(numberOfLetters) + message.substring(0, numberOfLetters);
                break;
            case 'insert':
                let insertIndex = Number(params[0]);
                let insertValue = params[1];
                if (insertIndex >= 0 && insertIndex <= message.length) {
                    message = message.substring(0, insertIndex) + insertValue + message.substring(insertIndex);
                } else {
                    console.log('Invalid index for Insert command.');
                }
                break;
            case 'changeall':
                let substring = escapeRegExp(params[0]);
                let replacement = params[1];
                let regex = new RegExp(substring, 'g');
                message = message.replace(regex, replacement);
                break;
            case 'decode':
                console.log(`The decrypted message is: ${message}`);
                return; // Terminate the function after decoding
            default:
                console.log(`Invalid command: ${command}`);
                break;
        }

        index++; // Move to the next command
    }

    console.log('Decode command not found.');
}
decryptMessage(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);