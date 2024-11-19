import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
    const {updateUserProfile,setLoading,loading}=useContext(AuthContext)
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
            setLoading(false)
            setErrorMessage(err.message);
          });
      };  
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="card bg-gradient-to-b from-blue-50 via-sky-100 to-white w-full max-w-xl shrink-0 border">
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
              className="input input-bordered bg-white"
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
              className="input input-bordered bg-white"
              
            />
          </div>
          <div>
          {errorMessage&& (
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
               {loading?"Updating...":"Update Information"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile
