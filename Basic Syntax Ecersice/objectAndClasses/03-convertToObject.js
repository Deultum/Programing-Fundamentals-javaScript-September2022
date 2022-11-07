function convertToObject(dataJASON){
let data = JSON.parse(dataJASON);
for (const key of Object.keys(data)) {
    console.log(`${key}: ${data[key]} `);
    
}

} convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')