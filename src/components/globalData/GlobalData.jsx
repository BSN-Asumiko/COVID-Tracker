/* import PropTypes from 'prop-types';
import useApi from "@/services/useApi";

const GlobalData = ({ country }) => {
    const url = country 
        ? `https://disease.sh/v3/covid-19/countries/${country}` 
        : 'https://disease.sh/v3/covid-19/all';
    const { data, loading, error } = useApi(url);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;

    return (
        <div>
            <h3>Updated: June 5, 2022</h3>
            <ul>
                <li>Total Cases: {data.cases}</li>
                <li>Total Deaths: {data.deaths}</li>
                <li>Total Recovered: {data.recovered}</li>
                <li>Total Active: {data.active}</li>
                <li>New Cases: {data.todayCases}</li>
                <li>New Deaths: {data.todayDeaths}</li>
            </ul>
        </div>
    );
};

GlobalData.propTypes = {
    country: PropTypes.string,
};

export default GlobalData;
 */