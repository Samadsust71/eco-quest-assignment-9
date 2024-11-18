import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { passwordReset, setLoading, emailInfo } = useContext(AuthContext);
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
        setErrorMessage(err.message);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
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
              placeholder={"Enter your email"}
              className="input input-bordered"
              required
            />
          </div>
          <div>
            {errorMessage && (
              <label className="label">
                <span className="label-text text-xs text-red-600">
                  {errorMessage}
                </span>
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-600 text-white font-bold hover:bg-green-600">
              {" "}
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
