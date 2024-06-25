/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import NavItem from "./navItem/navItem"

const Navbar = () => {
    return (
        <nav className="w-screen flex justify-between py-[1em] items-center @container">
            <div className="w-[30%] ml-[7cqw] ">
                <img src="/assets/images/logo.png" alt="Covimap logo"/>
            </div>
            <ul className="w-[70%] flex justify-around items-center text-[1.1em]">
                <NavItem content = "Home" icon="&#xf0d7;"/>
                <NavItem content = "Prevention"/>
                <NavItem content = "Qurantine"/>
                <NavItem content = "Pages" icon="&#xf0d7;"/>
                <NavItem content = "About"/>
                <NavItem content = "Help"/>
                <NavLink to="/tracker" className=" px-[4cqw] py-[0.7em] rounded-[1.5em] text-[color:var(--col-body)] bg-[color:var(--col-common-blue)]">
                Tracker</NavLink>
            </ul>
        </nav>
    )
}





export default Navbar