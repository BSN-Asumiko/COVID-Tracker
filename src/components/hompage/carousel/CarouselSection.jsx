/* eslint-disable no-unused-vars */

import CarouselComponent from "./CarouselComponent";

export function CarouselSection() {
    return (
        <section className="pt-[6em]">
            <div className="text-center lg:w-[35%] sm:[w-50%]  m-auto  mb-[3.5em]">
                <p className=" text-[medium] text-[color:var(--col-body)] opacity-80">App Feature</p>
                <h1 className=" text-[xxx-large] font-bold text-[color:var(--col-body)] leading-[1.2em]">Basic Feature You Will Get When You Use</h1>
            </div>
            <section className="relative w-full overflow-hidden h-[25em]">
                <div className="absolute inset-0 flex justify-between z-20 pointer-events-none">
                    <CarouselMask />
                    <CarouselMask />
                </div>
                <CarouselComponent/>
            </section>
            
        </section>
    )
}


const CarouselMask = (className) => {
    return (
    <div className="bg-[color:var(--col-home-main)] h-full w-[5%] opacity-[60%] blur-[0.05em] z-[1]" ></div>
    )
}


export default CarouselSection