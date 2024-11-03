function extractNonDecreasingSubset(numbers) {
    let result = [];
    let currentMax = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] >= currentMax) {
            result.push(numbers[i]);
            currentMax = numbers[i];
        }
    }

    result.unshift(numbers[0]);

    console.log(result.join(' '));
}
extractNonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
