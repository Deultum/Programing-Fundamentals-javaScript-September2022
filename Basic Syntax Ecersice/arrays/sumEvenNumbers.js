function sumevenNumbers(array){
let sum = 0;
for (let i = 0; i < array.length ; i++){
    let currentNumber = Number(array[i]);
    if (currentNumber % 2 == 0){
        sum += currentNumber;
    }
    
} console.log(sum);

} sumevenNumbers (['2','4','6','8','10'])