function theFinalQuest(input) {
    
    // •	"Delete {index}":
    // o	Remove the word after the given index if the word exists (if its index is valid).
    // o	Otherwise, skip the command.

    // •	"Put {word} {index}":
    // o	Put the word at the index before the given one (index - 1) if the resulting index is valid. 
    // o	If the word's index is out of range, skip the command.
    // o	Exception: If the given index is equal to the length of the list, you should put the word at the end of the list.

    // •	"Sort":
    // o	You should sort the words in descending order.

    // •	"Replace {word1} {word2}":
    // o	Find the second word in the collection (if it exists) and replace it with the first given word.
    // o	Otherwise, skip the command.
    
    let wordsArray = input.shift().split(" ");
    let command = input.shift();

    while (command !== "Stop") {
        let commandWords = command.split(" ");
        let generalWord = commandWords.shift();

        if (generalWord === "Delete") {
            let removedWordIndex = Number(commandWords.shift());

            if (removedWordIndex >= 0 && removedWordIndex < wordsArray.length) {
                wordsArray.splice(removedWordIndex + 1, 1);
            }

        } else if (generalWord === "Swap") {
            let word1 = commandWords[0];
            let word2 = commandWords[1];

            if (wordsArray.includes(word1) && wordsArray.includes(word2)) {
                let firstIndex = wordsArray.indexOf(word1);
                let secondIndex = wordsArray.indexOf(word2);
                [wordsArray[firstIndex], wordsArray[secondIndex]] = [wordsArray[secondIndex], wordsArray[firstIndex]];
            }

        } else if (generalWord === "Put") {
            let curWord = commandWords.shift();
            let curIndex = commandWords.shift();
            if (curIndex - 1 >= 0 && curIndex < wordsArray.length) {
                wordsArray.splice(curIndex - 1, 0, curWord);
            }

            if (curIndex === wordsArray.length) {
                wordsArray.push(curWord);
            }

        } else if (generalWord === "Sort") {
            wordsArray.sort((a, b) => b.localeCompare(a));

        } else if (generalWord === "Replace") {
            let [firstWord, secondWord] = commandWords;
            let secondCurIndex = wordsArray.indexOf(secondWord);
            if (secondCurIndex !== -1) {
                wordsArray[secondCurIndex] = firstWord;
            }
        }
        command = input.shift();
    }

    console.log(`${wordsArray.join(' ')}`);
}
theFinalQuest(["Congratulations! You last also through the have challenge!", "Swap have last", "Replace made have", "Delete 2", "Put it 4", "Stop"]);