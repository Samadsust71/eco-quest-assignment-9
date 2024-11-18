import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
    <h1 className="text-2xl font-bold text-center pt-6">Register now!</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name='name'
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            name='photo'
            placeholder="photo url"
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
            name='email'
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
            name='password'
            placeholder="password"
            className="input input-bordered"
            required
          />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-600 text-white font-bold hover:bg-green-600">Register</button>
        </div>
      </form>
      <p className="text-center mb-6">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="text-green-600">
            Login
          </Link>{" "}
        </p>
    </div>
  </div>
  )
}

export default Registration
