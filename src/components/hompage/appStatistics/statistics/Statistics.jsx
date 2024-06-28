/* eslint-disable react/prop-types */
const Statistics = ({icon, number, title}) => {

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-6 pt-5">
            <span className="icon">{icon}</span>
            <h3 className="font-medium text-[x-large]">{number}</h3>
            <p className="uppercase text-[x-small]">{title}</p>
        </div>
    )
}

export default Statistics;