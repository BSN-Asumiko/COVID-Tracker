
import { Outlet } from "react-router-dom"
import Navbar from "@/components/navbar/Navbar";
import Aside from "@/components/aside/Aside";


const Layout2 = () => {
    return (
        <div className="flex w-screen h-screen">

        <Navbar />
        <Aside />
        {/*<main className="h-screen bg-[color:var(--col-components-bg)]"> */}
        <main className="h-screen bg-[grey]">
            <Outlet />
        </main>

        </div>
    )
}

export default Layout2;
