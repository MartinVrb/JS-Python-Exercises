function login(input) {

    let username = input.shift();
    let pass = username.split('').reverse().join('');

    let guess = input.shift(); // login
    let wrongGuesses = 0;

    while (guess !== pass) {
        wrongGuesses++;

        if (wrongGuesses === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log("Incorrect password. Try again.");
        guess = input.shift();
        
    }


    if (guess === pass) {
        console.log(`User ${username} logged in.`);

    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA']);