import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import LandingPage from "../pages/landingPage";

const router = createBrowserRouter([
    
    {
        path: "/",
        element: <LandingPage/>,
    },
    {   
        path: "/login",
        element: <Login/>,
    }
]);

export function AppRouter (){
    return <RouterProvider router={router}/>
}
