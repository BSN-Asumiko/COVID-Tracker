export const mapTableHeadToKey = (tableHead) => {
    switch (tableHead) {
        case 'Countries':
            return 'country';
        case 'Cases':
            return 'cases';
        case 'NewCases':
            return 'todayCases';
        case 'Deaths':
            return 'deaths';
        case 'NewDeaths':
            return 'todayDeaths';
        case 'Recovered':
            return 'recovered';
        case 'Active':
            return 'active';
        case 'Critical':
            return 'critical';
        case 'Tested':
            return 'tests';
        default:
            return null;
    }
};

export const sortData = (data, key, direction) => {
    return data.sort((a, b) => {
        const keyA = a[key];
        const keyB = b[key];

        if (keyA < keyB) {
            return direction === 'ascending' ? -1 : 1;
        }
        if (keyA > keyB) {
            return direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });
};

export const filterData = (data, filter) => {
    return data.filter(country =>
            country.country.toLowerCase().includes(filter.toLowerCase())
    );
};
