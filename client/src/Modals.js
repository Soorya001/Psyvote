import React from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Modals = ({
  setDbd,
  state,
  setSt,
  string,
  table,
  op,
  attribute,
  setDataUpdater,
  dataUpdater,
}) => {
  const hideModal = () => {
    setSt(false);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const str = e.target[0].value;
    const dataa = str;
    let data;
    switch (op) {
      case "addition":
        data = await axios.get("http://localhost:5000/add", {
          params: {
            table: table.toUpperCase(),
            data: dataa,
          },
        });
        break;
      case "updation":
        data = await axios.get("http://localhost:5000/update", {
          params: {
            table: table.toUpperCase(),
            data: dataa,
          },
        });
        break;
      case "deletion":
        data = await axios.get("http://localhost:5000/delete", {
          params: {
            table: table.toUpperCase(),
            id: dataa[0],
          },
        });
        break;
      case "find":
        data = await axios.get("http://localhost:5000/find", {
          params: {
            table: table.toUpperCase(),
            value: dataa[0],
            attribute: attribute,
          },
        });
        setDbd(data);
        break;
      // to be written for order by and group by
      default:
        break;
    }
    console.log(data);
    if (
      (op === "updation" || op === "deletion" || op === "addition") &&
      data.data === "success"
    )
      setDataUpdater(dataUpdater + 1);
    // window.location.reload();
  };

  return (
    <>
      <Modal show={state} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>{string}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => onFormSubmit(e)}>
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
