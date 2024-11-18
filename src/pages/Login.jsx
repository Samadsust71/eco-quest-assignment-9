import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const {signInUser,setUser,signInWithGoogle} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMessage("");
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Succesfull");
        e.target.reset()
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };  

  const handleGoogleLogin = ()=>{
    signInWithGoogle()
    .then(()=>{
      navigate(`${location?.state ? location.state : "/"}`);
    })
    .catch(err=>setErrorMessage(err.message))
  }

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
      <h1 className="text-2xl font-bold text-center pt-6">Login now!</h1>
        <form onSubmit={handleSubmit} className="card-body">
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
               type={showPass ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              
            />
             <button
            onClick={() => setShowPass(!showPass)}
            className="btn btn-xs absolute right-2 top-12"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div>
          {errorMessage&& (
              <label className="label">
                <span className="label-text text-xs text-red-600">
                  {errorMessage}
                </span>
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-600 text-white font-bold hover:bg-green-600">Login</button>
          </div>
        </form>
        <div className="divider">OR</div>
        <div className="px-4 mb-2">
          <button onClick={handleGoogleLogin} className="btn w-full">Sign In with Google</button>
        </div>
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
