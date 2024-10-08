import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Login } from "./pages/login";
import { Networks } from "./pages/networks";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Admin/>
    },
    {
        path:'/admin',
        element:<Login/>
    },
    {
        path:'/admin/social',
        element:<Networks/>
    }
])

export { router } ;
