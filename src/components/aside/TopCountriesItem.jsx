/* eslint-disable react/prop-types */
const TopCountriesItem = ({object}) => {
    return (
        <>
            <li className="w-[95%] p-[0.7em] mt-[0.4em] m-auto text-[color:var(--col-dark-blue)] flex justify-between items-center border border-[color:rgb(235,236,241)] border-solid shadow-[0px_0px_7px_3px_rgba(0,0,0,0.03)_] rounded-[5px] transform transition duration-450 hover:scale-105 ">
                <span className="w-[80%] flex justify-start items-center">
                    <img className="w-[2.3em] rounded-[2px] ml-[0.2em] mr-[0.8em]" 
                        src={object.countryInfo.flag} alt={`${object.country} flag`}/>
                    <p className="text-[0.7em] ">{object.country}</p>
                </span>
                <span className="text-[0.7em] font-bold">
                    {object.deaths}
                </span>
            </li>
        </>
    )
}

export default TopCountriesItem;