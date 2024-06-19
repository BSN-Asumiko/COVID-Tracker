import useApi from "@/services/useApi";
import { URL_COUNTRIES } from "@/config/urls";

const CategoryData = () => {
    const data = useApi(URL_COUNTRIES) || [];
    console.log(data)

    const tenTopCountries = data?.sort((a, b) => b.cases - a.cases).slice(0,10);


    return (
        <section>
            <h1>Top Countries</h1>
            <ul>
                {tenTopCountries.map((country, index) => {
                    console.log(country.country)
                  return (  <li key={index}>{country.country}:{country.cases}</li> )
                }
                    
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