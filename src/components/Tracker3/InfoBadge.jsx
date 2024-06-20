
const InfoBadge = ({country}) => {

    return (
    <li className="flex bg-[color:var(--col-body)] items-center mb-2 mr-1 w-[125px] h-[3rem] transform transition duration-500 hover:scale-110">
        <div className="shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] ml-3 pr-1  "><img src={country.flag} alt={`${country.country} flag`} className="w-[26px] h-[26px] object-cover rounded-[30px] mr-1"/>
        </div>
        <section className="flex flex-col m-0.5 p-1">
            <p className="column-[span_1] text-base text-[color:var(--col-dark-blue)] text-[0.6rem] leading-[10px] p">{country.name}</p>
            <h3 className="column-[span_1] text-[0.9rem] text-[color:var(--col-dark-blue)] font-bold">{country.category}</h3>
        </section>
    </li> 
    )
}



export default InfoBadge