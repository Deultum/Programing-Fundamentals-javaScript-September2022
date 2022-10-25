function movingTargetsShootout(input) {
    let rawTargets = input.shift();
    let targets = rawTargets.split(` `).map(Number);
    let commands = input.shift().split(` `);
    let currentCommand = commands[0];


    while (currentCommand !== "End") {

        let command = commands[0];
        let firstNum = Number(commands[1]);
        let secondNum = Number(commands[2]);
        let target = 0;
        commands = input.shift().split(` `);
        switch (command) {
            case "Shoot":
                if (firstNum >= 0 && firstNum <= targets.length) {

                    target = Number(targets[firstNum]) - secondNum;
                    targets.splice(firstNum, 1, target);
                    if (Number(targets[firstNum]) <= 0) {
                        targets.splice(firstNum, 1);
                    }
                }

                break;
            case "Add":
                if (targets[firstNum]) {
                    targets.splice(firstNum, 0, secondNum);
                } else {
                    console.log(`Invalid placement!`);
                }

                break;
            case "Strike":
                if (firstNum < 0 || firstNum > targets.length || (firstNum - secondNum) < 0 || (firstNum + secondNum) > targets.length) {
                    console.log(`Strike missed!`);
                } else {
                    targets.splice((firstNum - (secondNum)), ((secondNum * 2) + 1));
                }
                break;

        }

        currentCommand = commands[0];


    } if (currentCommand === "End") {
        console.log(targets.join(`|`));
    }

}
movingTargetsShootout(
    (["52 74 23 44 96 110",
        "Shoot 5 10",
        "Shoot 1 80",
        "Strike 2 1",
        "Add 22 3",
        "End"]));
movingTargetsShootout(
    (["1 2 3 4 5",
    "Strike 0 1",
    "End"]));