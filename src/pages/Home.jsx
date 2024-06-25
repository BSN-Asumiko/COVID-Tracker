import Faq from "@/components/homePageComponents/faq/faqsection/Faq"
import AppStatistics from "@/components/homePageComponents/appStatistics/appStatisticsMain/AppStatistics";

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
