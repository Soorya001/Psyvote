import React, { useState, useEffect } from "react";
import "./Home.css";
import data from "./Data";
import Form from "./FormSet";
import axios from "axios";

import ParticlesBg from "particles-bg";

const Home = () => {
  // demo code for getting data from backend
  // useEffect with [] -> fires the useEffect at the time of first load of the screen so we are fetching data from the api and setting it to the dataa useState
  // the route http://localhost:5000/districts has districts in the backend similarly other data from relations can also be obtained

  const [datadist, setDataDist] = useState({});
  const [dataconst, setDataConst] = useState({});
  const [datavote, setDataVote] = useState({});

  useEffect(() => {
    
    //for district
    const getDataDist = async () => {
      const dataadist = await axios.get("http://localhost:5000/getdata", {
        params: {
          table: "district",
        },
      });
      setDataDist(dataadist.data.rows);
    };
    getDataDist();

    //for constituency
    const getDataConst = async () => {
      const dataadist = await axios.get("http://localhost:5000/getdata", {
        params: {
          table: "constituency",
        },
      });
      setDataConst(dataadist.data.rows);
    };
    getDataConst();


    const getDataVote = async () => {
      const dataadist = await axios.get("http://localhost:5000/getdata", {
        params: {
          table: "voter",
        },
      });
      setDataVote(dataadist.data.rows);
    };
    getDataVote();


  }, []);

  // check the console for the contents of the dataa variable
  // console.log(dataa);

  const [wind, setWind] = useState(0);
  const [
    dataFromBackendForFiltering,
    setDataFromBackendForFiltering,
  ] = useState({});
  const [sel, setSel] = useState("Selected Window: 1 (default)");

  const PickWind = (val) => {
    setWind(val);
    setSel(`Selected Window: ${val}`);
    console.log(val);
  };

  console.log(dataFromBackendForFiltering);

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
            {Object.keys(datadist).length === 0 ? (
              <>(No data found)</>
            ) : (
              // each value from the dataa state is mapped and rendered
              datadist.map((person) => {
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
          {Object.keys(dataconst).length === 0 ? (
              <>(No data found)</>
            ) : (
            dataconst.map((person) => {
              const { ID, NAME, DISTRICT, RESERVATION, CURR_RULING, NO_OF_CONTESTANTS, POPULATION } = person;
              console.log(person);
              return (
                <tr key={ID}>
                  <td>{ID}</td>
                  <td>{NAME}</td>
                  <td>{DISTRICT}</td>
                  <td>{RESERVATION}</td>
                  <td>{NO_OF_CONTESTANTS}</td>
                  <td>{POPULATION}</td>
                </tr>
              );
            })
            )}
          </tbody>
        </table>

        <div className="head2">Voter Table</div>
        <table className="scrolldown">
          <thead>
            <tr>
              <th>Voter ID</th>
              <th>Name</th>
              <th>Fathers Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Category</th>
              <th>Booth</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(datavote).length === 0 ? (
              <>(No data found)</>
            ) : (
            datavote.map((person) => {
              const { ID, NAME, FATHERS_NAME, DOB, GENDER, CATEGORY, BOOTH} = person;
              console.log(person);
              return (
                <tr key={ID}>
                  <td>{ID}</td>
                  <td>{NAME.substr(0,10)}</td>
                  <td>{FATHERS_NAME.substr(0,10)}</td>
                  <td>{DOB.substr(0,10)}</td>
                  <td>{GENDER}</td>
                  <td>{CATEGORY}</td>
                  <td>{BOOTH}</td>
                </tr>
              );
            })
            )}
          </tbody>
        </table>



      </div>

      <div>
        <Form setDataFromBackendForFiltering={setDataFromBackendForFiltering} />
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
