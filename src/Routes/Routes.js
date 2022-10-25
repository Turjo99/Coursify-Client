import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Main from "../Components/Firebase/Main/Main";
import Hero from "../Components/Hero/Hero";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
