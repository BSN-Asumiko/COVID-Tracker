import PropTypes from 'prop-types';
import GlobalItem from './GlobalItem';

const GlobalData = ({ data }) => {
  return (
    <ul className="grid grid-cols-2 gap-4">
      <GlobalItem title="Total Cases" value={data.cases} imgSrc="/path/to/image.png" key="atotal-cases" valueClassName="text-[color:var(--col-common-blue)] font-bold text-4xl" />
      <GlobalItem title="Total Deaths" value={data.deaths} imgSrc="/path/to/image.png" key="atotal-deaths" valueClassName="text-[color:var(--col-bright-red)] font-bold text-4xl" />
      <GlobalItem title="Total Recovered" value={data.recovered} imgSrc="/path/to/image.png" key="atotal-recovered" valueClassName="text-[color:var(--col-green)] font-bold text-4xl" />
      <GlobalItem title="Total Active" value={data.active} imgSrc="/path/to/image.png" key="atotal-active" valueClassName="text-[color:var(--col-bright-blue)] font-bold text-4xl" />
      <GlobalItem title="New Cases" value={data.todayCases} imgSrc="/path/to/image.png" key="anew-cases" valueClassName="text-[color:var(--col-orange)] font-bold text-4xl" />
      <GlobalItem title="New Deaths" value={data.todayDeaths} imgSrc="/path/to/image.png" key="anew-deaths" valueClassName="text-[color:var(--col-wine)] font-bold text-4xl" />
    </ul>
  );
};
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
  


