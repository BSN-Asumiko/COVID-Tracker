
import { Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar/Navbar";
import Aside from "@/components/aside/Aside";


const Layout2 = () => {
    return (
        <div className="flex h-screen w-screen">

        <Navbar />
        <Aside />
        <main>
            <Outlet />
        </main>

        </div>
    )
}

export default Layout2;
