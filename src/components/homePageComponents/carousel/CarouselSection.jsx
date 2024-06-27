
import CarouselComponent from "./CarouselComponent";

export function CarouselSection() {
    return (
        <section className="pt-[7em]">
            <div className="text-center w-[28%] m-auto  mb-[3.5em]">
                <p className=" text-[small] text-[color:var(--col-body)] font-semibold tracking-[0.1em] mb-[1em]">App Feature</p>
                <h1 className=" text-[xx-large] font-bold text-[color:var(--col-body)] leading-[1.2em]">Basic Feature You Will Get When You Use</h1>
            </div>
            <CarouselComponent/>
        </section>
    )
}

export default CarouselSection