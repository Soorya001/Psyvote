import React, { useState } from "react";
import "./Home.css";
import data from "./Data";
import Form from "./FormSet";

import ParticlesBg from "particles-bg";

const Home = () => {
  console.log("render");
  const [wind, setWind] = useState(0);

  const [sel, setSel] = useState("Selected Window: 1 (default)");

  const PickWind = (val) => {
    setWind(val);
    setSel(`Selected Window: ${val}`);
    console.log(val);
  };
  let i = 0;

  return (
    <>
      <div className="head1">
        <h1>All Relations</h1>
      </div>

      <div className="head2">District Table</div>

      <div>
        <table className="scrolldown">
          <thead>
            <tr>
              <th>District ID</th>
              <th>District Name</th>
              <th>No. of Constituency</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => {
              const { id, name, age, city } = person;
              return (
                <tr key={id}>
                  <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{city}</td>
                  </tr>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="head2">Constituency Table</div>
        <table className="scrolldown">
          <thead>
            <tr>
              <th>Constituency Id ID</th>
              <th>Constituency Name</th>
              <th>District</th>
              <th>Reservation</th>
              <th>Current Party</th>
              <th>Contestant(s)</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => {
              const { id, name, age, city, attr1, attr2, attr3 } = person;
              return (
                <tr key={i++}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{city}</td>
                  <td>{attr1}</td>
                  <td>{attr2}</td>
                  <td>{attr3}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <Form />
      </div>

      <div className="head2">
        WORK AREAS<br></br>
        {sel}
      </div>

      <div className="flex-container">
        <div id="1" onClick={() => PickWind(1)}>
          1
        </div>
        <div id="2" onClick={() => PickWind(2)}>
          2
        </div>
        <div id="3" onClick={() => PickWind(3)}>
          3
        </div>
        <div id="4" onClick={() => PickWind(4)}>
          4
        </div>
        <div id="5" onClick={() => PickWind(5)}>
          5
        </div>
        <div id="6" onClick={() => PickWind(6)}>
          6
        </div>
      </div>

      <ParticlesBg type="square" num="50" bg={true} />
    </>
  );
};

export default Home;