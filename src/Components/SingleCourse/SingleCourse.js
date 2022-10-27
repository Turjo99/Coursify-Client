import React from "react";
import { Link } from "react-router-dom";
import "./SingleCourse.css";

const SingleCourse = ({ course }) => {
  const { _id, cname, img, description } = course;
  return (
    <div className="">
      <section className="dark">
        <div className="container py-4">
          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src={img} alt="Image Title" />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">{cname}</a>
              </h1>
              <div className="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                {description.slice(0, 200)}
              </div>
              <Link to={`/courses/${_id}`}>
                <button className="btn btn-primary w-25">Show More</button>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SingleCourse;
