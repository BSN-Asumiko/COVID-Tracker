/* eslint-disable react/prop-types */
const WidgetBody = ({children, className}) => {
    return (
        <div className={`px-5 py-[15px] bg-[color:var(--col-body)] ${className}`}>
            {children}
        </div>
    )
}
export default WidgetBody