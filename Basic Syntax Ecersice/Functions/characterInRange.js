function charactersInRange(char1, char2) {
    let rangeStart = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let rangeEnd = Math.max(char1.charCodeAt(), char2.charCodeAt());
    let resultString = "";
    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar);

        resultString += `${singleChar} `;
    }
    console.log(resultString);
}
charactersInRange('C',
    '#'
);