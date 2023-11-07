import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ticTacToeLogo from "../../assets/jogo-da-velha_logo.svg";
import Board from "../../components/Board";
import "./Menu.scss";

function Menu() {
  const navigate = useNavigate();

  const [opponentChoosed, setOpponentChoosed] = useState("");
  const [match, setMatch] = useState("");

  const handleOpponentToStorage = (opponent) => {
    setOpponentChoosed(opponent);
    localStorage.setItem("selectedOpponent", opponent);
  };

  const handleMatchesToStorage = (matchesPlayer) => {
    setMatch(matchesPlayer);
    localStorage.setItem("startOrHistoricMatches", matchesPlayer);

    const sizeBoard = localStorage.getItem("boardSize");
    const player1Name = localStorage.getItem("player1");
    const player2Name = localStorage.getItem("player2");

    if (opponentChoosed && player1Name && player2Name && sizeBoard) {
      navigate("/play");
    }
  };

  const handlePlayer1Name = (value) => {
    localStorage.setItem("player1", value);
  };

  const handlePlayer2Name = (value) => {
    localStorage.setItem("player2", value);
  };

  return (
    <section className="home">
      <header>
        <img
          className="tic-tac-toe-logo"
          src={ticTacToeLogo}
          alt="Jogo da Velha"
        />
      </header>

      <div className="menu">
        <div className="type-game">
          <p className="title">Tipo de Jogo</p>

          <div className="what-type">
            <button
              className={`opponent
                    ${opponentChoosed === "vs Jogador" && "button-active"}`}
              onClick={() => handleOpponentToStorage("vs Jogador")}
            >
              <p>vs Jogador</p>
            </button>
            <button
              className={`opponent
                    ${opponentChoosed === "robô" && "button-active"}`}
              onClick={() => handleOpponentToStorage("robô")}
            >
              <p>vs Robô</p>
            </button>
          </div>
        </div>

        <div className="players-name">
          <p className="title">Nome dos Jogadores</p>

          <div className="input-players">
            <input
              type="text"
              placeholder="Jogador 1"
              onChange={({ target }) => handlePlayer1Name(target.value)}
            />
            <input
              type="text"
              placeholder="Jogador 2"
              onChange={({ target }) => handlePlayer2Name(target.value)}
            />
          </div>
        </div>

        <Board />

        <div className="matches">
          <button
            className={`start-match matches-play
            ${match === "start" && "active"}`}
            onClick={() => handleMatchesToStorage("start")}
          >
            <p>Começar partida</p>
          </button>
          <button
            className={`historic-macthes matches-play
            ${match === "historic" && "active"}`}
            onClick={() => handleMatchesToStorage("historic")}
          >
            <p>Histórico de partidas</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
