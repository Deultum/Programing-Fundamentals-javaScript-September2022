function arrayManipulation(numbersArray, actionsArray) {
    let numbersToCut = actionsArray[0];
    let takenNumbers = numbersArray.slice(0, numbersToCut);
    let elementsToDelete = actionsArray[1];
    takenNumbers.splice(0,elementsToDelete);
    let counter = 0;
    for (const number of takenNumbers) {
        if(number === actionsArray[2])
    counter++
    } 
    console.log(`Number ${actionsArray[2]} occurs ${counter} times.`);
}
arrayManipulation(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]);