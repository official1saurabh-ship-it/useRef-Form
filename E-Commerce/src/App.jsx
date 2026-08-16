import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/Home";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Navbar />
      {toggle ? (
        <Products onClick={setToggle(true)} />
      ) : (
        <Home onClick={setToggle(false)} />
      )}
    </div>
  );
};

export default App;
