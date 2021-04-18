import React from 'react';
import "./Home.css";

function DisplayTable({tabname, data, setTabName}) {

    const val = 1;
    if (tabname === "District") {
    return <>
          <table className="tablesmall">
          <thead>
            <tr>
              <th>District ID</th>
              <th>District Name</th>
              <th>No. of Constituency</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).length === 0 ? (
              <>(No data found)</>
            ) : (
              // each value from the dataa state is mapped and rendered
              data.map((person) => {
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
        </>
      }

    if (tabname === "Constituency") {
    return <>
        <table className="tablesmall">
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
          {Object.keys(data).length === 0 ? (
              <>(No data found)</>
            ) : (
            data.map((person) => {
              const { ID, NAME, DISTRICT, RESERVATION, CURR_RULING, NO_OF_CONTESTANTS, POPULATION } = person;
              console.log(person);
              return (
                <tr key={ID}>
                  <td>{ID}</td>
                  <td>{NAME.substr(0,15)}</td>
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
      </>}


      if(tabname === "Voter") {
        return <>
        <table className="tablesmall">
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
            {Object.keys(data).length === 0 ? (
              <>(No data found)</>
            ) : (
              data.map((person) => {
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
                    <td>{NAME.substr(0, 10)}</td>
                    <td>{FATHERS_NAME.substr(0, 10)}</td>
                    <td>{DOB.substr(0, 10)}</td>
                    <td>{GENDER}</td>
                    <td>{CATEGORY}</td>
                    <td>{BOOTH}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        </>
      }

      if (tabname === "Party") {
        return <>
              <table className="tablesmall">
              <thead>
                <tr>
                  <th>Party ID</th>
                  <th>Name</th>
                  <th>Date_ESTD</th>
                  <th>Leader</th>
                  <th>Candidate Count</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).length === 0 ? (
                  <>(No data found)</>
                ) : (
                  // each value from the dataa state is mapped and rendered
                  data.map((person) => {
                    const { ID, NAME, DO_ESTAB, LEADER, NO_OF_CANDIDATES } = person;
                    return (
                      <tr key={ID}>
                        <tr>
                          <td>{ID}</td>
                          <td>{NAME}</td>
                          <td>{DO_ESTAB}</td>
                          <td>{LEADER}</td>
                          <td>{NO_OF_CANDIDATES}</td>
                        </tr>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>    
            </>
          }
      
          if (tabname === "Booth") {
            return <>
                  <table className="tablesmall">
                  <thead>
                    <tr>
                      <th>Booth ID</th>
                      <th>Name</th>
                      <th>Constituency</th>
                      <th>Population</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(data).length === 0 ? (
                      <>(No data found)</>
                    ) : (
                      // each value from the dataa state is mapped and rendered
                      data.map((person) => {
                        const { ID, NAME, CONSTITUENCY, POPULATION } = person;
                        return (
                          <tr key={ID}>
                            <tr>
                              <td>{ID}</td>
                              <td>{NAME}</td>
                              <td>{CONSTITUENCY}</td>
                              <td>{POPULATION}</td>
                            </tr>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>    
                </>
              }
}

export default DisplayTable
