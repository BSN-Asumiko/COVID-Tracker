import { Outlet } from "react-router-dom";
import Navbar from "@/components/homePageComponents/Navbar";
import Footer from "@/components/homePageComponents/footer/Footer";


const Layout1 = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> 
            </main>
            <Footer />


        </>
    )
}

export default Layout1;
