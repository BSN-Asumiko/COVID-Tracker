import useApi from "@/services/useApi";
import { URL_ALL } from "@/config/urls";
import { URL_COUNTRIES } from "@/config/urls";
import TotalListItem from "./totalListItem/TotalListItem";
import TopCountriesItem from "./topCountriesItem/TopCountriesItem";


const Aside = () => {

    const {dataGeneral} = useApi(URL_ALL);
    let dataCountries = useApi(URL_COUNTRIES);
    let top10Countries = dataCountries.sort((a, b) => b.deaths - a.deaths).slice(0, 10); 

    return (
        <div className="hidden ml:block w-[30%] h-screen p-[1em] overflow-hidden">
            <div className="overflow-y-auto h-[100%] w-[100%] no-scrollbar @container">
                <h1 className="text-[1.5em] text-[color:var(--col-black)] font-semibold">COVID-19 Tracker</h1>
                <ul>
                    <TotalListItem 
                    text="Total Case" 
                    today={`+${dataGeneral.todayCases}`}
                    cases={dataGeneral.cases} 
                    className="bg-[color:var(--col-aside-bg-tc)] hover:border hover:border-[color:var(--col-bright-red)] hover:border-solid"
                    casesStyle="text-[color:var(--col-bright-red)]"/>

                    <TotalListItem 
                    text="Active Case" 
                    today=""
                    cases={dataGeneral.active} 
                    className="bg-[color:var(--col-aside-bg-ac)] hover:border hover:border-[color:var(--col-orange)] hover:border-solid"
                    casesStyle="text-[color:var(--col-orange)]"/>

                    <TotalListItem 
                    text="Recovered Case" 
                    today={`+${dataGeneral.todayRecovered}`} 
                    cases={dataGeneral.recovered} 
                    className="bg-[color:var(--col-aside-bg-rc)] hover:border hover:border-[color:var(--col-green)] hover:border-solid"
                    casesStyle="text-[color:var(--col-green)]"/>

                    <TotalListItem 
                    text="Deaths Case" 
                    today={`+${dataGeneral.todayDeaths} `}
                    cases={dataGeneral.deaths} 
                    className="bg-[color:var(--col-aside-bg-dc)] hover:border hover:border-[color:var(--col-common-blue)] hover:border-solid"
                    casesStyle="text-[color:var(--col-common-blue)]"/>
                </ul>
                <h6 className="text-[color:var(--col-dark-blue)] text-[1.1em] font-semibold m-auto mt-[1em] w-[95%] ">Top 10 Country</h6>
                <ul>
                    {top10Countries.map((object, index) => (
                        <TopCountriesItem object={object} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    )
}



export default Aside