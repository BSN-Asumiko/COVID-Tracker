import { useEffect, useState } from "react";

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
    <div className="border border-gray-300">
      <ul className="space-y-2">
        <li>Total Confirmed: {worldData.cases}</li>
        <li>Total Recovered: {worldData.recovered}</li>
        <li>Total Deaths: {worldData.deaths}</li>
        <li>New Deaths: {worldData.todayDeaths}</li>
        <li>Help Line No. {198} </li>
      </ul>
    </div>
  );
};

export default WorldWideData;
