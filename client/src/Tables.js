import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import Modals from "./Modals";
const Tables = ({ string, setDataFromBackendForFiltering, setDataUpdater }) => {
  const [str, setStr] = useState("");
  const [st, setSt] = useState(false);
  const [operation, setOperation] = useState("");
  const [tableFinder, setTableFinder] = useState("");
  const [Dbd, setDbd] = useState({});
  const [attribute, setAttribute] = useState("");

  setDataFromBackendForFiltering(Dbd);

  const func = (str, op = "", table = "", attr = "") => {
    setSt(true);
    setStr(str);
    setOperation(op);
    setTableFinder(table);
    setAttribute(attr);
  };

  return (
    <>
      {st === true ? (
        <Modals
          setDbd={setDbd}
          state={st}
          setSt={setSt}
          string={str}
          table={tableFinder}
          op={operation}
          attribute={attribute}
          setDataUpdater={setDataUpdater}
        />
      ) : (
        <></>
      )}
      <NavDropdown title="District Table" id="basic-nav-dropdown">
        <NavDropdown.Item
          href="#action/3.1"
          onClick={
            string === "find" ? (
              () => func("Enter District ID", "find", "District", "id")
            ) : (
              <></>
            )
          }
        >
          District ID
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.2"
          onClick={
            string === "find" ? (
              () => func("Enter District Name", "find", "District", "name")
            ) : (
              <></>
            )
          }
        >
          District Name
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.3"
          onClick={
            string === "find" ? (
              () =>
                func(
                  "Enter no. of Constituencies",
                  "find",
                  "District",
                  "no_of_constituencies"
                )
            ) : (
              <></>
            )
          }
        >
          No of Constituencies
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.4"
          onClick={
            string === "find" ? (
              () => func("Enter Population", "find", "District", "population")
            ) : (
              <></>
            )
          }
        >
          Population
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Constituency Table" id="basic-nav-dropdown">
        <NavDropdown.Item
          href="#action/3.1"
          onClick={
            string === "find" ? () => func("Enter Constituency ID") : <></>
          }
        >
          Constituency ID
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.2"
          onClick={
            string === "find" ? () => func("Enter Constituency Name") : <></>
          }
        >
          Constituency Name
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.3"
          onClick={
            string === "find" ? () => func("Enter District Name") : <></>
          }
        >
          District
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.4"
          onClick={
            string === "find" ? () => func("Enter Reservation category") : <></>
          }
        >
          Reservation
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.5"
          onClick={
            string === "find" ? () => func("Enter Current ruling") : <></>
          }
        >
          Current Ruling
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.5"
          onClick={
            string === "find" ? () => func("Enter No. of contestants") : <></>
          }
        >
          No. of Contestants
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.5"
          onClick={string === "find" ? () => func("Enter Population") : <></>}
        >
          Population
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Voter Table" id="basic-nav-dropdown">
        <NavDropdown.Item
          href="#action/3.1"
          onClick={string === "find" ? () => func("Enter Voter ID") : <></>}
        >
          Voter ID
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.2"
          onClick={string === "find" ? () => func("Enter Voter name") : <></>}
        >
          Voter Name
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.3"
          onClick={
            string === "find" ? () => func("Enter Father's name") : <></>
          }
        >
          Father's Name
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.4"
          onClick={
            string === "find" ? () => func("Enter Date of Birth") : <></>
          }
        >
          DOB
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.5"
          onClick={string === "find" ? () => func("Enter Gender") : <></>}
        >
          Gender
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.5"
          onClick={string === "find" ? () => func("Enter Category") : <></>}
        >
          Category
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.5"
          onClick={string === "find" ? () => func("Enter Booth") : <></>}
        >
          Booth
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Party Table" id="basic-nav-dropdown">
        <NavDropdown.Item
          href="#action/3.1"
          onClick={string === "find" ? () => func("Enter Party ID") : <></>}
        >
          Party ID
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.2"
          onClick={string === "find" ? () => func("Enter Party Name") : <></>}
        >
          Party Name
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.3"
          onClick={
            string === "find" ? () => func("Enter Date of Estd.") : <></>
          }
        >
          DOEstab
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.4"
          onClick={string === "find" ? () => func("Enter Leaders Name") : <></>}
        >
          Leader's Name
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.5"
          onClick={
            string === "find" ? () => func("Enter No. of Candidates") : <></>
          }
        >
          No of Candidates
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Booth Table" id="basic-nav-dropdown">
        <NavDropdown.Item
          href="#action/3.1"
          onClick={string === "find" ? () => func("Enter Booth ID") : <></>}
        >
          Booth ID
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.2"
          onClick={string === "find" ? () => func("Enter Booth Name") : <></>}
        >
          Booth Name
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.3"
          onClick={string === "find" ? () => func("Enter Constituency") : <></>}
        >
          Constituency
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.4"
          onClick={string === "find" ? () => func("Enter Population") : <></>}
        >
          Population
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Tables;
