import { useState } from "react";
import OImg from "../../assets/o.svg";
import XImg from "../../assets/x.svg";
import "./TicTacToe.scss";

function TicTacToe() {
  const player1Name = localStorage.getItem("player1");
  const player2Name = localStorage.getItem("player2");
  const sizeBoard = localStorage.getItem("boardSize");

  const sizeUnity = sizeBoard.slice(0, -2);
  const sizeTotal = sizeBoard.length === 5 ? sizeBoard.slice(0, -3) : sizeUnity;

  const [board, setBoard] = useState(
    Array.from({ length: sizeTotal * sizeTotal }, () =>
      Array(sizeTotal).fill(null)
    )
  );

  const [currentPlayer, setCurrentPlayer] = useState(player1Name);

  const handleSquareClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] === null) {
      const newBoard = [...board];
      newBoard[rowIndex][colIndex] = currentPlayer;
      setBoard(newBoard);
    }

    console.log("row: ", rowIndex); // vai de 0 até 8
    console.log("col: ", colIndex); // vai de 0 até 0 (9x)

    // O ganhador deve completar 3+ (valor de acordo com o tamanho do tabuleiro escolhido)
    // index consecutivos que estejam na horizontal, vertical ou diagonal

    // Como fazer esse cálculo? Usar valor do index (nome do jogador) e comparar com uma determinada sequência para concluir o vencedor?
    // Ex: index 0, 1 e 2 devem possuir nome Vê para ser a vencedora, ou index 1, 4, 7 para ser Jaum ser o vencedor;
    // OBS: Os tabuleiros de 3x3 e 4x4 (tlvz) seguiram a lógica acima;
    // O tabuleiro de 5x5 e 6x6 deverão ter preenchido em qualquer direção 4 index;
    // O tabuleiro de 7x7 até 10x10 terá como decrescimo para o vencedor 2 index do total baseado em uma das direções;

    // COMO ATRIBUIR EMPATE?

    setCurrentPlayer((prevPlayer) =>
      prevPlayer === player1Name ? player2Name : player1Name
    );
  };

  return (
    <section className="play-tic-tac-toe">
      <h1>
        Vez do Jogador
        <p
          className={`${currentPlayer === player1Name ? "player1" : "player2"}`}
        >
          {currentPlayer}
        </p>
      </h1>
      <div className="tic-tac-toe-board">
        {board.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <div
              key={`square-${rowIndex + 1}x${colIndex + 1}`}
              className="square"
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            >
              {col === player1Name && <img className="O" src={OImg} alt="O" />}
              {col === player2Name && <img className="X" src={XImg} alt="X" />}
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default TicTacToe;
