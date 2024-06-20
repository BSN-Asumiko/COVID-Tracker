import PropTypes from 'prop-types';

const GlobalItem = ({ title, value, imgSrc, valueClassName }) => {
    return (
      <li className="relative m-4">
        <div
          className="flex bg-white bg-[color:var(--col-body)] p-4 md:p-10 relative inset-0 bg-no-repeat bg-top-right bg-cover pb-4"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: '40%',
            backgroundPosition: 'right bottom',
            height: '200px',
            maxWidth: '600px',
          }}
        >
          <div className="text-xl flex flex-col justify-between w-full mr-10 md:max-w-[80%]">
            <div className="font-semibold text-15px">{title}</div>
  
            <div className="absolute inset-x-0 h-px bg-[color:var(--col-grey)] mt-12 opacity-70"></div>
  
            <div className={`font-bold ${valueClassName}`}>{value}</div>
          </div>
  
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[color:var(--col-body)] bg-no-repeat bg-top-right bg-cover opacity-50 border-b-4 pb-4"></div>
        </div>
      </li>
    );
  };

  GlobalItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imgSrc: PropTypes.string.isRequired,
    valueClassName: PropTypes.string
  };
  
  export default GlobalItem;

