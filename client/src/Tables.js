import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import Modals from "./Modals";

export default ({ string }) => {
  const [str, setStr] = useState("");
  const [st, setSt] = useState(false);

  const func = (str) => {
    console.log("setting state to 1");
    setSt(true);
    setStr(str);
    console.log(str);
  };

  console.log(string);
  return (
    <>
      {st === true ? <Modals state={st} setSt={setSt} string={str} /> : <></>}
      <NavDropdown title="District Table" id="basic-nav-dropdown">
        <NavDropdown.Item
          href="#action/3.1"
          onClick={string === "find" ? () => func("Enter District ID") : <></>}
        >
          District ID
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.2"
          onClick={
            string === "find" ? () => func("Enter District Name") : <></>
          }
        >
          District Name
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.3"
          onClick={
            string === "find" ? (
              () => func("Enter no. of Constituencies")
            ) : (
              <></>
            )
          }
        >
          No of Constituencies
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#action/3.4"
          onClick={string === "find" ? () => func("Enter Population") : <></>}
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
