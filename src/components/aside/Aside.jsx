import useApi from "@/services/useApi";
import { URL_ALL } from "@/config/urls";
import { URL_COUNTRIES } from "@/config/urls";


const Aside = () => {

    const dataGeneral = useApi(URL_ALL) || [];
    const dataCountries = useApi(URL_COUNTRIES)|| [];
    const top10Countries = dataCountries.splice(0, 10) 
    console.log(top10Countries)

    return (
        <div className="w-[30%] h-[100vh]">
            <div className="h-[auto]">
                <h1>COVID-19 Tracker</h1>
                <ul>
                    <TotalListItem 
                    text="Total Case" 
                    today={dataGeneral.todayCases} 
                    cases={dataGeneral.cases} 
                    className="otro estilo"/>
                    <TotalListItem 
                    text="Active Case" 
                    today="" 
                    cases={dataGeneral.active} 
                    className="otro estilo"/>
                    <TotalListItem 
                    text="Recovered Case" 
                    today={dataGeneral.todayRecovered} 
                    cases={dataGeneral.recovered} 
                    className="otro estilo"/>
                    <TotalListItem 
                    text="Deaths Case" 
                    today={dataGeneral.todayDeaths} 
                    cases={dataGeneral.deaths} 
                    className="otro estilo"/>
                </ul>
                <h6>Top 10 Country</h6>
                <ul>
                {top10Countries.map((object, index) => (
                    <li key={index} className="w-[90%] p-[0.5em] m-auto mt-[0.4em] text-[color:var(--col-dark-blue)] flex justify-between items-center border border-[color:rgb(235,236,241)] border-solid shadow-[0px_0px_7px_3px_rgba(0,0,0,0.03)_] rounded-[3px]">
                        <span className="w-[80%] flex justify-start items-center">
                            <img className="w-[1.8em] rounded-[2px] ml-[0.2em] mr-[0.8em]" src={object.countryInfo.flag} alt={`${object.country} flag`}/>
                            <p className="text-[x-small] ">{object.country}</p>
                        </span>
                        <span className="text-[x-small] font-bold">
                            {object.cases}
                        </span>
                    </li>
            ))}
                </ul>
            </div>
        </div>
    )
}

function TotalListItem ({text, today, cases, className}) {
    return (
        <>
        <li className={`estilos ${className}`}>{text}<span><span>{today}</span> {cases}</span></li>
        </>
    )
}


export default Aside