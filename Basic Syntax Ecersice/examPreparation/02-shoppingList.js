function shoppingListmanipulator(array) {
    let rawList = array.shift();
    let shoppingList = rawList.split("!")
    
    let commands = array.slice();
    let currentInstruction = commands.shift();
    while (currentInstruction !== "Go Shopping!") {
        let splitLines = currentInstruction.split(` `);
        let command = splitLines[0];
        let firstArg = splitLines[1];
        let secondArg = splitLines[2];
        switch (command) {
            case "Urgent":
                if (!shoppingList.includes(firstArg)) {
                    shoppingList.unshift(firstArg);
                }
                break;
            case "Unnecessary":
                let itemIndex = shoppingList.indexOf(firstArg);
                if (itemIndex > -1) {
                    shoppingList.splice(itemIndex, 1);
                    // shoppingList = shoppingList.filter(x => x != firstArg);
                }
                break;
            case "Correct":
                let updateIndex = shoppingList.indexOf(firstArg);
                if (updateIndex > -1) {
                    shoppingList[updateIndex] = secondArg;
                }
                break;
            case "Rearrange":
                let removeIndex = shoppingList.indexOf(firstArg);
                if (removeIndex > -1) {
                    let element = shoppingList[removeIndex];
                    shoppingList.splice(removeIndex, 1,);
                    shoppingList.push(element);
                }
                break;
        }
        currentInstruction = commands.shift();
    }

    console.log(shoppingList.join(", "));
}

shoppingListmanipulator(
    (["Tomatoes!Potatoes!Bread",
        "Unnecessary Milk",
        "Urgent Tomatoes",
        "Go Shopping!"]));
shoppingListmanipulator(
    (["Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"]));