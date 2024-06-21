/* eslint-disable react/prop-types */
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const SelectCountry = ({ selectedCountry, setSelectedCountry, countries }) => {
  const firstCountry = countries[0];

  return (
    <div className="p-4 flex items-center justify-between pb-4 w-full border-b" style={{ borderBottomColor: 'var(--col-grey)', borderBottomWidth: '1px' }}>
      <Select
        className="bg-[color:var(--col-body)]"
        value={selectedCountry}
        onValueChange={setSelectedCountry}
      >
        <SelectTrigger className="w-[180px] bg-[color:var(--col-body)] ">
          <SelectValue className="bg-[color:var(--col-body)]">
            {selectedCountry ? (
              countries.find((country) => country.countryInfo.iso3 === selectedCountry)?.country ||
              firstCountry.country
            ) : (
              firstCountry.country
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[color:var(--col-body)]">
          {countries.map((country, index) => (
            <SelectItem key={index} value={country.countryInfo.iso3}>
              {country.country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="flex">Updated: January 31, 2022</p>
    </div>
  );
};

export default SelectCountry;
