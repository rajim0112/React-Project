import React from "react";

const style = {
  background: "white",
  border: "2px solid black",
  fontSize: "50px",
  cursor: "pointer",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;