
const InfoBadge = ({country}) => {

    return (
    <li className="flex bg-[color:var(--col-body)] items-center">
        <div className="bg-[color:var(--col-body)] shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] m-2 p-1"><img src={country.countryInfo.flag} alt={`${country.country} flag`} className="w-[45px] h-[45px] object-cover rounded-[30px] "/>
        </div>
        <section>
            <p className="column-[span_1] text-base text-[color:var(--col-dark-blue)]">{country.country}</p>
            <h3 className="column-[span_1] text-[1.25rem] text-[color:var(--col-dark-blue)] font-bold">{country.cases}</h3>
        </section>
    </li> 
    )
}



export default InfoBadge