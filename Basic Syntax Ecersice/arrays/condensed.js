function condensedArray(numbers) {
    let condensed = [];
    let sum = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        sum = Number(numbers[i]) + Number(numbers[i + 1]);
        condensed[i] = Number(sum);
        if (numbers.length > condensed.length) {
            
            for (let i = 0; i < numbers.length - 1; i++) {
                sum = Number(numbers[i]) + Number(numbers[i + 1]);
                condensed[i] = Number(sum);
        } 
    }console.log(sum);
}
}
condensedArray([2, 10, 3])