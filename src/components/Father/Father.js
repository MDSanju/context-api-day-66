import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = () => {
  return (
    <div>
      <h1 style={{ color: "#0984e3" }}>Father</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Brother></Brother>
        <Myself></Myself>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Father;
