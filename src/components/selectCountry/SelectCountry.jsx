/* eslint-disable react/prop-types */
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const SelectCountry = ({ selectedCountry, setSelectedCountry, countries }) => {
  const firstCountry = countries[0]; 

  return (
    <div className="mt-10 p-4">
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
    <div className="inset-x-0 h-px bg-[color:var(--col-grey)] mt-4 px-4 "></div>

    </div>
  );
};

export default SelectCountry;
