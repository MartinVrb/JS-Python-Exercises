function foreignLanguages(country) {

    let language = "";

    switch (country) {
        case "Spain":
        case "Argentina":
        case "Mexico":
            language = "Spanish";
            break;

        case "USA":
        case "England":
            language = "English";
            break;

        default:
            language = "unknown"
    }

    console.log(language);
}
foreignLanguages("USA");