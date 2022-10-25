function trainWagons(array){
let passangersInTrain = array
.shift()
.split(" ")
.map(Number);
let maxCapacity = Number(array.shift());
let arrayLength = array.length;
for(let i = 0; i < arrayLength ; i++){
let command = array[i].split(' ');
if (command[0] === "Add"){
let newArrivals = Number(command[1]);
    passangersInTrain.push(newArrivals)
} else {
for (let k = 0; k < passangersInTrain.length ; k++){
    let passangersInWagon = passangersInTrain[k]
    if (newArrivals){

    }
}
}

}
trainWagons(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)