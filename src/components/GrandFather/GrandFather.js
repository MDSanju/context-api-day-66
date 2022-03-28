import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

const GrandFather = (props) => {
  const { house } = props;
  return (
    <div>
      <h1 style={{ color: "tomato", fontSize: "50px" }}>Grandfather</h1>
      <h2 style={{ color: "#40407a" }}>House: {house}</h2>
      <button
        onClick={() => props.clickHandler(house + 1)}
        style={{
          backgroundColor: "#2c2c54",
          color: "white",
          marginTop: "30px",
          padding: "10px 18px",
          fontSize: "18px",
          fontWeight: "600",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Buy House
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Father></Father>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default GrandFather;
