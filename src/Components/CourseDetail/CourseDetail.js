import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Pdf from "react-to-pdf";

const CourseDetail = () => {
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [20, 10],
  };

  const details = useLoaderData();
  const { _id, cname, description, img, price, rating, requirements } =
    details[0];

  return (
    <div className="container my-5" ref={ref}>
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
        {/* <PDFDownloadLink document={<PDFFile></PDFFile>} filename="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button>Download</button>
            )
          }
        </PDFDownloadLink> */}
        <Pdf targetRef={ref} filename={`${cname}.pdf`} options={options}>
          {({ toPdf }) => (
            <div
              className="btn btn-primary bg-lime-400 hover:bg-lime-500 active:text-sm transition-all w-44 text-center mx-auto lg:mx-0 py-2 font-semibold rounded-lg cursor-pointer"
              onClick={toPdf}
            >
              Download PDF
              {/* <HiDownload className="inline align-baseline ml-2 text-lg" /> */}
            </div>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default CourseDetail;
