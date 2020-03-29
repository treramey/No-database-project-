import React from "react";
import Routes from "../routes";
import "./App.scss";

function App() {
  return (
    <div className="root-container">
      <div className="app-container">
        <section className="main-column">
          <Routes />
        </section>
      </div>
    </div>
  );
}

export default App;
