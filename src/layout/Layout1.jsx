import { Outlet } from "react-router-dom"


const Layout1 = () => {
    return (
        <div className="w-full h-screen bg-[color:var(--col-bg-home)]">
        <main >
            <Outlet /> 
        </main>
        </div>
    )
}

export default Layout1;
