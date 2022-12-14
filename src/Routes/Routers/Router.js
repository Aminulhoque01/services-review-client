import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Service from "../../components/Services/Service";
import Main from "../../layout/Main/Main";
import AddServies from "../../pages/AddServies";
import DetailsPage from "../../pages/DetailsPage";
import Review from "../../pages/Review";
import ReviewDetails from "../../pages/ReviewDetails";
import ReviewPage from "../../pages/ReviewPage";
import Update from "../../pages/Update";
import PrivetRouter from "../../PrivetRoutes/PrivetRouter";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://services-review-server-tan.vercel.app/HomeServices')
            },
            {
                path:'/services',
                element:<Service></Service>,
                loader:()=>fetch('https://services-review-server-tan.vercel.app/AllServices')

            },
            {
                path:'/details/:id',
                element:<PrivetRouter><DetailsPage></DetailsPage></PrivetRouter>,
                loader:({params})=>fetch(`https://services-review-server-tan.vercel.app/AllServices/${params.id}`)
            },
            {
                path:'/reviewPage/:id',
                element:<PrivetRouter><ReviewPage></ReviewPage></PrivetRouter>,
                loader:({params})=>fetch(`https://services-review-server-tan.vercel.app/AllServices/${params.id}`)
            },
            {
                path:'/addServices',
                element:<AddServies></AddServies>
            },
            {
              path:'/review',
              element:<Review></Review>  
            },
            {
                path:'/reviews/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`https://services-review-server-tan.vercel.app/reviews/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])