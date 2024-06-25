/* eslint-disable react/prop-types */
const WidgetHead = ({text, className}) => {
    return (
        <div className={`px-5 py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid
${className}`}>
            <h1 className="text-xl font-semibold text-[color:var(--col-dark-blue)]">{text}</h1>
        </div>
    )
}
export default WidgetHead