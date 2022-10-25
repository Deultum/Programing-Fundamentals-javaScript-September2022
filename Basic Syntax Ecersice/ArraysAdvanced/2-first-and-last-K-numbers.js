function printArrayByGivenNumber(array) {
    let counter = array.shift();
    let firstElement = array.slice(0, counter);
    let lastElement  = array.slice(array.length - counter);
    console.log(firstElement.join(" "));

    console.log(lastElement.join(" "));
    
}
printArrayByGivenNumber([2,
    7, 8, 9]
);