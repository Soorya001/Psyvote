import React, { useState, useEffect } from "react";
import "./Home.css";
import data from "./Data";
import Form from "./FormSet";
import axios from "axios";

import ParticlesBg from "particles-bg";

const Home = () => {
  // demo code for getting data from backend
  // useEffect with [] -> fires the useEffect at the time of first load of the screen so we are fetching data from the api and setting it to the dataa useState
  // the route http://localhost:5000/districts has districts at the end similarly other data from relations can also be obtained

  const [dataa, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const dataaa = await axios.get("http://localhost:5000/districts");
      setData(dataaa.data.rows);
    };
    getData();
  }, []);

  // check the console for the contents of the dataa variable
  console.log(dataa);

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
            
            {Object.keys(dataa).length === 0 ? (
              <>(No data found)</>
            ) : (
              // each value from the dataa state is mapped and rendered
              dataa.map((person) => {
                const { ID, NAME, NO_OF_CONSTITUENCIES, POPULATION } = person;
                return (
                  <tr key={ID}>
                    <tr>
                      <td>{ID}</td>
                      <td>{NAME}</td>
                      <td>{NO_OF_CONSTITUENCIES}</td>
                      <td>{POPULATION}</td>
                    </tr>
                  </tr>
                );
              })
            )}
            
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