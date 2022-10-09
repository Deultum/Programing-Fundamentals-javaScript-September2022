function passwordValidator(password) {
    //•	The length should be 6 - 10 characters (inclusive) - DONE 
    //•	It should consist only of letters and digits
    //•	It should have at least 2 digits 
    let passLength = password.length;
    let digitCounter = 0;
    let isSymbol = false;



    for (let index = 0; index < passLength; index++) {
        let element = password[index].charCodeAt();
        let isNumber = element >= 48 && element <= 57;
        let isSmallLetter = element >= 97 && element <= 122;
        let isCapitalLetter = element >= 65 && element <= 90;
        if (isNumber) {
            digitCounter++;
        } else if (!isSmallLetter && !isCapitalLetter && !isNumber) {
            isSymbol = true;
        }
    }
    if (passLength < 6 || passLength > 10) {
        console.log(`Password must be between 6 and 10 characters`);

    }
    if (isSymbol) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (digitCounter < 2) {
        console.log(`Password must have at least 2 digits`);
    }
    if (digitCounter >= 2 && passLength >= 6 && passLength <= 10 && !isSymbol) {
        console.log(`Password is valid`);
    }

}
passwordValidator('logIn');
