import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  const { cname, img, price } = course[0];
  console.log(course);
  return (
    <div>
      <h1 className="fw-bolder fs my-3">Checkout</h1>
      <div className="card mb-3 bg-dark container my-5">
        <div className="row no-gutters align-items-center">
          <div className="col-md-4">
            <img src={img} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title fs4 fw-bolder">{cname}</h1>
              <p className="fs-4 fw-bold">Price : ${price}</p>
              <button className="btn btn-primary">Proceed Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
