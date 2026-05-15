import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import PopularSkills from "../Components/PopularSkills";
import SkillDetails from "../Components/SkillDetails";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRouter from "../Components/Provider/PrivateRouter";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPassword from "../Pages/ForgetPassword";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/my-profile',
                element: <PrivateRouter>
                    <MyProfile></MyProfile>
                </PrivateRouter>

            },
            {
                path: '/update-profile',
                element: <PrivateRouter>
                    <UpdateProfile></UpdateProfile>
                </PrivateRouter>

            },
            {
                path: '/popular-skills',
                element: <PopularSkills></PopularSkills>,
            }, {
                path: '/skill/:id',
                element: <PrivateRouter>
                    <SkillDetails></SkillDetails>
                </PrivateRouter>
                ,
                loader: () => fetch('/skill.json'),

            }

        ]
    }, {
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
            path: '/forget-password',
            element: <ForgetPassword></ForgetPassword>
            
    },{
            path: '/*',
            element: <ErrorPage></ErrorPage>
            
    }
])