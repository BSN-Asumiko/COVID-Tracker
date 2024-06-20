import PropTypes from 'prop-types';

const GlobalItem = ({title, value, imgSrc, valueClassName}) => {
    return (
    <li className="">
        <div className="flex bg-[color:var(--col-body)]">
            
          <div className="text-xl ">
            <p className="font-bold">{title}</p>
            <p className={`font-bold ${valueClassName}`}>{value}</p>
            </div>
            {imgSrc && <img src={imgSrc} alt="" className="w-12 h-12" />}
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

