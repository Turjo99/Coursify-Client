import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className=" mb-3 container mt-5">
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <img
                  src="https://img.lovepik.com/element/45001/7838.png_300.png"
                  className="w-100 hero-img"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title my-3 fw-bolder">
                    Explore The Best In You With Coursify
                  </h1>
                  <p className="card-text">
                    87% of people learning for professional development report
                    career benefits like getting a promotion, a raise, or
                    starting a new career
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className=" mb-3 container mt-5">
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <img
                  src="https://cdn.dribbble.com/users/4214751/screenshots/10503785/website_vec_2-01_4x.png"
                  className="w-100 hero-img"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title fw-bolder my-3">
                    We offer the best instructor from worldwide to enlighten you
                    with knowledge
                  </h1>
                  <p className="card-text">
                    Find the right instructor for you. Choose from many topics,
                    skill levels, and languages. Shop thousands of high-quality
                    on-demand online courses. Start learning today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* <Carousel.Item>
          <div className="mb-3 container mt-5">
            <div className="row no-gutters align-items-center">
              <div className="col-md-4">
                <img
                  src="https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png"
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Hero;
