function calcultor(num1, operator, num2) {
    switch (operator) {
        case `+`:
            console.log((num1 + num2).toFixed(2));
            break;
        case `-`:
            console.log((num1 - num2).toFixed(2));
            break;
        case `*`:
            console.log((num1 * num2).toFixed(2));
            break;
        case `/`:
            console.log((num1 / num2).toFixed(2));
            break;
        default:
            break;
    }
} calcultor(25.5,
    '-',
    3
    
);