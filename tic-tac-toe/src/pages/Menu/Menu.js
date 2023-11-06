import { useState } from "react";
import ticTacToeLogo from "../../assets/jogo-da-velha_logo.svg";
import "./Menu.scss";
import Board from "../../components/Board";

function Menu() {
  const [opponentChoosed, setOpponentChoosed] = useState("");
  const [match, setMatch] = useState("");

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
                    ${opponentChoosed === "player" && "button-active"}`}
              onClick={() => setOpponentChoosed("player")}
            >
              <p>vs Jogador</p>
            </button>
            <button
              className={`opponent
                    ${opponentChoosed === "bot" && "button-active"}`}
              onClick={() => setOpponentChoosed("bot")}
            >
              <p>vs Robô</p>
            </button>
          </div>
        </div>

        <div className="players-name">
          <p className="title">Nome dos Jogadores</p>

          <div className="input-players">
            <input type="text" placeholder="Jogador 1" />
            <input type="text" placeholder="Jogador 2" />
          </div>
        </div>

        <Board />

        <div className="matches">
          <button
            className={`start-match matches-play
            ${match === "start" && "active"}`}
            onClick={() => setMatch("start")}
          >
            <p>Começar partida</p>
          </button>
          <button
            className={`historic-macthes matches-play
            ${match === "historic" && "active"}`}
            onClick={() => setMatch("historic")}
          >
            <p>Histórico de partidas</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
