import { Outlet } from "react-router-dom";
import Navbar from "@/components/hompage/navbar/Navbar";
import Footer from "@/components/hompage/footer/Footer";


const Layout1 = () => {
    return (
        <>
            <Navbar />
            <main className="h-auto">
                <Outlet /> 

            </main>
            <Footer />

        </>
    )
}

export default Layout1;
