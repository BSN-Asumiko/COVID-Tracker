import { useState } from "react";
import useApi from "@/services/useApi";
import SelectCountry from "@/components/selectCountry/SelectCountry";
import GlobalData from "@/components/globalData/GlobalData";
import WorldWideData from "@/components/worldWideData/WorldWideData";
import { URL_COUNTRIES, URL_ALL } from "@/config/urls"

const Tracker1 = () => {
  const [selectedCountry, setSelectedCountry] = useState("AF");
  const url =
    selectedCountry === "world"
      ? URL_ALL
      : `${URL_COUNTRIES}/${selectedCountry}`;

  const data = useApi(url);
  const countries = useApi(URL_COUNTRIES);
  console.log(countries)

  return (
    <div>
      {!data || !countries ? (
        <div>Loading...</div>
      ) : (
        <>
          <SelectCountry
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            countries={countries}
          /> 
          <div className="grid grid-cols-2">
            <GlobalData data={data} />
            <img
              src="/assets/images/image.png"
              alt="mapimage"
              className="p-3 mt-1"
            />
          </div>
          <WorldWideData />
        </>
      )}
    </div>
  );
};

export default Tracker1;
