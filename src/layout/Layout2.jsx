
import { Outlet } from "react-router-dom"
import Navbar from "@/components/tracker/navbar/Navbar";
import Aside from "@/components/tracker/aside/Aside";


const Layout2 = () => {
    return (

        <div className="flex w-screen h-screen overflow-hidden">
            <Navbar />
            <Aside />
            <main className=" bg-[color:var(--col-components-bg)] flex flex-col w-full items-center py-5 overflow-y-auto">
                <Outlet />
            </main>

        </div>

    )
}

export default Layout2;
