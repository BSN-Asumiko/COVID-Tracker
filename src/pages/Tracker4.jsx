import { useState, useEffect } from 'react';
import WidgetHead from '@/components/tracker/widgetHead/WidgetHead';
import GlobalItem from '@/components/tracker/globalData/globalItem/GlobalItem';
import useApi from '@/services/useApi';
import { URL_COUNTRIES } from '@/config/urls';
import ButtonBadge from '@/components/buttonBadge/ButtonBadge';

const Tracker4 = () => {
  const data = useApi(URL_COUNTRIES)
  const displayData = data.sort((a, b) => b.deaths - a.deaths).slice(0, 9)

  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState({});

  const filterCountry = (country) => {
    console.log(country);
    setSelectedCountry(country.country);
    setCountryData(displayData.find(item => item.country === country.country));
  };

  useEffect(() => {
    if (displayData.length > 0) {
      setCountryData(displayData[0]);
    }
  }, [displayData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full">
        <WidgetHead text="Covid-19 Country Wise - Tabs" />
        <ul className="flex flex-wrap mb-4 sm:justify-start">
    {displayData.map((item, index) => (
        <ButtonBadge handleClick={filterCountry} key={index} country={item} />
    ))}
</ul>
      </div>

      <div className="grid justify-start grid-cols-2 lg:grid-cols-4 ">
        <GlobalItem title="Total Cases" value={countryData?.cases} imgSrc="/assets/images/icons/covid-defult.svg" valueClassName="text-[color:var(--col-common-blue)]"/>
        <GlobalItem title="Total Deaths" value={countryData?.deaths} imgSrc="/assets/images/icons/covid-red.svg" valueClassName="text-[color:var(--col-bright-red)]"/>
        <GlobalItem title="Total Recovered" value={countryData?.recovered} imgSrc="/assets/images/icons/covid-green.svg" valueClassName="text-[color:var(--col-green)]"/>
        <GlobalItem title="Total Active" value={countryData?.active} imgSrc="/assets/images/icons/covid-blue.svg" valueClassName="text-[color:var(--col-bright-blue)]"/>
        <GlobalItem title="New Cases" value={countryData?.todayCases} imgSrc="/assets/images/icons/covid-orange.svg" valueClassName="text-[color:var(--col-orange)]"/>
        <GlobalItem title="New Deaths" value={countryData?.todayDeaths} imgSrc="/assets/images/icons/covid-redark.svg" valueClassName="text-[color:var(--col-wine)]" />
      </div>
    </>
  );
};

export default Tracker4;
