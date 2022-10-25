function memorygame(input) {
    let array = input.shift().split(" ");
    let commandLine = input.shift().split(" ");
    let command = commandLine[0];
    let movesCounter = 0;
    let elementOne = "";
    let elementTwo = "";
    while (command !== "end") {
        let indexOne = Number(commandLine[0]);
        let indexTwo = Number(commandLine[1]);
        elementOne = array[indexOne] + "";
        elementTwo = array[indexTwo] + "";
        movesCounter++
        if ((indexOne || indexTwo) < 0 || (indexOne || indexTwo) > array.length) {
            console.log(`Invalid input! Adding additional elements to the board`);
            array.splice((array.length / 2), 0, `-${movesCounter}a`);
            array.splice((array.length / 2), 0, `-${movesCounter}a`);
        }
        if (elementOne == elementTwo) {
            array.splice(indexOne, 1);
            array.splice(indexTwo, 1);
            console.log(`Congrats! You have found matching elements - ${elementOne}`);

        } else if (elementOne != elementOne){
            console.log(`Try again!`);
        } else if (array.length < 0) {
            console.log(`You have won in ${movesCounter} turns!`);
        }


        commandLine = input.shift().split(" ");
    } if (command === "end"){
        if(array.length > -1 ){
            console.log(`Sorry you lose :(`);
            console.log(array);

        }
    }
} 
memorygame(
    [
        "1 1 2 2 3 3 4 4 5 5",
        "1 0",
        "-1 0",
        "1 0",
        "1 0",
        "1 0",
        "end"
    ]);