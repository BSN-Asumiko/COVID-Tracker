import { useState } from "react";
import useApi from "@/services/useApi";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


const Tracker1 = () => {
  const [selectedCountry, setSelectedCountry] = useState("world");
  const url = selectedCountry === "world"
    ? "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`;

  const data = useApi(url);
  const countries = useApi("https://disease.sh/v3/covid-19/countries");

  if (!data || !countries) return <div>Loading...</div>;

  return (
    <div>
      <Select onValueChange={(value) => setSelectedCountry(value)} value={selectedCountry}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="world"></SelectItem>
          {countries.map((country) => (
            <SelectItem key={country.countryInfo.iso3} value={country.countryInfo.iso3}>
              {country.country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

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
}

export default Tracker1;
