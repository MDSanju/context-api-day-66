import { createContext, useState } from "react";
import "./App.css";
import GrandFather from "./components/GrandFather/GrandFather";

export const PhoneContext = createContext("mobile");

function App() {
  const [houses, setHouses] = useState(2);

  const phone = "iPhone";
  const car = "BMW";

  const clickHandler = (houseCount) => {
    setHouses(houseCount);
  };
  return (
    <PhoneContext.Provider value={[phone, houses, car]}>
      <div className="App">
        <GrandFather house={houses} clickHandler={clickHandler}></GrandFather>
      </div>
    </PhoneContext.Provider>
  );
}

export default App;
