import Layout1 from "@/layout/Layout1";
import Layout2 from "@/layout/Layout2";
import Home from "@/pages/Home";
import Tracker1 from "@/pages/Tracker1";
import Tracker2 from "@/pages/Tracker2";
import Tracker3 from "@/pages/Tracker3";
import Tracker4 from "@/pages/Tracker4";
import Tracker5 from "@/pages/Tracker5";
import Tracker6 from "@/pages/Tracker6";
import Tracker7 from "@/pages/Tracker7";
import Tracker8 from "@/pages/Tracker8";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter ([
    {
        path:"/",
        element: <Layout1 />,
        children:[
            {
                path:"/",
                element: <Home />
            }
        ]
    },
    {
        path:"/tracker",
        element: <Layout2 />,
        children:[
            {
                path:"/tracker",
                element: <Tracker1 />
            },
            {
                path:"/tracker/2",
                element: <Tracker2 />
            },
            {
                path:"/tracker/3/:page?",
                element: <Tracker3 />
            },
            {
                path:"/tracker/4",
                element: <Tracker4 />
            },
            {
                path:"/tracker/5",
                element: <Tracker5 />
            },
            {
                path:"/tracker/6",
                element: <Tracker6 />
            },
            {
                path:"/tracker/7",
                element: <Tracker7 />
            },
            {
                path:"/tracker/8",
                element: <Tracker8 />
            }
        ]
    }
])

export default router;
