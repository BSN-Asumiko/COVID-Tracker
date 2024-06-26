// eslint-disable-next-line react/prop-types
const WorldWideItem = ({ title, value, imageSrc }) => {
  return (
    <li className="bg-[color:var(--col-body)] p-2 @sm:p-4 text-[color:var(--col-dark-blue)] last:col-span-2 lg:last:col-span-1 grid grid-cols-[auto_80%] gap-x-2 min-w-40">
      {imageSrc && (
        <img src={imageSrc} alt="covid-icon" className="w-[5cqw] max-w-9 h-auto row-start-1 row-end-3  place-self-center" />
      )}
      <p className="text-base ml:text-[1.5cqw]">{title}</p>
      <p className="font-semibold text-xl ml:text-[2cqw] col-start-2">{value}</p>
    </li>
  );
};

export default WorldWideItem;


