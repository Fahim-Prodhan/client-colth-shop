import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Collections from "../pages/Collection/Collection";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import WishList from "../pages/WishList/WishList";
import Payment from "../pages/PaymentPage/Payment";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/collections',
                element:<Collections></Collections>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'/wishlist',
                element:<WishList></WishList>
            },
           ]
    },
    {
        path:"/payment",
        element:<Payment></Payment>
    }
])
export default router;