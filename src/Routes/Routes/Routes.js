import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/news/:Id',
                element:<PrivateRoute> <News></News></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.Id}`)
            },
            
        
            {
                path: '/category/:Id',
                element: <Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.Id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/termsAndConditions',
                element:<TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }

        ]
    }
])