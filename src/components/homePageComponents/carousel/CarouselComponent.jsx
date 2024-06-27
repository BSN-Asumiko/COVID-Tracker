import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import carouselData from "@/utils/carouselCardsData";
import CarouselCard from "./CarouselCard";

const CarouselComponent = () => {
    return (
    <section className="w-full overflow-hidden z-[-1]">
        <Carousel className="w-full m-auto"
                opts={{
                align: "start",
                loop: true,
                }}>
                <CarouselContent className="w-full flex gap-2 h-[20em]">
                {carouselData.map((object, index) => (
                            <CarouselItem key={index} className=" lg:basis-1/4 md:basis-1/3 sm:basis-1/2 ">
                                <CarouselCard icon={object.icon} title={object.title} text={object.text} color={object.color}/>
                            </CarouselItem>    
                        ))}
                </CarouselContent>
            </Carousel>
    </section>
    )
}


export default CarouselComponent