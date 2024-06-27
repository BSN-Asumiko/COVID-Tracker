export function getTopCountriesByCases(data, topN) {
    const sortedData = data.sort((a, b) => {
        const aCases = Object.values(a.timeline.cases);
        const bCases = Object.values(b.timeline.cases);
        return bCases[bCases.length - 1] - aCases[aCases.length - 1];
    });

    return sortedData.slice(0, topN);
}

export function transformDataForChart(country) {
    console.log(country)
    let dates = Object.keys(country.timeline.cases).sort((a, b) => new Date(a) - new Date(b)) || [];

    let casesData = [];
    let deathsData = [];
    let recoveredData = [];

    dates.forEach(date => {
        casesData.push({ date: date, value: country.timeline.cases[date] });
        deathsData.push({ date: date, value: country.timeline.deaths[date] });
        recoveredData.push({ date: date, value: country.timeline.recovered[date] });
    });

    return { dates, casesData, deathsData, recoveredData };
}
