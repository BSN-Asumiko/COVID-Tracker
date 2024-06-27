/* eslint-disable react/prop-types */
const GlobalItem = ({ title, value, imgSrc, valueClassName }) => {
  return (
    <li className="relative m-2 lg:m-4 bg-[color:var(--col-body)] overflow-hidden transform transition duration-500 hover:scale-110 @container">
      <div className="text-lg md:text-xl flex flex-col justify-between w-full p-5 relative">
        <p className="font-medium text-base">{title}</p>
        <div className="relative w-full mt-4">
          <div className="absolute -left-6 -right-6 h-px bg-[color:var(--col-grey)] opacity-70"></div>
        </div>
        <p className={`font-semibold ${valueClassName} mt-4 text-2xl @2xs:text-4xl`}>{value}</p>
      </div>
      <div className="w-[150px] h-[150px] absolute right-[-30px] top-[-30px] leading-[60px] opacity-10">
        <img src={imgSrc} alt="#" className="w-full hover:animate-[spin_4s_linear_infinite]" />
      </div>
    </li>
  );
};



export default GlobalItem;
