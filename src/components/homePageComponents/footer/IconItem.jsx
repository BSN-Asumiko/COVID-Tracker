const IconItem = ({link, icon}) => {
    return (
        <li className="mr-[0.8em]">
            <a href={link} target="_blank" className="relative flex items-center justify-center">
                <span className="icon-f absolute z-[1] text-[0.8em]">
                    {icon}
                </span>
                <div className="size-[2em] bg-[color:var(--col-home-footer-text)] opacity-[50%] rounded-[50%]" ></div>
            </a>
        </li>
    )
}

export default IconItem