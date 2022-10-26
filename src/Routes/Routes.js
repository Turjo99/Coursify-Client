import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../Components/AllCourse/AllCourse";
import Blogs from "../Components/Blogs/Blogs";
import CourseDetail from "../Components/CourseDetail/CourseDetail";
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

        children: [
          {
            path: "/courses",
            element: <AllCourse></AllCourse>,
            loader: () => fetch("http://localhost:5000/courses"),
          },
          {
            path: "/courses/:id",
            element: <CourseDetail></CourseDetail>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/courses/${params.id}`),
          },
        ],
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
