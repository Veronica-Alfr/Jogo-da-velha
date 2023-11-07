import TicTacToe from "./components/TicTacToe/TicTacToe";
import Menu from "./pages/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/play" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
