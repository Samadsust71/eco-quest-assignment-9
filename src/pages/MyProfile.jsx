import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

const MyProfile = () => {
   
    const{user} = useContext(AuthContext)
    const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-6 rounded-xl">
      <div className="card  bg-base-100 shadow-xl p-6">
        <figure className="w-32 h-32 mx-auto">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className=" h-32 w-32 object-cover rounded-full border-4 border-green-600"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold text-neutral-800">
            Welcome, {user.displayName || "User"}!
          </h2>
          <p className="text-gray-600 mt-1">Name: {user?.displayName}</p>
          <p className="text-gray-600 mt-2">Email: {user?.email}</p>
          <div className="card-actions justify-center mt-4">
            <button
              onClick={() => navigate("/auth/updateprofile")}
              className="btn bg-green-600 text-white hover:bg-green-600 btn-sm"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
