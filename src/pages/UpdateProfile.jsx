import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
    const {updateUserProfile,setLoading}=useContext(AuthContext)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("profile updated succesfully!");
            setLoading(false)
            e.target.reset()
            navigate(`/auth/profile`);
          })
          .catch((err) => {
            setErrorMessage(err.message);
          });
      };  
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
      <h1 className="text-2xl font-bold text-center pt-6">Update Profile!</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
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
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
              
            />
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
            <button className="btn bg-green-600 text-white font-bold hover:bg-green-600"> Update Information</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
