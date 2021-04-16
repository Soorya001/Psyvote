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

{
  /* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */
}

const FormSet = () => {
  const [str, setStr] = useState("");
  const [st, setSt] = useState(false);

  const func = (str) => {
    console.log("setting state to 1");
    setSt(true);
    setStr(str);
    console.log(str);
  };

  return (
    <>
      {st === true ? <Modals state={st} setSt={setSt} string={str} /> : <></>}
      <div className="OP">
        <Navbar.Brand bg="light" expand="lg">
          <Navbar.Brand>Operations</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Find" id="basic-nav-dropdown">
                <Table string="find" />
              </NavDropdown>

              <NavDropdown title="Order By" id="basic-nav-dropdown">
                <Table string="order by" />
              </NavDropdown>

              <NavDropdown title="Group By" id="basic-nav-dropdown">
                <Table string="group by" />
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

              {/* <Nav.Link href="#home">Home</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar.Brand>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Edit Data</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Addition" id="basic-nav-dropdown">
                <Nav.Link
                  href="#"
                  onClick={() => func("Adding a new District: ")}
                >
                  District Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => func("Adding a new Constituency: ")}
                >
                  Constituency Table
                </Nav.Link>
                <Nav.Link href="#" onClick={() => func("Adding a new Voter: ")}>
                  Voter Table
                </Nav.Link>
                <Nav.Link href="#" onClick={() => func("Adding a new Party: ")}>
                  Party Table
                </Nav.Link>
                <Nav.Link href="#" onClick={() => func("Adding a new Booth: ")}>
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
                  onClick={() => func("Deleting from District Table: ")}
                >
                  District Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => func("Deleting from Constituency Table: ")}
                >
                  Constituency Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => func("Deleting from Voter Table: ")}
                >
                  Voter Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => func("Deleting from Party Table: ")}
                >
                  Party Table
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={() => func("Deleting from Booth Table: ")}
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
