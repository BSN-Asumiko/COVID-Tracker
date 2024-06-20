import useApi from "@/services/useApi";
import { URL_COUNTRIES } from "@/config/urls";
 

const CategoryData = () => {
    const data = useApi(URL_COUNTRIES) || [];
    console.log(data)

    const tenTopCountries = data?.sort((a, b) => b.cases - a.cases).slice(0,10);


    return (
        <section>
            <h1>Top Countries</h1>
            <ul className="w-1/5 p-12;">
                {tenTopCountries.map((country, index) => (
                    <li key={index} className="grid grid-cols-[20%_auto] grid-rows-[50%_50%] bg-[--col-body];">
                        <div><img src={country.countryInfo.flag} alt={`${country.country} flag`} className="w-[70%] row-[span_2] col-[span_1] rounded-[50%];"/></div>
                        <p className="row-[span_1] text-base;">{country.country}</p>
                        <h3 className="row-[span_1] text-[2rem];">{country.cases}</h3>
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