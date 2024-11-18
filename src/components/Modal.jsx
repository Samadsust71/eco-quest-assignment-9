import React from "react";

const Modal = () => {
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">No Consultation Ongoing Now!!!</h3>
        <p className="py-4">Daily Consultation Time 10:00am - 8:00pm </p>
      
        <div className="modal-action justify-center w-full text-center">
          <form method="dialog">
            <button className="btn w-full bg-[#0a5784] text-white font-semibold hover:bg-[#0a5784]">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
