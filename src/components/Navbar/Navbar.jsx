import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import NavItem from "./NavItem";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("/tracker");

    const handleItemClick = (to) => {
        setActiveItem(to);
    };

    return (
        <nav>
            <ul className="flex flex-col items-center w-20 leading-[1.75] border-r bg-[color:var(--col-components-bg)]">
                <li className="flex justify-center">
                    <NavLink to="/" className="flex items-center justify-center">
                        <img src="/assets/images/coronavirus.png" alt="Home" className="w-11 h-11 relative animate-[spin_4s_linear_infinite] m-3 mb-7" />
                    </NavLink>
                </li>
                <NavItem icon="&#xe684;" to="/tracker" isActive={activeItem === '/tracker'} withCircleOrange onClick={() => handleItemClick('/tracker')} />
                <NavItem icon="&#xe667;" to="/tracker/2" isActive={activeItem === '/tracker/2'} withCircleRed onClick={() => handleItemClick('/tracker/2')} />
                <NavItem icon="&#xe669;" to="/tracker/3" isActive={activeItem === '/tracker/3'} onClick={() => handleItemClick('/tracker/3')} />
                <NavItem icon="&#xe6eb;" to="/tracker/4" isActive={activeItem === '/tracker/4'} onClick={() => handleItemClick('/tracker/4')} />
                <NavItem icon="&#xe630;" to="/tracker/5" isActive={activeItem === '/tracker/5'} onClick={() => handleItemClick('/tracker/5')} />
                <NavItem icon="&#xe673;" to="/tracker/6" isActive={activeItem === '/tracker/6'} onClick={() => handleItemClick('/tracker/6')} />
                <NavItem icon="&#xe665;" to="/tracker/7" isActive={activeItem === '/tracker/7'} onClick={() => handleItemClick('/tracker/7')} />
                <NavItem icon="&#xe644;" to="/tracker/8" isActive={activeItem === '/tracker/8'} onClick={() => handleItemClick('/tracker/8')} />
                <span className="text-2xl icon flex items-center justify-center w-14 h-16 mt-6 text-[color:var(--col-common-blue)] rounded-lg hover:text-white hover:bg-[color:var(--col-common-blue)]">&#xe759;</span>
            </ul>
        </nav>
    );
};

export default Navbar;