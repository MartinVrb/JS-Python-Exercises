function wordOccurrences(input) {

    let wordsOcc = {};

    for (let word of input) {

        if (!wordsOcc.hasOwnProperty(word)) {
            wordsOcc[word] = 1;
        } else {
            wordsOcc[word] += 1;
        }
    }

    let sortedArray = Object.entries(wordsOcc).sort((a, b) => b[1] - a[1]);

    for (let element of sortedArray) {
        console.log(`${element[0]} -> ${element[1]} times`);
    }


}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);