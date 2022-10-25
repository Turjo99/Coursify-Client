import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

const Courses = () => {
  return (
    <div>
      <div className="row ">
        <div className="border border-dark col-8">
          <Outlet></Outlet>
        </div>
        <div className="col-4">
          <Categories></Categories>
        </div>
      </div>
    </div>
  );
};

export default Courses;
