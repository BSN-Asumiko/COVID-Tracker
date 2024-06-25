
import PropTypes from 'prop-types';

const Card = ({ title, value, className }) => {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className={`p-6 bg-white rounded-lg shadow-md border-t-4 ${className}`}>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    className: PropTypes.string,
};

export default Card;
