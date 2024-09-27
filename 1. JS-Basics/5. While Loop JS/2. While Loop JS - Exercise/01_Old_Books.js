function oldBooks(input) {

    let favoriteBook = input[0];
    let index = 1;
    let checkedBooks = 0;

    while (index < input.length) {

        let currentBook = input[index];

        if (currentBook === favoriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            break;
        } else if (currentBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${checkedBooks} books.`);
            break;
        }

        checkedBooks++;
        index++;

    }

}
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"])