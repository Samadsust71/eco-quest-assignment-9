import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
      <h1 className="text-2xl font-bold text-center pt-6">Login now!</h1>
        <form className="card-body">
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
              
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-600 text-white font-bold hover:bg-green-600">Login</button>
          </div>
        </form>
        <p className="text-center mb-6">
          Don"t have an account?{" "}
          <Link to={"/auth/registration"} className="text-green-600">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
