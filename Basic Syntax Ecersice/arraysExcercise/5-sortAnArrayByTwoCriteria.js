function sortAnArray(array) {
let sortedArray = array.sort((a,b) => {
    return a.length - b.length || a.localeCompare(b);
})
console.log(sortedArray.join(`\n`));
}
sortAnArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])