import Faq from "@/components/hompage/faq/faqsection/Faq";
import AppStatistics from "@/components/hompage/appStatistics/appStatisticsMain/AppStatistics";
import GetApp from "@/components/hompage/getApp/GetApp";
import HeroSection from "@/components/hompage/heroSection/HeroSection";
import IconBar from "@/components/hompage/iconBar/IconBar";

const Home = () => {
    return (
        <>
            <main className="w-[100%] bg-[color:var(--col-home-main)]">
                <HeroSection />
                <div className="mx-[10vw] pb-[10%] ">
                    <IconBar />
                </div>
                <AppStatistics />
                <Faq/>
                <GetApp />
            </main>
        </>
    )
}

export default Home;
