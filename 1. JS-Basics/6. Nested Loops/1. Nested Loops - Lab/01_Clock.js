function clock(input) {

    for (let hour = 0; hour <= 23; hour++) {
        for (let mins = 0; mins <= 59; mins++) {
            if (mins < 10) {
                console.log(`Time ${hour}:0${mins}`);
            } else {
                console.log(`Time ${hour}:${mins}`);
            }
        }
    }
}
clock();