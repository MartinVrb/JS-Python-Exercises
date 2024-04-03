function building(input) {

    let allFloors = Number(input[0]);
    let roomPerFloor = Number(input[1]);

    for (let all = allFloors; all > 0; all--) {

        let buff = ``;

        for (let room = 0; room < roomPerFloor; room++) {

            if (all === allFloors) {
                buff += `L${all}${room} `;
            } else if (all % 2 === 0) {
                buff += `O${all}${room} `;
            } else {
                buff += `A${all}${room} `;
            }

        }

        console.log(buff);

    }
}
building(["6", "4"]);