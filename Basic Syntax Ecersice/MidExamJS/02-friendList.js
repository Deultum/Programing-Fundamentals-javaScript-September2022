function friendList(input) {
    let friends = input.shift().split(", ");
    let commandLine = input.shift().split(" ");
    let command = commandLine[0];
    let index = 0;
    let nameToChange = "";
    let blackList = [];

    let blackListCounter = 0;
    let lostNamesCounter = 0;

    while (command !== "Report") {
        switch (command) {
            case "Blacklist":
                let nameToBlackList = commandLine[1];
                blackList.push(nameToBlackList);
                if (friends.includes(nameToBlackList)) {
                    blackListCounter += 1;
                    indexToRemove = friends.indexOf(nameToBlackList)
                    friends.splice(indexToRemove, 1, "Blacklisted")
                    console.log(`${nameToBlackList} was blacklisted.`);
                } else {
                    console.log(`${nameToBlackList} was not found.`);
                }
                break;
            case "Error":
                index = Number(commandLine[1]);

                if (index >= 0 && index <= friends.length) {
                    let nameToCheck = friends[index];
                    if (nameToCheck != "Blacklisted" && nameToCheck != "Lost"){
                        lostNamesCounter +=1;
                    friends.splice(index, 1, "Lost");
                    console.log(`${nameToCheck} was lost due to an error.`);

                } 
            }
                break;
            case "Change":
                index = Number(commandLine[1]);
                nameToChange = commandLine[2];
                if (index >= 0 && index < friends.length) {
                    let oldName = friends[index];
                    friends.splice(index, 1, nameToChange);
                    console.log(`${oldName} changed his username to ${nameToChange}.`);
                }
                break;


        }

        commandLine = input.shift().split(` `);
        command = commandLine[0];
    }
    if (command === "Report") {
        console.log(`Blacklisted names: ${blackListCounter}`);
        console.log(`Lost names: ${lostNamesCounter}`);
        console.log(friends.join(" "));
    }

}
friendList(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"]);



