import React from "react";

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-middle">
      <div className="modal-box bg-gradient-to-b from-blue-50 via-sky-100 to-white">
        <h3 className="font-bold text-lg text-gray-800">No Consultation Ongoing Now!!!</h3>
        <p className="py-4 text-gray-600">Daily Consultation Time 10:00am - 8:00pm </p>
      
        <div className="modal-action justify-center w-full text-center">
          <form method="dialog">
            <button className="px-4 py-2 rounded-lg w-full bg-[#0a5784] text-white font-semibold hover:bg-[#0a5784]">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
