import React from "react";
import Home from "../../pages/Home.jsx";
import About from "../../pages/About.jsx";
import Accommodation from "../../pages/Accommodation.jsx";
import Blog from "../../pages/Blog.jsx";
import FindUs from "../../pages/FindUs.jsx";
import Gateway from "../../pages/Gateway.jsx";
import Restaurant from "../../pages/Restaurant.jsx";
import { useRoutes } from "react-router-dom";
const Navigation = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "accommodation", element: <Accommodation /> },
    { path: "blog", element: <Blog /> },
    { path: "find-us", element: <FindUs /> },
    { path: "gateway", element: <Gateway /> },
    { path: "restaurant", element: <Restaurant /> },
  ]);

  return routes;
};

export default Navigation;
