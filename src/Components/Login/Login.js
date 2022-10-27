import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [userError, setUserError] = useState("");
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const login = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const from = location.state?.from?.pathname || "/"; //redirect user if came from any specific private route
    console.log(email);
    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
        setError(true);
      })
      // handling error message
      .catch((error) => setUserError(error.message));
  };
  return (
    <div>
      {/* Login Page Design */}
      <section className="text-white">
        <div className="container py-5">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid mb-5"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 className="mb-5">Please Login</h1>
              <form onSubmit={login}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Email"
                    name="email"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Password"
                    name="password"
                  />
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Login
                </button>
                {/* conditional rendering */}
                {error && <div className="">Login Successful</div>}
                <p className="text-danger">{userError}</p>

                <p>
                  Dont have a account? Please <Link to="/signup">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
