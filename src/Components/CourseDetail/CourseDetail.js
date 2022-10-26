import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const details = useLoaderData();
  const { cname, description, img } = details[0];
  console.log(details);
  return (
    <div className="container">
      <div class="card text-white bg-dark mb-3">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{cname}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      {/* <section class="card bg-secondary text-dark ">
        <div class="card mb-3">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{cname}</h5>
            <p class="card-text">{description}</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CourseDetail;
