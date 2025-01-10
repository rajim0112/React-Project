import React, { useState } from "react";
import { Win } from "./Win";
import Board from "./Board";
import Nav from "../Nav";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-evenly",
    height: "100%",
    marginTop: "50px"
  },
  info: {
    fontSize: "2rem",
    opacity: "0.5",
    
  },
  btn: {
    fontSize: "20px",
    marginTop: "30px",
    padding: "10px 20px", 
    alignSelf: "center",  
    width: "150px",       
  }
  
};

const XOGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const winner = Win(board);

  const handleClick = (i) => {
    const tmpBoard = [...board];
    if (!!winner || !!tmpBoard[i]) return;

    tmpBoard[i] = xTurn ? "X" : "O";
    setBoard(tmpBoard);
    setXTurn(!xTurn);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  };

  return (
    <>
    <Nav/>
    <div style={style.container}>
      <p style={style.info}>
        {winner ? "Winner: " + winner : "Next Player: " + (xTurn ? "X" : "O")}
      </p>
      <Board squares={board} handleClick={handleClick} />
      <button style={style.btn} onClick={resetBoard}>Start Game</button>
    </div>
    </>
  );
};

export default XOGame;
