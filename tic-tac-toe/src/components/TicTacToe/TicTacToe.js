import { useState } from "react";
import OImg from "../../assets/o.svg";
import XImg from "../../assets/x.svg";
import "./TicTacToe.scss";

function TicTacToe() {
  const biggerSquare = [];

  const player1Name = localStorage.getItem("player1");
  const player2Name = localStorage.getItem("player2");
  const sizeBoard = localStorage.getItem("boardSize");

  const sizeUnity = sizeBoard.slice(0, -2);
  const sizeTotal = sizeBoard.length === 5 ? sizeBoard.slice(0, -3) : sizeUnity;

  const [currentPlayer, setCurrentPlayer] = useState(player1Name);

  const handleSquareClick = () => {
    setCurrentPlayer((prevPlayer) =>
      prevPlayer === player1Name ? player2Name : player1Name
    );
  };

  for (let row = 0; row < sizeTotal; row++) {
    for (let col = 0; col < sizeTotal; col++) {
      const squareId = `square-${row}-${col}`;
      const imgSrc = currentPlayer === player1Name ? OImg : XImg;
      biggerSquare.push(
        <div key={squareId} className="square">
          <div className="words" onClick={handleSquareClick}>
            <img
              className={`${currentPlayer === player1Name ? "O" : "X"}`}
              src={imgSrc}
              alt={currentPlayer === player1Name ? "O" : "X"}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <section className="play-tic-tac-toe">
      <h1>
        Vez do Jogador{" "}
        <p
          className={`${currentPlayer === player1Name ? "player1" : "player2"}`}
        >
          {currentPlayer}
        </p>
      </h1>
      <div className="tic-tac-toe-board">{biggerSquare}</div>
    </section>
  );
}

export default TicTacToe;
