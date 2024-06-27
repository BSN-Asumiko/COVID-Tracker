import { useState } from "react";
import useApi from "@/services/useApi";
import SelectCountry from "@/components/tracker/globalData/selectCountry/SelectCountry";
import GlobalData from "@/components/tracker/globalData/GlobalData";
import WorldWideData from "@/components/tracker/worldWideData/WorldWideData";
import { URL_COUNTRIES, URL_ALL } from "@/config/urls"
import Loader from "@/components/tracker/loader/Loader";
import Error from "@/components/tracker/error/Error";

const Tracker1 = () => {
  const [selectedCountry, setSelectedCountry] = useState("AF");
  const url =
    selectedCountry === "world"
      ? URL_ALL
      : `${URL_COUNTRIES}/${selectedCountry}`;

  const { data, loading, error } = useApi(url);
  const { data: countries } = useApi(URL_COUNTRIES);

  return (
    <div>
      {loading ?
        <Loader />
        : error ?
          <Error />
          :
          (
            <>
              <SelectCountry
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                countries={countries}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2">
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
