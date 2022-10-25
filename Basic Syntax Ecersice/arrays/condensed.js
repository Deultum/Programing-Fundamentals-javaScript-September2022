function condensedArray(numbers) {
    let condensed = []
    let sum = 0;
    if (numbers.length == 1) {
        console.log(`${Number(numbers[0])}`);
        return;
    }
    while (numbers.length > 2) {
        for (let i = 0; i < numbers.length - 1; i++) {
            sum = Number(numbers[i]) + Number(numbers[i + 1]);
            condensed.push(sum);
        }
        numbers = condensed;
        condensed = [];
    }
    sum = Number(numbers[0]) + Number(numbers[1]);
    console.log(Number(sum));
}
condensedArray([5,0,4,1,2])