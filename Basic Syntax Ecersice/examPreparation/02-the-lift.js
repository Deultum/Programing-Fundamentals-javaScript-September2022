function liftFill(input) {
    let peopleWaiting = Number(input.shift());
    let wagons = input.shift().split(" ").map(Number);
    const capacity = 4;
    let totalCapacity = wagons.length * 4;
    let peopleToEnter = 0;
    for (let i = 0; i < totalCapacity; i++) {
        if (Number(wagons[i]) < capacity) {
            peopleToEnter = capacity - Number(wagons[i])
            if (peopleToEnter > peopleWaiting){
                peopleToEnter = peopleWaiting;
            }
                                
            peopleWaiting -= peopleToEnter;
            wagons.splice(i, 1, peopleToEnter + Number(wagons[i]));
            
            if (peopleWaiting <= 0) {
                
                for (let k = 0; k < wagons.length; k++) {
                    if (Number(wagons[k] == 0)) {
                        wagons.pop(k);
                        
                    }

                }
                console.log(`The lift has empty spots!`);
                console.log(wagons.join(` `));
                break;
            }
        }
    } if (peopleWaiting > 0){
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(wagons.join(` `));
    }

}


liftFill([
    "150",
    "0 0 0 0 0"
]
)