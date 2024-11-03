function addAndRemove(array) {

    let newArr = [];
    let num = 0;

    for (let cur of array) {

        if (cur === "add") {
            num += 1;
            newArr.push(num);

        } else if (cur === "remove") {
            num += 1;
            let removed = newArr.pop();
        }

    }

    if (newArr.length === 0) {
        console.log("Empty");
    } else {
        console.log(newArr.join(" "));
    }

}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);