import React, { useContext } from "react";
import GoogleSignIn from "../components/GoogleSignIn/GoogleSignIn";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const {SignInUser} = useContext(AuthContext);
  
  const handleSignInUser = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    SignInUser(email,password)
    .then((result) => {
      console.log(result?.user);
  
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
           <img src="https://irtrd.com/wp-content/uploads/2018/08/login.gif" alt="" />
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignInUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <div className="">
                  Don't Have An Account? Please <Link to="/register" className="text-[#0f70c2]">Register</Link>
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] text-white  hover:bg-[#0f70c2]">Login</button>
              </div>
              <GoogleSignIn></GoogleSignIn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
