
function blackFlag(input) {
    const days = Number(input[0]);
    const dailyGain = Number(input[1]);
    const plunderGoal = Number(input[2]);
    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyGain
        if (i % 3 == 0) {
            totalPlunder += dailyGain / 2;

        }
        if (i % 5 == 0) {
            totalPlunder *= 0.7;
        }
    }
    if (totalPlunder >= plunderGoal) {

        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentageLeft = (totalPlunder / plunderGoal) * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
    }

}


blackFlag((["5",
    "40",
    "100"])
)