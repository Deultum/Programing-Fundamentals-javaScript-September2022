function employeesListData(list) {
    let employeesList = {}
    list.forEach(person => {
        employeesList[person] = person.length;
    });

    for (const key in employeesList) {
        console.log(`Name: ${key} -- Personal Number: ${employeesList[key]}`);

    }
}


employeesListData([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

