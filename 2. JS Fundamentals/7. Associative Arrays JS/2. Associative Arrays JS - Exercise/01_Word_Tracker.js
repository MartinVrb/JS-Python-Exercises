function wordTracker(input) {

    let lookingWords = input.shift().split(" ");
    let wordOccurrences = {};

    for (let searchedWord of lookingWords) {
        wordOccurrences[searchedWord] = 0;
    }

    for (let word of input) {
        if (word in wordOccurrences) {
            wordOccurrences[word]++;
        }
    }

    let entries = Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1]);

    for (let [word, occurrencesCount] of entries) {
        console.log(`${word} - ${occurrencesCount}`);
    }


}
wordTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

]);