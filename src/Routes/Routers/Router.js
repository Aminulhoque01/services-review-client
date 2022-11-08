import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Service from "../../components/Services/Service";
import Main from "../../layout/Main/Main";
import DetailsPage from "../../pages/DetailsPage";
import Review from "../../pages/Review";
import PrivetRouter from "../../PrivetRoutes/PrivetRouter";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/HomeServices')
            },
            {
                path:'/services',
                element:<Service></Service>,
                loader:()=>fetch('http://localhost:5000/AllServices')

            },
            {
                path:'/details/:id',
                element:<PrivetRouter><DetailsPage></DetailsPage></PrivetRouter>,
                loader:({params})=>fetch(`http://localhost:5000/AllServices/${params.id}`)
            },
            {
              path:'/review',
              element:<Review></Review>  
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