function towns(array) {

    for (let eachElement of array) {

        let splittedElements = eachElement.split(" |");

        let [town, width, length] = splittedElements;

        width = Number(width).toFixed(2);
        length = Number(length).toFixed(2);

        let objects = { town: town, latitude: width, longitude: length };

        console.log(objects);

    }

}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);