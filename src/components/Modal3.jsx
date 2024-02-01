import React, { useState } from "react";
import "./Modal.css";

const Modal3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="modal1 btn" onClick={() => setIsOpen(true)}>
        Open Modal X
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="modal">
            <button className="close-button" onClick={handleClose}>
              X
            </button>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal3;
