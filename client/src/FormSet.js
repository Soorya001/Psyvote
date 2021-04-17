import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";

import "./FormSet.css";
import Table from "./Tables";
import Modals from "./Modals";

import "bootstrap/dist/css/bootstrap.css";

const FormSet = ({ setDataFromBackendForFiltering }) => {
  const [str, setStr] = useState("");
  const [operation, setOperation] = useState("");
  const [st, setSt] = useState(false);
  const [tableFinder, setTableFinder] = useState("");

  const func = (str, table = "", op = "") => {
    setSt(true);
    setStr(str);
    setOperation(op);
    setTableFinder(table);
  };

  return (
    <>
      {st === true ? (
        <Modals
          state={st}
          setSt={setSt}
          string={str}
          table={tableFinder}
          op={operation}
        />
      ) : (
        <></>
      )}
      <div className="OP">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Operations</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Find" id="basic-nav-dropdown">
                <Table
                  string="find"
                  setDataFromBackendForFiltering={
                    setDataFromBackendForFiltering
                  }
                />
              </NavDropdown>

              <NavDropdown title="Order By" id="basic-nav-dropdown">
                <Table
                  string="order by"
                  setDataFromBackendForFiltering={
                    setDataFromBackendForFiltering
                  }
                />
              </NavDropdown>

              <NavDropdown title="Group By" id="basic-nav-dropdown">
                <Table
                  string="group by"
                  setDataFromBackendForFiltering={
                    setDataFromBackendForFiltering
                  }
                />
              </NavDropdown>

              <NavDropdown title="Search" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Form inline>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <Button variant="success">Search</Button>
                  </Form>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Edit Data</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Addition" id="basic-nav-dropdown">
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func("Adding a new District: ", "District", "addition")
                  }
                >
                  District Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func(
                      "Adding a new Constituency: ",
                      "Constituency",
                      "addition"
                    )
                  }
                >
                  Constituency Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func("Adding a new Voter: ", "Voter", "addition")
                  }
                >
                  Voter Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func("Adding a new Party: ", "Party", "addition")
                  }
                >
                  Party Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func("Adding a new Booth: ", "Booth", "addition")
                  }
                >
                  Booth Table
                </Nav.Link>
              </NavDropdown>

              <NavDropdown title="Updation" id="basic-nav-dropdown">
                <Nav.Link
                  href="#"
                  onClick={() => func("Updating District Table: ")}
                >
                  District Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => func("Updating Constituency Table: ")}
                >
                  Constituency Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => func("Updating Voter Table: ")}
                >
                  Voter Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => func("Updating Party Table: ")}
                >
                  Party Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => func("Updating Booth Table: ")}
                >
                  Booth Table
                </Nav.Link>
              </NavDropdown>

              <NavDropdown title="Deletion" id="basic-nav-dropdown">
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func(
                      "Deleting from District Table: ",
                      "District",
                      "deletion"
                    )
                  }
                >
                  District Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func(
                      "Deleting from Constituency Table: ",
                      "Constituency",
                      "deletion"
                    )
                  }
                >
                  Constituency Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func("Deleting from Voter Table: ", "Voter", "deletion")
                  }
                >
                  Voter Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func("Deleting from Party Table: ", "Party", "deletion")
                  }
                >
                  Party Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() =>
                    func("Deleting from Booth Table: ", "Booth", "deletion")
                  }
                >
                  Booth Table
                </Nav.Link>
              </NavDropdown>

              {/* <Nav.Link href="#home">Home</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default FormSet;
