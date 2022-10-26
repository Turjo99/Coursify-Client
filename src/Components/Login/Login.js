import React from "react";

const Login = () => {
  return (
    <div>
      <section class="">
        <div class="container py-5">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid mb-5"
                alt="Phone image"
              />
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 className="mb-5">Please Login</h1>
              <form>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    class="form-control form-control-lg"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    class="form-control form-control-lg"
                    placeholder="Enter Your Password"
                  />
                </div>

                <div class="d-flex justify-content-around align-items-center mb-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button type="submit" class="btn btn-primary btn-lg btn-block">
                  Sign in
                </button>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  class="btn btn-primary btn-block d-block w-75 mx-auto mb-3 "
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                </a>
                <a
                  class="btn btn-primary d-block btn-block w-75 mx-auto"
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-twitter me-2"></i>Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
