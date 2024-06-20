import useApi from "@/services/useApi";
import { URL_COUNTRIES } from "@/config/urls";
import InfoBadge from "./InfoBadge";

 

const CategoryData = () => {
    const data = useApi(URL_COUNTRIES) || [];
    

    const tenTopCases = data?.sort((a, b) => b.cases - a.cases).slice(0,10);
    const todayCases = data?.sort((a, b) => b.todayCases - a.todayCases).slice(0,10);
    const todayDeaths = data?.sort((a, b) => b.todayDeaths - a.todayDeaths).slice(0,10);


    return (
        <section>
            <h1 className="text-[color:var(--col-dark-blue)] font-bold text-[1.5em]">Top Cases</h1>
            <ul className="">
                {tenTopCases.map((country, index) => (
                    <InfoBadge country = {country} key = {index} />
                ))}
            </ul>
            <h1 className="text-[color:var(--col-dark-blue)] font-bold text-[1.5em]">Today Cases</h1>
            <ul className="">
                {todayCases.map((country, index) => (
                    <InfoBadge country = {country} key = {index} />
                ))}
            </ul>
            <h1 className="text-[color:var(--col-dark-blue)] font-bold text-[1.5em]">Today Deaths</h1>
            <ul className="">
                {todayDeaths.map((country, index) => (
                    <InfoBadge country = {country} key = {index} />
                ))}
            </ul>
            <h1 className="text-[color:var(--col-dark-blue)] font-bold text-[1.5em]">Today Deaths</h1>
            <ul className="">
                {todayDeaths.map((country, index) => (
                    <InfoBadge country = {country} key = {index} />
                ))}
            </ul>
            
        </section>
        
    )
}

export default CategoryData;


{/* Se tiene que importar el data 
Se tiene que hacer un container dentro del cual se muestre data de país específico por categorías
Se tiene que dividr en columnas por categorías

*/}