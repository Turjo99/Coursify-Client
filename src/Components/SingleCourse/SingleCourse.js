import React from "react";
import "./SingleCourse.css";

const SingleCourse = ({ course }) => {
  const { cname, img, description } = course;
  return (
    <div>
      <section class="dark">
        <div class="container py-4">
          <article class="postcard dark blue">
            <a class="postcard__img_link" href="#">
              <img class="postcard__img" src={img} alt="Image Title" />
            </a>
            <div class="postcard__text">
              <h1 class="postcard__title blue">
                <a href="#">{cname}</a>
              </h1>
              <div class="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                </time>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                {description.slice(0, 200)}
              </div>
              <button className="btn btn-primary w-25">Show More</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SingleCourse;
