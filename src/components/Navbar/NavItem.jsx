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

export default NavItem;