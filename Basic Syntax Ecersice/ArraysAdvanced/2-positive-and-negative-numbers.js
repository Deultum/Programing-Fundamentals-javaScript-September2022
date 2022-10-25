function positiveAndNegativeNumbers (array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] < 0){
            result.unshift(array[i]);
        } else if (array[i] >= 0) {
            result.push(array[i]);
        }
    }console.log(result.join("\n"));
} 
positiveAndNegativeNumbers(['7', '-2', '8', '9']);
positiveAndNegativeNumbers(['3', '-2', '0', '-1']);