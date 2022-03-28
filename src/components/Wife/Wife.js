import React, { useContext } from "react";
import { PhoneContext } from "../../App";

const Wife = () => {
  const [getPhone, getHome, getCar] = useContext(PhoneContext);
  return (
    <div>
      <h3 style={{ color: "red" }}>Wife</h3>
      <small>{getPhone}</small>
      <br />
      <h5>House: {getHome}</h5>
      <h5>Car: {getCar}</h5>
    </div>
  );
};

export default Wife;
