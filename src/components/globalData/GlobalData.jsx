import PropTypes from 'prop-types';

const GlobalData = ({ data }) => {
    return (
      <ul className="">
        <li>Total Cases: {data.cases}</li>
        <li>Total Deaths: {data.deaths}</li>
        <li>Total Recovered: {data.recovered}</li>
        <li>Total Active: {data.active}</li>
        <li>New Cases: {data.todayCases}</li>
        <li>New Deaths: {data.todayDeaths}</li>
      </ul>
    );
  }
  GlobalData.propTypes = {
    data: PropTypes.shape({
      cases: PropTypes.number,
      deaths: PropTypes.number,
      recovered: PropTypes.number,
      active: PropTypes.number,
      todayCases: PropTypes.number,
      todayDeaths: PropTypes.number,
    }).isRequired,
  };
  

  export default GlobalData;
  