function readText(input) {

    let index = 0;

    while (index < input.length) {

        let currentElement = input[index];
        index++;

        if (currentElement === `Stop`) {
            break;
        }

        console.log(currentElement);
    }

}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);