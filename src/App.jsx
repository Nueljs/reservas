import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { MainLayout } from './MainLayout';
import { Login } from './pages/Login/Login.jsx';
import { Register } from './pages/Register/Register.jsx';
import Home from './pages/Home/Home.jsx'
import {Events} from './pages/Events/Events.jsx'
import { AboutUs } from './pages/AboutUs/AboutUs.jsx'
import { EventPage } from "./pages/EventPage/EventPage.jsx";


export const App = ()=> {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {index: true, element:<Home/>},
        {path: "register", element: <Register/>},
        {path: "login", element: <Login/>},
        {path: "events", element: <Events/>},
        {path: "aboutus", element: <AboutUs/>},
        {path: "eventpage", element: <EventPage/>}
      ]
    }
  ])

  return (
    <RouterProvider router = {router}/>
  )
}


