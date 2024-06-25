import PropTypes from 'prop-types';
import GlobalItem from './globalItem/GlobalItem';

const GlobalData = ({ data }) => {
  // Si data es un array, tomamos el primer elemento (asumiendo que es el objeto que necesitamos)
  const globalData = Array.isArray(data) ? data[0] : data;

  if (!globalData || typeof globalData !== 'object') {
    return <div>Loading...</div>; 
  }

  return (
    <ul className="grid grid-cols-2 gap-4">
      <GlobalItem title="Total Cases" value={globalData.cases || 0} imgSrc="/assets/images/icons/covid-defult.svg" key="atotal-cases" valueClassName="text-[color:var(--col-common-blue)] font-bold text-4xl" />
      <GlobalItem title="Total Deaths" value={globalData.deaths || 0} imgSrc="/assets/images/icons/covid-red.svg" key="atotal-deaths" valueClassName="text-[color:var(--col-bright-red)] font-bold text-4xl" />
      <GlobalItem title="Total Recovered" value={globalData.recovered || 0} imgSrc="/assets/images/icons/covid-green.svg" key="atotal-green" valueClassName="text-[color:var(--col-green)] font-bold text-4xl" />
      <GlobalItem title="Total Active" value={globalData.active || 0} imgSrc="/assets/images/icons/covid-blue.svg" key="atotal-active" valueClassName="text-[color:var(--col-bright-blue)] font-bold text-4xl" />
      <GlobalItem title="New Cases" value={globalData.todayCases || 0} imgSrc="/assets/images/icons/covid-orange.svg" key="anew-cases" valueClassName="text-[color:var(--col-orange)] font-bold text-4xl" />
      <GlobalItem title="New Deaths" value={globalData.todayDeaths || 0} imgSrc="/assets/images/icons/covid-redark.svg" key="anew-deaths" valueClassName="text-[color:var(--col-wine)] font-bold text-4xl" />
    </ul>
  );
};

GlobalData.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape({
      cases: PropTypes.number,
      deaths: PropTypes.number,
      recovered: PropTypes.number,
      active: PropTypes.number,
      todayCases: PropTypes.number,
      todayDeaths: PropTypes.number,
    }),
    PropTypes.arrayOf(PropTypes.shape({
      cases: PropTypes.number,
      deaths: PropTypes.number,
      recovered: PropTypes.number,
      active: PropTypes.number,
      todayCases: PropTypes.number,
      todayDeaths: PropTypes.number,
    }))
  ]),
};

export default GlobalData;