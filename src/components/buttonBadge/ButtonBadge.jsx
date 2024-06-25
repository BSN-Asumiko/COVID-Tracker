/* eslint-disable react/prop-types */


const ButtonBadge = ({country, handleClick}) => {
    return (
        <li className="flex bg-[color:var(--col-body)] items-center mb-3 w-[135px] h-[3rem] transform transition duration-500 hover:scale-110">
            <button onClick={() => handleClick(country)}>

            <div className="shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] ml-3 mr-2 ">
                <img src={country.countryInfo.flag} alt={`${country.country} flag`} className="w-[26px] h-[26px] object-cover rounded-[30px]" />
            </div>
                <p className="column-[span_1] text-[color:var(--col-dark-blue)] text-xs leading-[13px] mt-0.5">{country.country}</p>

            </button>
        </li>
    )
}

export default ButtonBadge;
