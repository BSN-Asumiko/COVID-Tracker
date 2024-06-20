import useApi from "@/services/useApi";
import { URL_COUNTRIES } from "@/config/urls";
 

const CategoryData = () => {
    const data = useApi(URL_COUNTRIES) || [];
    console.log(data)

    const tenTopCountries = data?.sort((a, b) => b.cases - a.cases).slice(0,10);


    return (
        <section>
            <h1 className="text-[color:var(--col-dark-blue)] font-bold text-[1.5em]">Top Cases</h1>
            <ul className="">
                {tenTopCountries.map((country, index) => (
                    <li key={index} className="flex bg-[color:var(--col-body)] items-center">
                        <div className="bg-[color:var(--col-body)] shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] m-2 p-1"><img src={country.countryInfo.flag} alt={`${country.country} flag`} className="w-[45px] h-[45px] object-cover rounded-[30px] "/>
                        </div>
                        <section>
                            <p className="column-[span_1] text-base text-[color:var(--col-dark-blue)]">{country.country}</p>
                            <h3 className="column-[span_1] text-[1.25rem] text-[color:var(--col-dark-blue)] font-bold">{country.cases}</h3>
                        </section>
                        
                        </li> 
                )
                    
                )}
            </ul>
        </section>
    )
}

export default CategoryData;


{/* Se tiene que importar el data 
Se tiene que hacer un container dentro del cual se muestre data de país específico por categorías
Se tiene que dividr en columnas por categorías

*/}