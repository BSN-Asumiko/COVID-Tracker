import React, { useState, useEffect, useRef } from 'react';
import useTracker from '../hooks/useTracker';
import Card from '../components/ui/Card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/ui/select';
import WidgetHead from '../components/widgets/WidgetHead';

const Tracker4 = () => {
  const { displayedData } = useTracker();
  const [selectedCountry, setSelectedCountry] = useState('');
  const hasSelectedCountry = useRef(false); // Para evitar bucles infinitos

  //useEffect(() => {
    console.log('Displayed Data:', displayedData);
    if (displayedData.length > 0 && !hasSelectedCountry.current) {
      setSelectedCountry(displayedData[0].country);
      hasSelectedCountry.current = true; // Marcar como inicializado
    }
  }, [displayedData]);

  const countryData = displayedData.find(country => country.country === selectedCountry);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-4 mx-auto">
      <WidgetHead text="Covid-19 Country Wise - Tabs" />
      <div className="flex flex-wrap justify-around mb-4">
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger className="flex items-center justify-between px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent className="mt-2 bg-white border rounded-md shadow-lg">
            {displayedData.map((country, index) => (
              <SelectItem key={index} value={country.country} className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                {country.country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap justify-around mb-4">
        <Card title="Total Cases" value={countryData.cases} className="text-blue-500 border-blue-500 bg-blue-50" />
        <Card title="Total Deaths" value={countryData.deaths} className="text-red-500 border-red-500 bg-red-50" />
        <Card title="Total Recovered" value={countryData.recovered} className="text-green-500 border-green-500 bg-green-50" />
        <Card title="Total Active" value={countryData.active} className="text-yellow-500 border-yellow-500 bg-yellow-50" />
      </div>
    </div>
  );
};

export default Tracker4;
