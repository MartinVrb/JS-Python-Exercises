function tseamAccount(array) {

    let petersArray = array.shift().split(" ");

    let command = array.shift();

    let gameName = " ";

    while (command !== "Play!") {

        let tokens = command.split(" ");
        let commandsName = tokens.shift();

        switch (commandsName) {
            case "Install":
                gameName = tokens.shift();
                if (!petersArray.includes(gameName)) {
                    petersArray.push(gameName);
                }
                break;

            case "Uninstall":
                gameName = tokens.shift();
                if (petersArray.includes(gameName)) {
                    let indexOfGame = petersArray.indexOf(gameName);
                    petersArray.splice(indexOfGame, 1);
                }
                break;

            case "Update":
                gameName = tokens.shift();
                if (petersArray.includes(gameName)) {
                    let secondIndex = petersArray.indexOf(gameName);
                    petersArray.splice(secondIndex, 1);
                    petersArray.push(gameName);
                }
                break;

            case "Expansion":
                gameName = tokens.shift();
                let [name, expansion] = gameName.split("-");
                if (petersArray.includes(name)) {
                    let thirdIndex = petersArray.indexOf(name);
                    petersArray.splice(thirdIndex + 1, 0, `${name}:${expansion}`);
                }
                break;

        }
        command = array.shift();
    }

    console.log(petersArray.join(" "));

}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);