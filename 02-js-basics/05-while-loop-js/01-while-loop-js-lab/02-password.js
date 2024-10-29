function password(input) {

    let username = input[0];
    let password = Number(input[1]);
    let data = input[2];
    let index = 3;

    while (index < input.length) {

        let element = Number(input[index]);
        index++

        if (element === password) {
            break;
        }

    }

    console.log(`Welcome ${username}!`);
}
password(["Nakov",

"1234",

"Pass",

"1324",

"1234"]);