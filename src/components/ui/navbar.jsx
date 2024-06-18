import PropTypes from 'prop-types';


const NavItem = ({ icon, href }) => {
    return (
        <li className="w-1">
            <a href={href} className=" flex items-center justify-center w-14 h-16 m-2  text-[#3639AE] rounded-lg hover:text-white hover:bg-[#3639AE]">
                <span className="text-2xl icon">{icon}</span>
            </a>
        </li>
    );
};


NavItem.propTypes = {
    icon: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
};

const Navbar = () => {
    return (
                <ul className="flex flex-col w-20 leading-[1.75] border-r bg-[#F8F9FE]">
                    {/* Logo */}
                    <li className="flex w-12">
                        <a href="#home-page">
                            <img src="/assets/images/coronavirus.png" alt="Home" className="w-20 h-20relative animate-[spin_4s_linear_infinite] m-4 p-[0.12rem]" />
                        </a>
                    </li>
                    <NavItem icon="&#xe684;" href="#pie-chart-icon" />
                    <NavItem icon="&#xe667;" href="#stacked-bar-chart-icon" />
                    <NavItem icon="&#xe669;" href="#grid-icon" />
                    <NavItem icon="&#xe6eb;" href="#single-card-icon" />
                    <NavItem icon="&#xe630;" href="#multiple-cards-icon" />
                    <NavItem icon="&#xe673;" href="#trend-arrow-icon" />
                    <NavItem icon="&#xe665;" href="#globe-icon" />
                    <NavItem icon="&#xe644;" href="#chat-bubble-icon" />
                    <NavItem icon="&#xe759;" href="#info-icon" />
                </ul>
    );
};

export { NavItem, Navbar };
