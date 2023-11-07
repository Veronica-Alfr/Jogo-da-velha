import { useState } from "react";
import "./TicTacToe.scss";

function TicTacToe() {
  const biggerSquare = [];

  const player1Name = localStorage.getItem("player1");
  const sizeBoard = localStorage.getItem("boardSize");

  const [xOrO, setXorO] = useState("");

  const sizeTotal = sizeBoard.slice(0, -2);

  for (let row = 0; row < sizeTotal; row++) {
    for (let col = 0; col < sizeTotal; col++) {
      const squareId = `square-${row}-${col}`;
      biggerSquare.push(
        <div key={squareId} className="square">
          <span className={`${player1Name ? "X" : "O"}`}>{xOrO}</span>
        </div>
      );
    }
  }

  // if (player1Name) {
  //   setXorO("X");
  // }

  return (
    <section className="play-tic-tac-toe">
      <h1>
        Vez do Jogador{" "}
        <p className={`${player1Name ? "player1" : "player2"}`}>
          {player1Name}
        </p>
      </h1>
      <div className="tic-tac-toe-board">{biggerSquare}</div>
    </section>
  );
}

export default TicTacToe;
