/* eslint-disable react/prop-types */

const CarouselCard = ({color, icon, title, text}) => {
    return (
    <section className="flex flex-col justify-start h-[16em] px-[1.5em] pb-[1.5em]  rounded-[0.4em] bg-[color:var(--col-body)] text-[color:var(--col-dark-blue)] shadow-[1em_2.8em_3.75em_-0.625em_rgba(255,255,255,0.3)]">
        <div className="w-[3em] h-[3em] mt-[1.5em]  flex justify-center items-center  relative  rounded-[50%_/_25%] before:content-[''] before:absolute before:right-[-5%] before:left-[-5%] before:rounded-[5%_/_50%] before:inset-y-[10%]" style={{ backgroundColor: color }}>
            <p className="icon text-[color:var(--col-body)]">{String.fromCharCode(icon)}</p>
        </div>
        <h3 className="font-bold text-[1.2em] mt-[1em]">{title}</h3>
        <p className="text-[0.8em] opacity-[70%] mt-[0.8em]">{text}</p>
    </section>)
}


export default CarouselCard