import "./App.css";
import React from "react";
import Home from "./HomePage/Home";
import Members from "./Members/Members";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="home">Home</Link> |<Link to="/members">Memebers</Link>
      </nav>
    </div>
  );
}

export default App;
