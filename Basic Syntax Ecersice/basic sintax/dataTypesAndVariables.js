function solve(array) {
    let arrayToString = array.toString();
    let sum = 0;
    for (let index = 0; index < arrayToString.length; index++) {
        let element = Number(arrayToString[index]);
        sum += element;


    }
    console.log(sum);

}
solve(97561)