function palindromeIntegers(numbersArray){
    let numbersArrayLength = numbersArray.length;
    for (let i = 0; i < numbersArrayLength; i++){
        let numberAsString = numbersArray[i].toString();
        let reversedString = numberAsString.split("").reverse().join("");
        if (reversedString === numberAsString){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([123,323,421,121])