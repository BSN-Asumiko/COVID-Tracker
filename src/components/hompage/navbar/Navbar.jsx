/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import NavItem from "./navItem/navItem"
import { useState } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className={`*:{isOpen ? 'isOpen' : ''} w-screen flex justify-between py-[1em] items-center @container`}>
            <div className="w-[30%] ml-[7cqw] ">
                <img src="/assets/images/logo.png" alt="Covimap logo"/>
            </div>
            <div className="flex justify-end content-end ml:hidden">
                <button onClick={toggleMenu}>
                    <span className="icon" >&#xf0d7; </span>+
                </button>
            </div>
            <div className="w-[20%] ml:w-[70%] flex flex-row justify-around text-[1.1em]">
                <ul className={`${isOpen ? 'block' : 'hidden'}  text-left bg-[color:var(--col-body)] ml:flex flex-row items-center gap-[1.5em]`}>
                    <NavItem content = "Home" icon="&#xf0d7;"/>
                    <NavItem content = "Prevention"/>
                    <NavItem content = "Qurantine"/>
                    <NavItem content = "Pages" icon="&#xf0d7;"/>
                    <NavItem content = "About"/>
                    <NavItem content = "Help"/>
                    <NavLink to="/tracker" className="px-[4cqw] py-[0.7em] rounded-[1.5em] text-[color:var(--col-body)] bg-[color:var(--col-common-blue)]">
                Tracker</NavLink>
                </ul>
                
            </div>
        </nav>
    )
}
{/*absolute flex-col z-[1]*/}





export default Navbar