import React from "react";
import './Func.css'
const FuncComp = () => {
  return (
    <div className="funcCard">
      <h1>This is created using the functional component</h1>
      <p>This is done using the external CSS</p>
      <p style={{ color: "blue" }}>This is done using the internal CSS</p>
    </div>
  );
};

export default FuncComp;
