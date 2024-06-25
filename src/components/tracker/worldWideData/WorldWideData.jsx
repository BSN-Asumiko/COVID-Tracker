import useApi from "@/services/useApi";
import { URL_ALL } from "@/config/urls";
import CountryCard from "../countryCard/CountryCard";

const WorldWideData = () => {
    const url = URL_ALL;
    const worldData = useApi(url);

    if (!worldData) return <div>Loading world data...</div>;

    return (
        <div className="w-full p-4">
            <ul className="grid grid-cols-5 space-x-1 w-full justify-center">
                <CountryCard
                    title="Total Confirmed:"
                    value={worldData.cases}
                    imageSrc="\public\assets\images\icons\covid-defult.svg"
                    key="total-confirmed"
                />
                <CountryCard
                    title="Total Recovered:"
                    value={worldData.recovered}
                    imageSrc="\public\assets\images\icons\covid-green.svg"
                    key="total-recovered"
                />
                <CountryCard
                    title="Total Deaths:"
                    value={worldData.deaths}
                    imageSrc="\public\assets\images\icons\covid-orange.svg"
                    key="total-deaths"
                />
                <CountryCard
                    title="New Deaths:"
                    value={worldData.todayDeaths}
                    imageSrc="\public\assets\images\icons\covid-red.svg"
                    key="new-deaths"
                />
                <CountryCard
                    title="Help Line No."
                    value={198}
                    imageSrc="\public\assets\images\icons\telephone.svg"
                    key="help-line"
                />
            </ul>
        </div>
    );
};

export default WorldWideData;
