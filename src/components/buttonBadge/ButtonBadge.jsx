/* eslint-disable react/prop-types */

const ButtonBadge = ({ country, handleClick }) => {
    return (
        <li className="flex bg-[color:var(--col-body)] shadow-md m-1 rounded-lg transform transition duration-500 hover:scale-110">
            <button
                onClick={() => handleClick(country)}
                className="flex items-center px-4 py-2 font-medium text-[color:var(--col-black)] bg-[color:var(--col-body)] hover:bg-[color:var(--col-common-blue)] hover:text-[color:var(--col-body)] rounded-lg focus:outline-none focus:ring-0 w-full"
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
