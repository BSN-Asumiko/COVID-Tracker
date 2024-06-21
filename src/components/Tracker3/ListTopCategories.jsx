import InfoBadge from "./InfoBadge"

const ListTopCategories = ({title, array}) => {
    return (

        <span className="flex flex-col m-2">
        <h1 className="text-[color:var(--col-dark-blue)] font-bold text-[0.8em] m-1">{title}</h1>
        <ul className="m-1 w-[15]">
        {array.map((country, index) => (
            <InfoBadge country = {country} key = {index} />
        ))}
        </ul>
    </span>

    )
}

export default ListTopCategories

