import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="card mb-3 bg-dark w-75 mx-auto">
        <div className="card-body">
          <h1 className="card-title"> what is cors</h1>
          <p className="card-text">
            Web browsers prevent unknown websites from accessing your
            application programming interfaces and services. This way, your
            server shares its resources only with clients that are on the same
            domain. However, there are situations where you want to lift this
            guard or get more fine-grained control over which websites access
            your server's resources. In such cases, you implement CORS
            (cross-origin resource sharing) on your server.
          </p>
        </div>
      </div>
      <div className="card mb-3 bg-dark w-75 mx-auto">
        <div className="card-body">
          <h1 className="card-title">How does the private route work?</h1>
          <p className="card-text">
            Often times when building a web app, you'll need to protect certain
            routes in your application from users who don't have the proper
            authentication. Protected routes let us choose which routes users
            can visit based on whether they are logged in. For example, you
            might have public routes that you want anyone accessing, like a
            landing page, a pricing page, and the login page. Protected routes
            should only be available to users that are logged in, like a
            dashboard or settings page. Though React Router doesn't provide any
            functionality for this out of the box, because it was built with
            composability in mind, adding it is fairly straight forward.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card mb-3 bg-dark w-75 mx-auto">
        <div className="card-body">
          <h1 className="card-title">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p className="card-text">
            To go along with the current flow of technological development,
            every developer wants to build great apps, that will serve as
            business solutions. If you are one of them, then come on, you are in
            the right place. For this time, I’m going to help you discover the
            features and benefits of Firebase to help take your mobile app a
            notch higher. As a result, you'll understand which backend
            development solution works better for you, depending on your
            specific requirements, and the product type (final product, MVP,
            prototype). Firebase is a toolkit and infrastructure that aims at
            supporting the process of building better applications and growing a
            successful business. This technique continues to innovate and
            dominate the BaaS (Backend as a Service) market. Along with the
            time, it has grown so much that it has become a key component of
            Google’s mobile strategy. It was bought by Google and now it is
            being constantly improved in order to make the user experience much
            more convenient and productive.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card mb-3 bg-dark w-75 mx-auto">
        <div className="card-body">
          <h1 className="card-title">What is Node? How does Node work?</h1>
          <p className="card-text">
            Whenever a client requests something from the client side of the
            application what happens is , the request is first sent to the
            server and then in that server some processing or calculations goes
            on for the validation of the client side request and after doing all
            such validation a response is sent to the client side. Basically for
            doing all such calculations and processing , this NodeJs framework
            of JavaScript is used.Whenever a client requests something from the
            client side of the application what happens is , the request is
            first sent to the server and then in that server some processing or
            calculations goes on for the validation of the client side request
            and after doing all such validation a response is sent to the client
            side. Basically for doing all such calculations and processing ,
            this NodeJs framework of JavaScript is used.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
