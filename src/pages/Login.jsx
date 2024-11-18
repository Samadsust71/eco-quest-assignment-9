import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const {signInUser,setUser,signInWithGoogle,emailInfo} = useContext(AuthContext)

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
    <div className="flex flex-col justify-center items-center my-10 max-w-xl mx-auto">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 border">
      <h1 className="text-2xl font-bold text-center pt-6">Login now!</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailInfo}
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
              <Link to={'/auth/resetpassword'}  className="label-text-alt link link-hover">
                Forgot password?
              </Link>
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
            <button className="btn bg-[#0a5784] text-white font-bold hover:bg-[#0a5784]">Login</button>
          </div>
        </form>
        
       
        <p className="text-center mb-6">
          Don"t have an account?{" "}
          <Link to={"/auth/registration"} className="text-[#0a7c84fd]">
            Register
          </Link>{" "}
        </p>
      </div>
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogin} className="px-4 flex items-center justify-center gap-2 py-2 border border-[#0a5784] w-full rounded-lg text-[#0a5784]  ">
        <FaGoogle className="text-[#0a5784]"/>
          <span>Sign In with Google</span>
        </button>
    </div>
  );
};

export default Login;
