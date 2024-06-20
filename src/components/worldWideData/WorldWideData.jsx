import { useEffect, useState } from "react";
import WorldItem from "./WorldItem";

const WorldWideData = () => {
  const [worldData, setWorldData] = useState(null);

  useEffect(() => {
    const fetchWorldData = async () => {
      const url = "https://disease.sh/v3/covid-19/all";
      const response = await fetch(url);
      const data = await response.json();
      setWorldData(data);
    };

    fetchWorldData();
  }, []);

  if (!worldData) return <div>Loading world data...</div>;

  return (
    <div className="border p-4">
      <ul className="flex flex-wrap space-x-1">
        <WorldItem title="Total Confirmed:" value={worldData.cases} imageSrc="\public\assets\images\icons\covid-defult.svg" key="total-confirmed" />
        <WorldItem title="Total Recovered:" value={worldData.recovered} imageSrc="\public\assets\images\icons\covid-green.svg" key="total-recovered" />
        <WorldItem title="Total Deaths:" value={worldData.deaths} imageSrc="\public\assets\images\icons\covid-orange.svg" key="total-deaths" />
        <WorldItem title="New Deaths:" value={worldData.todayDeaths} imageSrc="\public\assets\images\icons\covid-red.svg" key="new-deaths" />
        <WorldItem title="Help Line No." value={198} imageSrc="\public\assets\images\icons\telephone.svg"  key="help-line"  />
      </ul>
    </div>
  );
};

export default WorldWideData;
