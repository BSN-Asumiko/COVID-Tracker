

import CarouselSection from "@/components/homePageComponents/carousel/CarouselSection";
import Faq from "@/components/hompage/faq/faqsection/Faq";
import AppStatistics from "@/components/hompage/appStatistics/appStatisticsMain/AppStatistics";
import GetApp from "@/components/hompage/getApp/GetApp";
import HeroSection from "@/components/hompage/heroSection/HeroSection";
import IconBar from "@/components/hompage/iconBar/IconBar";
import ArticlesSection from "@/components/hompage/articles/articlesSection/ArticlesSection";

const Home = () => {
    return (
        <>
            <main className="w-[100%] bg-[color:var(--col-home-main)]">
                <HeroSection />
                <div className="mx-[10vw]">
                    <IconBar />
                </div>
                <CarouselSection />
                <AppStatistics />
                <Faq/>
                <GetApp />
                <ArticlesSection />
            </main>
        </>
    )
}

export default Home;
