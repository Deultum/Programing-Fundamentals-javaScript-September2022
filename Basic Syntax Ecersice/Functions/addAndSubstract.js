function addAndSubstractNumbers(number1, number2    , num3) {
    
    function add(num1, num2) {
        let sum = Number(num1 + num2);
        return sum;
    }
    let subtract = add(number1, number2) - num3;
    console.log(subtract);
}
addAndSubstractNumbers(23, 6, 10);