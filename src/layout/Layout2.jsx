
import { Outlet } from "react-router-dom"
import Navbar from "@/components/navbar/Navbar";
import Aside from "@/components/aside/Aside";


const Layout2 = () => {
    return (
        <div className="flex h-screen w-screen">

        <Navbar />
        <Aside />
        <main className="h-screen bg-[color:var(--col-components-bg)]">
            <Outlet />
        </main>

        </div>
    )
}

export default Layout2;
