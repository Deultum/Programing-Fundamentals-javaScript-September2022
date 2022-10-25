function squash(input) {

    if (input.length == 1) {
        console.log(`${Number(input[0])}`);
        return;
    }

    let output = [];
    let total = 0;

    while (input.length > 2) {

        for (let i = 0; i < input.length - 1; i++) {
            let sum = Number(input[i]) + Number(input[i + 1]);
            output.push(sum);
        }

        input = output;
        output = [];
    }

    total = Number(input[0]) + Number(input[1]);

    console.log(`${Number(total)}`);

}


squash([2, 10, 3]);