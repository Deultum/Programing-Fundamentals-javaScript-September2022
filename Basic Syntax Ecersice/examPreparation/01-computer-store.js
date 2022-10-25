function computerStore(input) {
    let totalPriceNoTax = 0;
    let taxes = 0;
    let vipPriceWithTax = 0;

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        if ((element == "Special" || element == "regular") && totalPriceNoTax == 0) {
            console.log(`Invalid order!`);
            break;
        }
        if (element == "special") {
            vipPriceWithTax = (totalPriceNoTax + taxes) * 0.9;

            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${vipPriceWithTax.toFixed(2)}$`);

        } else if (element == "regular") {
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${(totalPriceNoTax + taxes).toFixed(2)}$`);
        } else {
            let price = Number(element);
            if (price <= 0) {
                console.log("Invalid price!");
            } else {
                taxes += (price * 1.2) - price;
                totalPriceNoTax += price;
            }
        }
    }

}
computerStore
    ([
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0', 'regular'
    ])
    ;


