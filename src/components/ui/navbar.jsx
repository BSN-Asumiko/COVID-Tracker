import PropTypes from 'prop-types';


const NavItem = ({ icon, href }) => {
    return (
        <li>
            <a href={href} className="relative flex items-center justify-center w-16 h-16 m-2 mb-1 text-blue-500 no-underline rounded-lg hover:text-white hover:bg-blue-500">
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
                <ul className="flex flex-col h-[calc(var(--vh,1vh)_*_100)] bg-background w-20 leading-[1.75] m-0 p-0 border-r-[rgba(0,0,0,0.1)] border-r border-solid">
                    {/* Logo */}
                    <li className="flex w-12">
                        <a href="#home-page">
                            <img src="/assets/images/coronavirus.png" alt="Home" className="w-12 relative animate-[spin_2s_linear_infinite] m-4 p-[0.12rem]" />
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

// Exportar ambos componentes
export { NavItem, Navbar };
