function oddAndEvenSum(number){
let numToString = number.toString();
let evenSum = 0;
let oddSum = 0;
let numberAsStringlength = numToString.length;
for (let index = 0; index < numberAsStringlength; index++){
    let currentNumber = Number(numToString[index]);
    if (currentNumber % 2 === 0){
        evenSum += currentNumber;
    } else {
        oddSum += currentNumber;
    }
}
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435)