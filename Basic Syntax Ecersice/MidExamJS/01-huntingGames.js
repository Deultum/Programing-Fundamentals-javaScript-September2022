function huntingGames(input) {
    let days = Number(input.shift());
    let players = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterperDay = Number(input.shift());
    let foodPerDay = Number(input.shift());
    let energyLost = Number(input.shift());
    let groupWater = (players * waterperDay) * days;
    let groupFood = (players * foodPerDay) * days;
    let daysCounter = 0;

    for (let i = 1; i <= days; i++) {
        daysCounter++;
        groupEnergy -= energyLost;

        if (daysCounter % 2 === 0) {
            groupEnergy = groupEnergy * 1.05;
            groupWater = groupWater * 0.7;
        }
        if (daysCounter % 3 === 0) {
            groupEnergy = groupEnergy * 1.1;
            groupFood -= groupFood / players;

        }
        energyLost = Number(input.shift());
        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${groupFood.toFixed(2)} food and ${groupWater.toFixed(2)} water.`);
            break;
        }

    }
    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }


}
huntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"]);
