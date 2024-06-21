// eslint-disable-next-line react/prop-types
const WorldItem = ({ title, value, imageSrc }) => {
  return (
    <li className="bg-[color:var(--col-body)] p-4 text-[color:var(--col-dark-blue)]">
      <div className="flex text-xl">
        {imageSrc && <img src={imageSrc} alt="covid-icon" className="w-12 h-12 mr-3 mt-2" />}
        <div>
          <p>{title}</p>
          <p className="font-bold text-3xl">{value}</p>
        </div>
      </div>
    </li>
  );
};

export default WorldItem;
