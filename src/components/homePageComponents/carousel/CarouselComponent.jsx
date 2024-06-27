import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import carouselData from "@/utils/carouselCardsData";
import CarouselCard from "./CarouselCard";

const CarouselComponent = () => {
    return (
    <section className="w-full overflow-hidden relative">
        <Carousel className="w-full m-auto"
                opts={{
                align: "start",
                loop: true,
                }}>
                <CarouselContent className="w-full flex gap-6">
                {carouselData.map((object, index) => (
                            <CarouselItem key={index} className="flex-shrink-0 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full">
                                <CarouselCard icon={object.icon} title={object.title} text={object.text} color={object.color}/>
                            </CarouselItem>    
                        ))}
                </CarouselContent>
            </Carousel>
    </section>
    )
}

/* <Carousel className="w-full"
                opts={{
                align: "start",
                loop: true,
                }}>
                <CarouselContent className="w-full flex gap-7">
                {carouselData.map((object, index) => (
                            <CarouselItem key={index} className="flex-shrink-0 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full">
                                <CarouselCard icon={object.icon} title={object.title} text={object.text} color={object.color}/>
                            </CarouselItem>    
                        ))}
                </CarouselContent>
            </Carousel> */

/* const CarouselComponent = () => {
    return (
    <>
        <Carousel className="w-[150%] m-auto" 
            opts={{
            align: "start",
            loop: true,
            }}>
            <CarouselContent className="w-full flex gap-8">
                {carouselData.map((object, index) => (
                <CarouselItem key={index} className="flex-shrink-0 lg:basis-1/6 md:basis-1/4 sm:basis-1/2 basis-full">
                    <CarouselCard 
                        icon={object.icon} 
                        title={object.title} 
                        text={object.text} 
                        color={object.color}
                    />
                </CarouselItem>    
                ))}
            </CarouselContent>
                </Carousel>
    </>
    )
}
 */
export default CarouselComponent