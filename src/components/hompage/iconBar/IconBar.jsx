/* eslint-disable react/prop-types */

const IconBar = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg px-8 py-6 -mt-12 relative z-10 ">
      <div className="flex justify-between items-center ">
        <IconItem src="\assets\images\b-2.png" alt="Icon 1" />
        <IconItem src="\assets\images\b-3.png" alt="Icon 2" />
        <IconItem src="\assets\images\b-4.png" alt="Icon 3" />
        <IconItem src="\assets\images\b-5.png" alt="Icon 4" />
        <IconItem src="\assets\images\b-6.png" alt="Icon 5" />
        <IconItem src="\assets\images\b-2.png" alt="Icon 6" />

      </div>
    </div>
  );
};

const IconItem = ({ src }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={src} className="w-12 h-12 mb-2" />
      <span className="text-sm text-gray-600"></span>
    </div>
  );
};

export default IconBar;