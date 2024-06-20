/* eslint-disable react/prop-types */
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


const SelectCountry = ({ selectedCountry, setSelectedCountry, countries }) => {
  return (
    <Select onValueChange={(value) => setSelectedCountry(value)} value={selectedCountry}>
      <SelectTrigger className="w-[180px]">
        <SelectValue>
          {countries.length > 0 ? countries[0].country : "Select a country"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.countryInfo.iso3} value={country.countryInfo.iso3}>
            {country.country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectCountry;
