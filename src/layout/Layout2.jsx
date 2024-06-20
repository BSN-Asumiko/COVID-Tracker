
import { Outlet } from "react-router-dom"
import Navbar from "@/components/navbar/Navbar";
import Aside from "@/components/aside/Aside";


const Layout2 = () => {
    return (
        <>

        <Navbar />
        <Aside />
        <main>
            <Outlet />
        </main>

        </>
    )
}

export default Layout2;
