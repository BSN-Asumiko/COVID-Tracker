/* eslint-disable react/prop-types */
const GlobalItem = ({ title, value, imgSrc, valueClassName }) => {
  return (
    <li className="relative m-4 bg-[color:var(--col-body)] overflow-hidden transform transition duration-500 hover:scale-110">
      <div className="text-xl flex flex-col justify-between w-full p-5 relative">
        <p className="font-semibold text-15px">{title}</p>
        <div className="relative w-full mt-4">
          <div className="absolute -left-6 -right-6 h-px bg-[color:var(--col-grey)] opacity-70"></div>
        </div>
        <p className={`font-bold ${valueClassName} mt-4`}>{value}</p>
      </div>
      <div className="w-[140px] h-[140px] absolute right-[-30px] top-[-30px] leading-[60px] text-white text-xl opacity-10">
        <img src={imgSrc} alt="#" className="w-full animate-[spin_4s_linear_infinite]" />
      </div>
    </li>
  );
};



export default GlobalItem;
