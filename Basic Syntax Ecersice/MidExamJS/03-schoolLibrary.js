function library(input) {
    let shelf = input.shift().split(`&`);
    let commandLine = input.shift().split(` | `);
    let command = commandLine[0];
    while (command !== "Done") {
        switch (command) {
            case "Add Book":
                let bookToAdd = commandLine[1];
                if (!shelf.includes(bookToAdd)) {
                    shelf.unshift(bookToAdd);
                }
                break;
            case "Take Book":
                let bookToTake = commandLine[1];
                let indexToStart = shelf.indexOf(bookToTake);
                if (shelf.includes(bookToTake)) {
                    shelf.splice(indexToStart, 1);
                }
                break;
            case "Swap Books":
                let bookOne = commandLine[1];
                let bookTwo = commandLine[2];
                if (shelf.includes(bookOne) && shelf.includes(bookTwo)) {
                    let bookOneIndex = shelf.indexOf(bookOne);
                    let bookTwoIndex = shelf.indexOf(bookTwo);
                    shelf[bookOneIndex] = bookTwo;
                    shelf[bookTwoIndex] = bookOne;
                }
                break;
            case "Insert Book":
                let bookToAddAtEnd = commandLine[1];
                if (!shelf.includes(bookToAddAtEnd)) {
                    shelf.push(bookToAddAtEnd);
                }
                break;
            case "Check Book":
                let indexToCheck = commandLine[1];
                if (indexToCheck >= 0 && indexToCheck < shelf.length) {
                    console.log(`${shelf[indexToCheck]}`);
                }
                break;
        }
        commandLine = input.shift().split(` | `);
        command = commandLine[0];
    } if (command === "Done") {
        console.log(shelf.join(`, `));
    }

}
library(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])


