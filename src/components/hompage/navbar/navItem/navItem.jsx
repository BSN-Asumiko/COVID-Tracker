/* eslint-disable react/prop-types */
const NavItem = ({content, icon}) => {
    return (
        <>
            <li className="text-[color:var(--col-dark-blue)] hover:cursor-pointer">{content} <span className="icon-f">{icon}</span></li>
        </>
    )
}

export default NavItem