import React, { useState, useEffect } from "react";
import "./Home.css";
import Form from "./FormSet";
import axios from "axios";

import ParticlesBg from "particles-bg";
import DisplayTable from "./DisplayTable";

const Home = () => {
  const [datadist, setDataDist] = useState({});
  const [dataconst, setDataConst] = useState({});
  const [datavote, setDataVote] = useState({});
  const [datapart, setDataPart] = useState({});
  const [databoot, setDataBoot] = useState({});

  const [d1, setd1] = useState("");
  const [d2, setd2] = useState("");
  const [d3, setd3] = useState("");
  const [d4, setd4] = useState("");
  const [d5, setd5] = useState("");
  const [d6, setd6] = useState("");

  // const [curview, setCurview] = useState(1);

  const [dataUpdater, setDataUpdater] = useState(0);

  // console.log(dataUpdater);

  var dict = {
    District: datadist,
    Constituency: dataconst,
    Voter: datavote,
    Party: datapart,
    Booth: databoot,
  };

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
    const getDataCons = async () => {
      const dataadist = await axios.get("http://localhost:5000/getdata", {
        params: {
          table: "constituency",
        },
      });
      setDataConst(dataadist.data.rows);
    };
    getDataCons();

    const getDataVote = async () => {
      const dataadist = await axios.get("http://localhost:5000/getdata", {
        params: {
          table: "voter",
        },
      });
      setDataVote(dataadist.data.rows);
    };
    getDataVote();

    const getDataPart = async () => {
      const dataadist = await axios.get("http://localhost:5000/getdata", {
        params: {
          table: "party",
        },
      });
      setDataPart(dataadist.data.rows);
    };
    getDataPart();

    const getDataBoot = async () => {
      const dataadist = await axios.get("http://localhost:5000/getdata", {
        params: {
          table: "booth",
        },
      });
      setDataBoot(dataadist.data.rows);
    };
    getDataBoot();
  }, [dataUpdater]);

  // check the console for the contents of the dataa variable
  // console.log(dataa);

  const [wind, setWind] = useState(1);
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

  // console.log(dataFromBackendForFiltering);

  return (
    <>
      <div className="head1">
        <h1>All Relations</h1>
      </div>

      <div className="head2">District Table</div>

      <div>
        {/* <DisplayTable tabname={tabname} data={datadist} /> */}
        <table className="table2">
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
        <table className="table2">
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
                const {
                  ID,
                  NAME,
                  DISTRICT,
                  RESERVATION,
                  CURR_RULING,
                  NO_OF_CONTESTANTS,
                  POPULATION,
                } = person;
                return (
                  <tr key={ID}>
                    <td>{ID}</td>
                    <td>{NAME}</td>
                    <td>{DISTRICT}</td>
                    <td>{RESERVATION}</td>
                    <td>{CURR_RULING}</td>
                    <td>{NO_OF_CONTESTANTS}</td>
                    <td>{POPULATION}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <div className="head2">Voter Table</div>
        <table className="table2">
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
                const {
                  ID,
                  NAME,
                  FATHERS_NAME,
                  DOB,
                  GENDER,
                  CATEGORY,
                  BOOTH,
                } = person;
                return (
                  <tr key={ID}>
                    <td>{ID}</td>
                    <td>{NAME}</td>
                    <td>{FATHERS_NAME}</td>
                    <td>{DOB}</td>
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
        <Form
          setDataFromBackendForFiltering={setDataFromBackendForFiltering}
          setDataUpdater={setDataUpdater}
          dataUpdater={dataUpdater}
          setd1={setd1}
          setd2={setd2}
          setd3={setd3}
          setd4={setd4}
          setd5={setd5}
          setd6={setd6}
          curview={wind}
        />
      </div>

      <div className="head2">
        WORK AREAS<br></br>
        {sel}
      </div>

      <div className="flex-container">
        <div id="1" onClick={() => PickWind(1)}>
          {d1 !== "" ? <DisplayTable tabname={d1} data={dict[d1]} /> : "1"}
        </div>
        <div id="2" onClick={() => PickWind(2)}>
          {d2 !== "" ? <DisplayTable tabname={d2} data={dict[d2]} /> : "2 "}
        </div>
        <div id="3" onClick={() => PickWind(3)}>
          {d3 !== "" ? <DisplayTable tabname={d3} data={dict[d3]} /> : "3"}
        </div>
        <div id="4" onClick={() => PickWind(4)}>
          {d4 !== "" ? <DisplayTable tabname={d4} data={dict[d4]} /> : "4"}
        </div>
        <div id="5" onClick={() => PickWind(5)}>
          {d5 !== "" ? <DisplayTable tabname={d5} data={dict[d5]} /> : "5"}
        </div>
        <div id="6" onClick={() => PickWind(6)}>
          {d6 !== "" ? <DisplayTable tabname={d6} data={dict[d6]} /> : "6"}
        </div>
      </div>

      <ParticlesBg type="square" num="50" bg={true} />
    </>
  );
};

export default Home;
