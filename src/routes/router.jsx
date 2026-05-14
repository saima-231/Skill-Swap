import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Pages/Login";
import PopularSkills from "../Components/PopularSkills";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
             {
                path: '/popular-skills',
                element: <PopularSkills></PopularSkills>,
            }

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            }
        ]
    },{
            path: '/*',
            element: <p>error</p>
            
    }
])