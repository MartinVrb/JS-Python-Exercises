function maxSequenceOfEqualElements(array) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for (let index = 0; index < array.length; index++) {

        if (index !== 0) {
            let currentNumber = Number(array[index]);
            let prevNumber = Number(array[index - 1]);

            if (currentNumber === prevNumber) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceNum = currentNumber;

                }
            } else {
                sequence = 1;
            }
        }
    }

    console.log(`${(maxSequenceNum + ` `).repeat(maxSequence)}`);

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);