import { Outlet } from "react-router-dom";
import Navbar from "@/components/homePageComponents/navbar/Navbar";
import Footer from "@/components/homePageComponents/footer/Footer";
import HeroSection from "@/components/homePageComponents/heroSection/HeroSection";


const Layout1 = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> 
                <HeroSection />

            </main>
            <Footer />


        </>
    )
}

export default Layout1;
