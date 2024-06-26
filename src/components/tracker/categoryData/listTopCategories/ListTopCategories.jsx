/* eslint-disable react/prop-types */
import InfoBadge from "../infoBadge/InfoBadge"

const ListTopCategories = ({title, array}) => {
    return (

        <span className="flex flex-col m-2">
        <h4 className="text-[color:var(--col-dark-blue)] font-semibold text-base m-1">{title}</h4>
        <ul className="m-1 w-[15]">
        {array.map((country, index) => (
            <InfoBadge country = {country} key = {index} />
        ))}
        </ul>
    </span>

    )
}

export default ListTopCategories
