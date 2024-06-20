import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ icon, to, isActive, withCircleOrange, withCircleRed, onClick }) => {
    return (
        <li className="w-full flex justify-center">
            <NavLink
                to={to}
                className={`relative flex items-center justify-center w-14 h-14 m-1 rounded-lg cursor-pointer ${
                    isActive ? 'text-[color:var(--col-body)] bg-[color:var(--col-common-blue)]' : 'text-[color:var(--col-common-blue)] hover:text-[color:var(--col-body)] hover:bg-[color:var(--col-common-blue)]'
                }`}
                onClick={onClick}
            >
                <span className="text-2xl icon">{icon}</span>
                {withCircleOrange && <span className="bg-[color:var(--col-orange)] w-2 h-2 p-0 block rounded-lg absolute top-2 right-1"></span>}
                {withCircleRed && <span className="bg-[color:var(--col-wine)] w-2 h-2 p-0 block rounded-lg absolute top-2 right-1"></span>}
            </NavLink>
        </li>
    );
};

NavItem.propTypes = {
    icon: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    withCircleOrange: PropTypes.bool,
    withCircleRed: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

NavItem.defaultProps = {
    isActive: false,
    withCircleOrange: false,
    withCircleRed: false,
};
export default NavItem;
