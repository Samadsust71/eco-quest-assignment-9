import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { passwordReset, setLoading, emailInfo,loading } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    passwordReset(email)
      .then(() => {
        setLoading(false);
        e.target.reset();
        window.open("https://mail.google.com", "_blank");
        navigate("/auth/login")
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(err.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center my-10 w-11/12 mx-auto">
      <div className="card bg-gradient-to-b from-blue-50 via-sky-100 to-white w-full max-w-xl shrink-0 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center pt-6">Reset Password</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={emailInfo.current?.value}
              placeholder="Enter your email"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div>
            {errorMessage && (
              <label className="label bg-red-100 p-2 rounded-md">
                <span className="label-text text-xs text-red-600">
                  {errorMessage}
                </span>
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <button
            disabled={loading}
            className="py-2 rounded-lg bg-[#0a5784] text-white font-bold hover:bg-[#084a63] active:bg-[#06394e]">
              {loading?"Resetting...":"Reset Password"}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
