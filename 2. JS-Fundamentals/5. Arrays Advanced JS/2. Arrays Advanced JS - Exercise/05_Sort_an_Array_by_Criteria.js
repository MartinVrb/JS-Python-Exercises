function sortAnArrayByCriteria(array) {

    let newArray = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(newArray.join('\n'));
}
sortAnArrayByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);