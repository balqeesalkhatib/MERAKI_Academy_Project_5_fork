import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/index";
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Help from "../Layout/Help";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Category, { allCategory } from "../pages/categories";
import CategoryList from "../pages/categoryList";
import AdminPanel from "../pages/Admin/adminPanel";
import Login from "../pages/login";
import Booking from "../pages/Booking";
import Account from "../pages/Account/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
  {
    path: "/account",
    element : <Account/>,
  },
      
      {
        path: "/register",
        element: <Register />,
        // loader: getRegister
      },
      {
        path: "/login",
        element: <Login />,
      },

  {
    path: "/category",
    element: <Category />,
    loader: allCategory,
  },

  {
    path: "/:id",
    element: <CategoryList />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
 
  {
    path: "/booking",
    element: <Booking />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
