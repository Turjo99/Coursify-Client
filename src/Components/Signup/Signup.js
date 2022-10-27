import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import "./Signup.css";
const Provider = new GoogleAuthProvider();

const Signup = () => {
  const [error, setError] = useState(false); //setting default state
  const [passwordError, setPasswordError] = useState("");

  const { createUser, googleSignIn, updateUserProfile, githubSignIn } =
    useContext(AuthContext);
  const register = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const image = form.imgURL.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(email, name, password, image);
    //took the values from form and used it to create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(true); //changing state
        handleUpdateProfileUser(name, image);
      })
      //Showed error message if user doesnt give valid input
      .catch((error) => setPasswordError(error.message));
  };
  //updating user information
  const handleUpdateProfileUser = (name, image) => {
    const profile = {
      displayName: name,
      photoURL: image,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => console.error(err));
  }; //sign in with google with auth and provider
  const handleGoogleSignIn = () => {
    googleSignIn(Provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(true);
        setPasswordError("");
      })
      .catch((error) => console.error(error));
  };
  //Github Sign In
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setPasswordError("");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      {/* Register Section  */}
      <section className="">
        <div className="container py-5">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid mb-5"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 className="mb-5">Please Register</h1>
              <form onSubmit={register}>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Name"
                    name="name"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Image URL"
                    name="imgURL"
                  />
                </div>
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
                  Register
                </button>
                {/* Conditional Rendering */}
                {error && (
                  <div className="text-success my-3 fw-bolder">
                    User Successfully Logged In
                  </div>
                )}
                <p className="mt-4">{passwordError}</p>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <button
                  className="btn btn-primary btn-block d-block w-75 mx-auto mb-3 "
                  onClick={handleGoogleSignIn}
                >
                  <i className="fab fa-facebook-f me-2"></i>Sign In with Google
                </button>
                <button
                  className="btn btn-primary btn-block d-block w-75 mx-auto mb-3 "
                  onClick={handleGithubSignIn}
                >
                  <i className="fab fa-facebook-f me-2"></i>Sign In with github
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
