function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let prevNumber = Number(arr[i - 1]);

            for (let cur = i; cur < arr.length; cur++) {
                let currentNumber = Number(arr[cur]);
                let sum = prevNumber + currentNumber;

                if (sum === num) {

                    console.log(`${prevNumber} ${currentNumber}`);

                }
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6], 6);