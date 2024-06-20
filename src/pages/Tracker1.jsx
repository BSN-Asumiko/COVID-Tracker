import { useState } from "react";
import useApi from "@/services/useApi";
import SelectCountry from "@/components/selectCountry/SelectCountry";
import GlobalData from "@/components/globalData/GlobalData";
import WorldWideData from "@/components/worldWideData/WorldWideData";

const Tracker1 = () => {
  const [selectedCountry, setSelectedCountry] = useState("AF");
  const url = selectedCountry === "world"
    ? "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`;

  const data = useApi(url);
  const countries = useApi("https://disease.sh/v3/covid-19/countries");

  return (
    <div>
      {(!data || !countries) ? (
        <div>Loading...</div>
      ) : (
        <>
          <SelectCountry 
            selectedCountry={selectedCountry} 
            setSelectedCountry={setSelectedCountry} 
            countries={countries} 
          />
          <GlobalData data={data} />
          <WorldWideData />

        </>
      )}
    </div>
  );
}

export default Tracker1;
