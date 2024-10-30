function emailValidator(input) {

    let userEmail = input.shift();

    let command = input.shift();

    while (command !== "Complete") {

        let spliitedComand = command.split(" ");
        let [name, count] = spliitedComand;

        if (command === "Make Upper") {
            userEmail = userEmail.toUpperCase()
            console.log(userEmail);

        } else if (command === "Make Lower") {
            userEmail = userEmail.toLowerCase();
            console.log(userEmail);

        } else if (name === "GetDomain") {
            count = Number(count);
            let lastCharacters = userEmail.slice(-count);
            console.log(lastCharacters);

        } else if (command === "GetUsername") {

            let klombaIndex = userEmail.indexOf("@");

            if (klombaIndex !== -1) {
                let substring = userEmail.substring(0, klombaIndex);
                console.log(substring);
            } else {
                console.log(`The email ${userEmail} doesn't contain the @ symbol.`);
            }

        } else if (name === "Replace") {
            count = String(count);
            let replacedString = userEmail.replace(new RegExp(count, "g"), "-");

            console.log(replacedString);

        } else if (command === "Encrypt") {
            let array = [];

            for (let i = 0; i < userEmail.length; i++) {
                let current = userEmail.charCodeAt(i);
                array.push(current);
            }

            let result = array.join(' ');
            console.log(result);
        }

        command = input.shift();
    }

}
emailValidator(["AnotherMail.com", "Make Lower", "GetUsername", "Replace a", "Complete"]);