import { Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar/Navbar";

const Layout2 = () => {
    return (
        <>
        <Navbar />
        {/* Aside */}
        <main className="bg-[color:var(--col-components-bg)]" >
            <Outlet />
        </main>

        </>
    )
}

export default Layout2;
