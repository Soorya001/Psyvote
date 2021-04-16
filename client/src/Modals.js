import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Modals = ({ state, setSt, string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const st = state;
  console.log("state passed: ", st);

  // const showModal = () => {
  //   setIsOpen(true);
  // };

  const hideModal = () => {
    setSt(false);
  };

  return (
    <>
      {console.log("inside modal", isOpen)}
      {/* <button onClick={showModal}>Display Modal</button>  */}
      <Modal show={state} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{string}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit="return false">
            <label>
              Input:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
