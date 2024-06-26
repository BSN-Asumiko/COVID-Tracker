import Faq from "@/components/hompage/faq/faqsection/Faq";
import AppStatistics from "@/components/hompage/appStatistics/appStatisticsMain/AppStatistics";

const Home = () => {
    return (
        <>
            <main className="w-[100%] bg-[color:var(--col-home-main)]">
                <AppStatistics />
                <Faq/>
            </main>
        </>
    )
}

export default Home;
