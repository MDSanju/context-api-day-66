import React, { useContext } from "react";
import { PhoneContext } from "../../App";

const Aunty = () => {
  const [x, y, z] = useContext(PhoneContext);
  return (
    <div>
      <h1 style={{ color: "#0984e3" }}>Aunty</h1>
      <h4>House: {y}</h4>
    </div>
  );
};

export default Aunty;
