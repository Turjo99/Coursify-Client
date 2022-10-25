import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

const Courses = () => {
  return (
    <div>
      <div className="row flex-sm-column-reverse flex-lg-row">
        <div className="border border-dark col-lg-8 col-12">
          <Outlet></Outlet>
        </div>
        <div className="col-lg-4 col-12">
          <Categories></Categories>
        </div>
      </div>
    </div>
  );
};

export default Courses;
