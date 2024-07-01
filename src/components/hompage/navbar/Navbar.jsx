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
        <nav className=" w-screen flex justify-between py-[1em] items-center">
            <div className="w-[30%] ml-[7cqw] ">
                <img src="/assets/images/logo.png" alt="Covimap logo"/>
            </div>
           
            <div className="w-[70%] flex ml:justify-around justify-end text-[1.1em]">
            <div className="w-[70%] flex justify-end ml:hidden mr-9">
                <button onClick={toggleMenu}>
                    <span className="icon" >&#xE6C3;</span>
                </button>
            </div>
                <ul className={`${isOpen ? 'block' : 'hidden'} absolute px-[6cqw] py-[2em] ml:static text-left bg-[color:var(--col-body)] ml:flex ml:flex-row mt-4 ml:mt-0 items-center gap-[1.5em]`}>
                    <NavItem content = "Home" icon="&#xf0d7;"/>
                    <NavItem content = "Prevention"/>
                    <NavItem content = "Qurantine"/>
                    <NavItem content = "Pages" icon="&#xf0d7;"/>
                    <NavItem content = "About"/>
                    <NavItem content = "Help"/>
                    <div className="ml:mt-0 ml:mb-0 mt-6 mb-2">
                        <NavLink to="/tracker" className="px-[4cqw] py-[0.7em] rounded-[1.5em] text-[color:var(--col-body)] bg-[color:var(--col-common-blue)] ">
                Tracker</NavLink></div>
                </ul>
                
            </div>
        </nav>
    )
}
{/*absolute flex-col z-[1]*/}





export default Navbar