import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import Cards from "../pages/Cards/Cards";
import CardsType from "../pages/CardsType/CardsType";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NotFound/>,
    children:[
      {
        index: true,
        element: <Cards/>
      },
      {
        path: "type",
        element: <CardsType/>,
        
      },
    ]
  }
])