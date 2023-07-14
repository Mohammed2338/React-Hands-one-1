import React, { useState } from "react";
import FuncComp from "./Component/FuncComp";
import ClassComp from "./Component/ClassComp";
import "./App.css";
const App = () => {
  const [fstate, setFState] = useState(false);
  const [cstate, setCState] = useState(false);
  return (
    <>
      <h1 className="Heading">Styling using Functional and Class Component</h1>
      <div className="btnHead">
        <button className="btn" onClick={() => setFState(!fstate)}>
          To see styling in functional component
        </button>
        <button className="btn" onClick={() => setCState(!cstate)}>
          To see styling in class component
        </button>
      </div>

      {fstate && <FuncComp />}

      {cstate && <ClassComp />}
    </>
  );
};

export default App;
