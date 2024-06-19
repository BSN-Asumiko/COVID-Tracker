import { Link } from 'react-router-dom';
import NavItem from "./NavItem";

const Navbar = () => {
    return (
        <nav>
            <ul className="flex flex-col w-20 leading-[1.75] border-r bg-[#F8F9FE]">
                <li className="flex w-12">
                    <Link to="/">
                        <img src="/assets/images/coronavirus.png" alt="Home" className="w-20 h-20relative animate-[spin_4s_linear_infinite] m-4 p-[0.12rem]" />
                    </Link>
                </li>
                <NavItem icon="&#xe684;" to="/tracker" />
                <NavItem icon="&#xe667;" to="/tracker/2" />
                <NavItem icon="&#xe669;" to="/tracker/3" />
                <NavItem icon="&#xe6eb;" to="/tracker/3" />
                <NavItem icon="&#xe630;" to="/tracker/4" />
                <NavItem icon="&#xe673;" to="/tracker/5" />
                <NavItem icon="&#xe665;" to="/tracker/6" />
                <NavItem icon="&#xe644;" to="/tracker/7" />
                <NavItem icon="&#xe759;" to="/tracker/8" />
            </ul>
        </nav>
    );
};

export default Navbar;
