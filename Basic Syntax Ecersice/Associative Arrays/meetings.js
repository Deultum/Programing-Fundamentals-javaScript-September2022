function meetings(input) {
    let list = {};
    for (const line of input) {
        let [day, name] = line.split(' ');

        if (list[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            list[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }

    for (let day in list) {
        console.log(`${day} -> ${list[day]}`);
    }

} meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)