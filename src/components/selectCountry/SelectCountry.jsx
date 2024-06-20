/* eslint-disable react/prop-types */
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


const SelectCountry = ({ selectedCountry, setSelectedCountry, countries }) => {
  return (
    <Select className="bg-[color:var(--col-body)]" onValueChange={(value) => setSelectedCountry(value)} value={selectedCountry}>
      <SelectTrigger className="w-[180px] bg-[color:var(--col-body)]">
        <SelectValue className="bg-[color:var(--col-body)]">
          {countries.length > 0 ? countries[0].country : "Select a country"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-[color:var(--col-body)]">
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
