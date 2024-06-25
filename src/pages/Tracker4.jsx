import  { useState, useEffect } from 'react';
import WidgetHead from '../components/widgets/WidgetHead';
import WorldItem from '@/components/worldWideData/WorldItem';
import useApi from '@/services/useApi';
import { URL_COUNTRIES } from '@/config/urls';
import ButtonBadge from '@/components/buttonBadge/ButtonBadge';

const Tracker4 = () => {
  const data = useApi (URL_COUNTRIES) 
  const displayData = data.sort((a, b) => b.deaths - a.deaths).slice(0, 9)
  
  const [selectedCountry, setSelectedCountry] = useState("");
  const filterCountry = (country) => {
    console.log(country)
    setSelectedCountry (country.country)
    setCountryData (displayData.find(country => country.country === selectedCountry))
  }  

  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    setCountryData(displayData[0])
    
  },[displayData]
  )
  /* 
  const hasSelectedCountry = useRef(false); // Para evitar bucles infinitos
  const countryData = displayedData.find(country => country.country === selectedCountry);

  if (!countryData) {
    return <div>Loading...</div>;
  }
 */
  return (
    <>
      <WidgetHead text="Covid-19 Country Wise - Tabs" />
      <ul>
      {
        displayData.map ((item, index) => {
          return (<ButtonBadge handleClick={filterCountry} key={index} country={item} />
          )
        }
        ) 
      }
      </ul>

      <div className="flex flex-wrap justify-around mb-4">
        <WorldItem title="Total Cases" value={countryData?.cases} imageSrc="\public\assets\images\icons\covid-defult.svg"/>
        <WorldItem title="Total Deaths" value={countryData?.deaths} imageSrc="\public\assets\images\icons\covid-defult.svg" />
        <WorldItem title="Total Recovered" value={countryData?.recovered} imageSrc="\public\assets\images\icons\covid-defult.svg" />
        <WorldItem title="Total Active" value={countryData?.active} imageSrc="\public\assets\images\icons\covid-defult.svg" />
      </div>
      </>
  );
};

export default Tracker4;
