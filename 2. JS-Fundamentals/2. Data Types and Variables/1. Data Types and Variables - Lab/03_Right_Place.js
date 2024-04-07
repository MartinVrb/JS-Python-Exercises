function rigthPlace(firstString, character, secondString) {

    let newWord = ``;

    for (let start = 0; start < firstString.length; start++) {

        let curChar = firstString[start];

        if (curChar !== "_") {
            newWord += curChar;
        }

        if (curChar === "_") {
            curChar = character;
            newWord += curChar;
        }
    }

    if (newWord === secondString) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}
rigthPlace('Str_ng', 'i', 'String');