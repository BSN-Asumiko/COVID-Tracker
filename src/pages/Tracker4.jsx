import { useState, useEffect } from 'react';
import WidgetHead from '@/components/tracker/widgetHead/WidgetHead';
import GlobalItem from '@/components/tracker/globalData/globalItem/GlobalItem';
import useApi from '@/services/useApi';
import { URL_COUNTRIES } from '@/config/urls';
import ButtonBadge from '@/components/buttonBadge/ButtonBadge';
import Loader from '@/components/tracker/loader/Loader';
import Error from '@/components/tracker/error/Error';

const Tracker4 = () => {
  const {data, loading, error} = useApi(URL_COUNTRIES);
  const displayData = data.sort((a, b) => b.deaths - a.deaths).slice(0, 9);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState({});

  const filterCountry = (country) => {
    setSelectedCountry(country.country);
    setCountryData(displayData.find(item => item.country === country.country));
  };

  useEffect(() => {
    if (displayData.length > 0 && !selectedCountry) {
      setSelectedCountry(displayData[0].country);
      setCountryData(displayData[0]);
    }
  }, [displayData, selectedCountry]);

  return (
    <section className='flex flex-col justify-start'>
        <WidgetHead className="mx-2 lg:mx-4" text="Covid-19 Country Wise - Tabs" />
        {loading?
        <Loader />
        :error?
        <Error />
        :
        (<>
      <div className="">
        <ul className="flex flex-wrap mx-2 mt-3 mb-4 lg:mx-4 sm:justify-start">
          {displayData.map((item, index) => (
            <ButtonBadge handleClick={filterCountry} key={index} country={item} isSelected={item.country === selectedCountry} />
          ))}
        </ul>
      </div>

      <div className="grid w-full grid-cols-2 mt-3 justify-item-start lg:grid-cols-4">
        <GlobalItem title="Total Cases" value={countryData?.cases} imgSrc="/assets/images/icons/covid-defult.svg" valueClassName="text-[color:var(--col-common-blue)]" />
        <GlobalItem title="Total Deaths" value={countryData?.deaths} imgSrc="/assets/images/icons/covid-red.svg" valueClassName="text-[color:var(--col-bright-red)]" />
        <GlobalItem title="Total Recovered" value={countryData?.recovered} imgSrc="/assets/images/icons/covid-green.svg" valueClassName="text-[color:var(--col-green)]" />
        <GlobalItem title="Total Active" value={countryData?.active} imgSrc="/assets/images/icons/covid-blue.svg" valueClassName="text-[color:var(--col-bright-blue)]" />
        <GlobalItem title="New Cases" value={countryData?.todayCases} imgSrc="/assets/images/icons/covid-orange.svg" valueClassName="text-[color:var(--col-orange)]" />
        <GlobalItem title="New Deaths" value={countryData?.todayDeaths} imgSrc="/assets/images/icons/covid-redark.svg" valueClassName="text-[color:var(--col-wine)]" />
      </div>
      </>)}
    </section>
  );
};

export default Tracker4;
