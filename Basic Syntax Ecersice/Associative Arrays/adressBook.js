function printAddressBook(input) {
    let addressBook = {};

    for (const data of input) {
        let [name, address] = data.split(`:`);
        addressBook[name] = address;
    }
    let addressBookEntries = Object.entries(addressBook);
    addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
    
    for (const entry of addressBookEntries) {
        let[name, address] = entry;
        console.log(`${name} -> ${address}`);
    }




} printAddressBook(
    ['Bob:Huxley Rd',
        'John:Milwaukee Crossing',
        'Peter:Fordem Ave',
        'Bob:Redwing Ave',
        'George:Mesta Crossing',
        'Ted:Gateway Way',
        'Bill:Gateway Way',
        'John:Grover Rd',
        'Peter:Huxley Rd',
        'Jeff:Gateway Way',
        'Jeff:Huxley Rd']
)