import React, { useState } from "react";
import "./Modal.css";

const Modal2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="modal2 btn" onClick={() => setIsOpen(true)}>
        Open Modal. CLOSE
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="modal">
            <button className="close-button-inside" onClick={handleClose}>
              Close
            </button>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal2;
