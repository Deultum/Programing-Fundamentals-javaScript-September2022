function reverseArrayOfNumbers(number, array) {
    let newArray = [];
    for (let i = 0; i < number; i++) {
        
        newArray[number - 1  - i] = array[i] ;
    }
    console.log(newArray.join(` `));
   
    

} reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);