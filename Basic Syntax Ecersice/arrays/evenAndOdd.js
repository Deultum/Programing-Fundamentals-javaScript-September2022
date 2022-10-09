function sumevenNumbers(array){
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < array.length ; i++){
        let currentNumber = Number(array[i]);
        if (currentNumber % 2 == 0){
            sumEven += currentNumber;
        } else {
sumOdd += currentNumber;
        }
        
    } console.log(sumEven - sumOdd);
    
    } sumevenNumbers ([1,2,3,4,5,6])