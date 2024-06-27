export const transformData = (data)  => {
    let result = [];
    let dates = new Set();


    for (let category in data) {
        for (let date in data[category]) {
            dates.add(date);
        }
    }


    dates.forEach(date => {
        let entry = { date: date };
        for (let category in data) {
            entry[category] = data[category][date] || null; 
        }
        result.push(entry);
    });

    return result;
}
