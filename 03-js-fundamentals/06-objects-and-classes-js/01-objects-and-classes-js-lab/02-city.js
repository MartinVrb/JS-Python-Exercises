function city(city) {

    for (let [key, value] of Object.entries(city)) {
        console.log(key, "->", value);
    }

}
city({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" });