import Faq from "@/components/hompage/faq/faqsection/Faq";
import AppStatistics from "@/components/hompage/appStatistics/appStatisticsMain/AppStatistics";
import GetApp from "@/components/hompage/getApp/GetApp";

const Home = () => {
    return (
        <>
            <main className="w-[100%] bg-[color:var(--col-home-main)]">
                <AppStatistics />
                <Faq/>
                <GetApp />
            </main>
        </>
    )
}

export default Home;
