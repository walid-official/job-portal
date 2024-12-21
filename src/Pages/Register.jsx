import React, { useContext } from "react";
import registerLottie from "../assets/register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import GoogleSignIn from "../components/GoogleSignIn/GoogleSignIn";
import Login from "./Login";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const profile = { displayName: name, photoURL: photo };
        updateUserProfile(profile)
          .then(() => {
            reset(); // Reset the form after successful registration
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie animationData={registerLottie} loop={true} />
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegisterForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="">
                <p>Already Have An Account ? Please <Link to="/login" className="text-[#0f70c2]">Login</Link></p>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] text-white  hover:bg-[#0f70c2]">
                  Register
                </button>
              </div>
              <GoogleSignIn></GoogleSignIn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
