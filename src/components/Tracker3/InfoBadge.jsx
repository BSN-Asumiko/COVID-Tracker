
const InfoBadge = ({country}) => {

    return (
    <li className="flex bg-[color:var(--col-body)] items-center mb-3 w-[135px] h-[3rem] transform transition duration-500 hover:scale-110">
        <div className="shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] ml-3 mr-2 "><img src={country.flag} alt={`${country.country} flag`} className="w-[26px] h-[26px] object-cover rounded-[30px]"/>
        </div>
        <section className="flex flex-col mt-1 ml-0.5">
            <p className="column-[span_1] text-[color:var(--col-dark-blue)] text-base leading-[13px] mt-0.5">{country.name}</p>
            <h3 className="column-[span_1] text-[0.9em] text-[color:var(--col-dark-blue)] font-bold">{country.category}</h3>
        </section>
    </li> 
    )
}



export default InfoBadge