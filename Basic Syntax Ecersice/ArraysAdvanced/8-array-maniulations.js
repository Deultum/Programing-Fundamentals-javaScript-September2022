function arrayManipulation(commands) {
    let numbersArray = [commands.shift(0)];
    let array = commands
        .shift()
        .split(" ")
        .map(Number);

console.log(array);
    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] =
            commands[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                numbersArray.push(firstNum);
                break;
            case "Remove":
                for (const match of numbersArray) {
                    if (firstNum == match) {
                        numbersArray.splice((match.indexOf(match)), 1);
                    }
                }
                break;
            case "RemoveAt":
                break;
            case "Insert":
                break;

                break;

            default:
                break;
        }
    }

}



arrayManipulation
    (['4 19 2 53 6 43',
        'Add 3',
        'Remove 2',
        'RemoveAt 1',
        'Insert 8 3']);