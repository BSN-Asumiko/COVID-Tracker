/* eslint-disable react/prop-types */

const ButtonBadge = ({ country, handleClick, isSelected }) => {
    return (
        <li className={`flex shadow-md m-1 rounded-lg transform transition duration-500 hover:scale-110 ${isSelected ? 'bg-[color:var(--col-common-blue)]' : 'bg-[color:var(--col-body)]'}`}>
            <button
                onClick={() => handleClick(country)}
                className={`flex items-center px-4 py-2 font-medium rounded-lg focus:outline-none focus:ring-0 w-full ${
                    isSelected ? 'text-[color:var(--col-body)] bg-[color:var(--col-common-blue)]' : 'text-[color:var(--col-black)] bg-[color:var(--col-body)] hover:bg-[color:var(--col-common-blue)] hover:text-[color:var(--col-body)]'
                }`}
            >
                <div className="flex items-center mr-2">
                    <img src={country.countryInfo.flag} alt={`${country.country} flag`} className="w-[20px] h-[20px] object-cover rounded-full" />
                </div>
                <p className="text-sm leading-[12px]">{country.country}</p>
            </button>
        </li>
    );
};

export default ButtonBadge;


