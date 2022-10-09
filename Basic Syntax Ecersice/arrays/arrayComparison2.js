function identicalArrays(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i])
    }
    for (let i = 0; i < secondArray.length; i++) {
        secondArray[i] = Number(secondArray[i]);
    }
    let arequal = true;
    let sum = 0
    for (let i = 0; i < firstArray.length; i++) {
        sum += (firstArray[i])
        if (firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            arequal = false;
            break;
        } if (firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            arequal = false;
            break;
        }
        else if (arequal) {

           
            console.log(`Arrays are identical. Sum: ${sum}`)



        }
    }
}
identicalArrays(['1', '2', '3', '4', '5'],
    ['1', '2', '4', '4', '5'])