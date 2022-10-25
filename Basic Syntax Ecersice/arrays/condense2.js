function condensationOfArrays(array){
    let condensed = [];
    if (array.length > 1){
        while (array.length > 1) {
            for (let i = 0; i <= array.length; i++) {
                condensed[i] = array[i] + array[i + 1];
                
            } if (condensed.length > 1){
                array = condensed;
                condensed = [];
            }
        }
    } 
}