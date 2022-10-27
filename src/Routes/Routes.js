import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../Components/AllCourse/AllCourse";
import Blogs from "../Components/Blogs/Blogs";
import CheckOut from "../Components/Checkout/CheckOut";
import CourseDetail from "../Components/CourseDetail/CourseDetail";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Main from "../Components/Firebase/Main/Main";
import Hero from "../Components/Hero/Hero";
import Login from "../Components/Login/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
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

        children: [
          {
            path: "/courses",
            element: <AllCourse></AllCourse>,
            loader: () =>
              fetch("https://server-site-2z80pnrc4-turjo99.vercel.app/courses"),
          },
          {
            path: "/courses/:id",
            element: <CourseDetail></CourseDetail>,
            loader: ({ params }) =>
              fetch(
                `https://server-site-2z80pnrc4-turjo99.vercel.app/courses/${params.id}`
              ),
          },
          {
            path: "courses/categories/:id",
            element: <AllCourse></AllCourse>,
            loader: ({ params }) =>
              fetch(
                `https://server-site-2z80pnrc4-turjo99.vercel.app/categories/${params.id}`
              ),
          },
        ],
      },

      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-site-2z80pnrc4-turjo99.vercel.app/courses/${params.id}`
          ),
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
