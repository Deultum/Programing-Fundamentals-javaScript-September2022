function bombNumbers(initialArray, bombArray) {
    let bomb = bombArray[0];
    let power = bombArray[1];
    let sum = 0;
    let bombIndex = initialArray.indexOf(bomb);
    for (const counter of initialArray) {
        if (counter === bomb) {
            if ((bombIndex - power) < 0) {
                bombIndex = 0;
                initialArray.splice(bombIndex, ((power * 2) + 1));
            } else {
                initialArray.splice((bombIndex - (power)), ((power * 2) + 1));
            }
        }
    }
    for (const num of initialArray) {
        sum += num;
    }
    console.log(sum);
}
bombNumbers(
    [1, 7, 7, 1, 2, 3],
    [7, 1]
);