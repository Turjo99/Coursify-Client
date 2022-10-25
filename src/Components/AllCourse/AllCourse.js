import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "../SingleCourse/SingleCourse";
import "./AllCourse.css";

const AllCourse = () => {
  const allCourse = useLoaderData();

  return (
    <div className="grid container">
      {allCourse.map((course) => {
        return (
          <div>
            <SingleCourse key={course._id} course={course}></SingleCourse>
          </div>
        );
      })}
    </div>
  );
};

export default AllCourse;
