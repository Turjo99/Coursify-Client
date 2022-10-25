import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className=" mb-3 container mt-5">
            <div className="row no-gutters align-items-center">
              <div className="col-md-4">
                <img
                  src="https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png"
                  className="w-100"
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
        </Carousel.Item>
        <Carousel.Item>
          <div className=" mb-3 container mt-5">
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
        </Carousel.Item>
        <Carousel.Item>
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
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
