import React, { useState } from "react";
import "./Modal.css";

const Modal1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="modal3 btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p>Modal Content</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal1;
