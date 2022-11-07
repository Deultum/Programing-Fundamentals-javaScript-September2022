function storageTransformator(input) {
    let storage = {};
    for (const supply of input) {
        let [item, quantity] = supply.split(' ');
        quantity = Number(quantity);
        if (storage[item]) {
            quantity += storage[item];
        }
        storage[item] = quantity;
    }
    let storageArray = Object.entries(storage);
    for (const [item, quantity] of storageArray) {
        console.log(`${item} -> ${quantity}`);

    }

} storageTransformator(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)