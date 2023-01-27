import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="modalContainer" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>Sign up to my mailing list!</h2>
        <button className="close-button" onClick={() => setShowModal(false)}>
          X
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
