import React from "react";
import ReactDOM from "react-dom";
import ParticlesBg from "particles-bg";
import Home from "./Home";
import "./App.css";

const MainStuff = () => {
  ReactDOM.render(<Home />, document.getElementById("root"));
};

function App() {
  return (
    <>
      <h1 id="head1">PsyVote </h1>
      <h2>The ultimate analyzer</h2>
      <h2 id="head2">
        By: <br></br>
        Aditya Pahadsingh<br></br>
        Jayasooryan S<br></br>
        Lokesh N N<br></br>
      </h2>

      <div className="App">
        <button type="button" className="btn" onClick={() => MainStuff()}>
          Enter
        </button>
      </div>
      <div id="try"></div>
      <ParticlesBg type="square" num="50" bg={true} />
    </>
  );
}

export default App;