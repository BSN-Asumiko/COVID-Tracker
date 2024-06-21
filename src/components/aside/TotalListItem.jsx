const TotalListItem = ({text, today, cases, className, casesStyle}) => {
    return (
        <>
            <li className={`${className}  flex justify-between items-center w-[95%] m-auto p-[1.1em] mt-[1em] text-[color:var(--col-dark-blue)] text-[0.9em] font-semibold rounded-[5px] transform transition duration-450 hover:scale-105 @container`}>
                <span className="text-[5.5cqw]">{text}</span>
                <span className="flex items-center">
                    {(today !== "" ) && <span className="mr-[0.6em] bg-[color:var(--col-body)] px-[0.3em] py-[0.5em] text-[0.7em] text-[color:var(--col-grey)]">{today}</span>} 
                    <span className={`${casesStyle} text-[10cqw]`}>{cases}</span>
                </span>
            </li>
        </>
    )
}

export default TotalListItem