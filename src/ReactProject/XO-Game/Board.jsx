import React from "react";
import Square from "./Square";

const style = {
  borderRadius: "10px",
  width: "300px",
  height: "300px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, handleClick }) => (
  <div style={style}>
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => handleClick(index)} />
    ))}
  </div>
);

export default Board;