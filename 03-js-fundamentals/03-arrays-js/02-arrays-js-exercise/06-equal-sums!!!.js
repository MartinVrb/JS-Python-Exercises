function equalSum(array) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

    for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
        for (let i = 0; i < array.length; i++) {

            if (i !== currentIndex) {
                let num = Number(array[i]);
                if (i < currentIndex) {
                    leftSum += num;
                } else if (i > currentIndex) {
                    rightSum += num;
                }
            }

            if (currentIndex === 0) {
                leftSum = 0;
            } else if (currentIndex === array.length - 1) {
                rightSum = 0;
            }
        }

        if (leftSum === rightSum) {
            console.log(currentIndex);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }

    if (!isEqual) {
        console.log(`no`);

    }
}
equalSum([1, 2, 3, 3]);