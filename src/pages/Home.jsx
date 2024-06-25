

import CarouselSection from "@/components/homePageComponents/carousel/CarouselSection";
import Faq from "@/components/homePageComponents/faq/faqsection/Faq"

const Home = () => {
    return (
        <>
            <main className="w-[100%] bg-[color:var(--col-home-main)]">
                <CarouselSection />
                <Faq/>
            </main>
        </>
    )
}

export default Home;
