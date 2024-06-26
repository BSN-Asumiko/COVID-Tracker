/* eslint-disable react/prop-types */

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const SelectCountry = ({ selectedCountry, setSelectedCountry, countries }) => {
  const validCountries = countries.filter(country => country.countryInfo && country.countryInfo.iso3);

  const firstCountry = validCountries.length > 0 ? validCountries[0] : { country: 'N/A', countryInfo: { iso3: 'N/A' } };
  const selectedCountryName = selectedCountry
    ? validCountries.find((country) => country.countryInfo.iso3 === selectedCountry)?.country || firstCountry.country
    : firstCountry.country;

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-2 items-center justify-between pb-4 w-full border-b" style={{ borderBottomColor: 'var(--col-grey)', borderBottomWidth: '1px' }}>
      <Select
        className="bg-[color:var(--col-body)]"
        value={selectedCountry}
        onValueChange={setSelectedCountry}
      >
        <SelectTrigger className="w-full lg:w-[180px] bg-[color:var(--col-body)]">
          <SelectValue className="bg-[color:var(--col-body)]">{selectedCountryName}</SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[color:var(--col-body)]">
          {validCountries.length > 0 ? validCountries.map((country, index) => (
            <SelectItem key={index} value={country.countryInfo.iso3}>
              {country.country}
            </SelectItem>
          )) : <SelectItem value="Select"></SelectItem>}
        </SelectContent>
      </Select>
      <p className="text-sm">Updated: January 31, 2022</p>
    </div>
  );
};



export default SelectCountry;
