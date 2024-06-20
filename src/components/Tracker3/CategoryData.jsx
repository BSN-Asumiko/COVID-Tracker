import useApi from "@/services/useApi";
import { URL_COUNTRIES } from "@/config/urls";
import InfoBadge from "./InfoBadge";
import ListTopCategories from "./ListTopCategories";

 

const CategoryData = () => {
    const data = useApi(URL_COUNTRIES) || [];
    

    const tenTopCases = data?.map((country) => {
        return {
            name: country.country,
            flag: country.countryInfo.flag,
            category: country.cases
        }
    }).sort((a, b) => b.category - a.category).slice(0,10);


    const todayCases = data?.map((country) => {
        return {
            name: country.country,
            flag: country.countryInfo.flag,
            category: country.todayCases
        }
    }).sort((a, b) => b.category - a.category).slice(0,10);

    const todayDeaths = data?.map((country) => {
        return {
            name: country.country,
            flag: country.countryInfo.flag,
            category: country.todayDeaths
        }
    }).sort((a, b) => b.category - a.category).slice(0,10);

    const todayCritical = data?.map((country) => {
        return {
            name: country.country,
            flag: country.countryInfo.flag,
            category: country.critical
        }
    }).sort((a, b) => b.category - a.category).slice(0,10);

    const topActive = data?.map((country) => {
        return {
            name: country.country,
            flag: country.countryInfo.flag,
            category: country.active
        } 
    }).sort((a, b) => b.category - a.category).slice(0,10);

    const topRecovered = data?.map((country) => {
        return {
            name: country.country,
            flag: country.countryInfo.flag,
            category: country.recovered
        }
    }).sort((a, b) => b.category - a.category).slice(0,10);


    return (
        <section className="flex w-[100] justify-center bg-[color:var(--col-table3)]">
            <ListTopCategories title="Top Cases" array={tenTopCases}/>
            <ListTopCategories title="Today Cases" array={todayCases}/>
            <ListTopCategories title="Today Deaths" array={todayDeaths}/>
            <ListTopCategories title="Today Critical" array={todayCritical}/>
            <ListTopCategories title="Top Active" array={topActive}/>
            <ListTopCategories title="Top Recovered" array={topRecovered}/>

        </section>
        
    )
}

export default CategoryData;
