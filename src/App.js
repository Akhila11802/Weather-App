import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        | Developed by{" "}
        <a target="_blank" href="https://www.github.com/Akhila11802/">
          Akhila Anilkumar
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/akhila-anilkumar1810/">
          Connect Me
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
