import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CourseDetail = () => {
  const details = useLoaderData();
  const { _id, cname, description, img, price, rating, requirements } =
    details[0];

  return (
    <div className="container my-5">
      <div className="card text-white bg-dark mb-3">
        <img src={img} className=" w-75 mx-auto " alt="..." />
        <div className="card-body">
          <h1 className="card-title">{cname}</h1>
          <p className="card-text w-75 mx-auto">{description}</p>
        </div>
        <div className="d-flex justify-content-between w-75 mx-auto">
          <div className="">
            <h3 className="fw-bolder">Price : ${price}</h3>
          </div>
          <div className="">
            <p>
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              {rating}
            </p>
          </div>
        </div>
        <Link to={`/checkout/${_id}`}>
          <button className="btn btn-primary w-75 mx-auto fw-bolder fs-4 my-5">
            Get Premium Access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
