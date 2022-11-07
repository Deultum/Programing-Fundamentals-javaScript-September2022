function storeProvision(onStock, purchased) {
    const storedProducts = {};
    const onStockLength = onStock.length;
    const purchasedLength = purchased.length;
    for (let index = 0; index < onStockLength; index += 2) {
        let currentProduct = onStock[index];

        storedProducts[currentProduct] = Number(onStock[index + 1]);
    }
    for (let index = 0; index < purchasedLength; index += 2) {
        const currentProduct = purchased[index];
        if (!storedProducts.hasOwnProperty(currentProduct)) {
            storedProducts[currentProduct] = 0;

        } storedProducts[currentProduct] += Number(purchased[index + 1]);
    }
    for (const product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);   
        }
    }






storeProvision
    ([
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'
    ],
        [
            'Flour', '44', 'Oil', '12', 'Pasta', '7',
            'Tomatoes', '70', 'Bananas', '30'
        ]);