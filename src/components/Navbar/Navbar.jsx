import NavItem from "./NavItem";

const Navbar = () => {
    return (
        <nav>
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
        </nav>

    );
};

export default Navbar ;
