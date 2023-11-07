import React, { useEffect, useState } from "react";

const Board = () => {
  const gridSizes = [
    { value: "3x3", label: "3x3" },
    { value: "4x4", label: "4x4" },
    { value: "5x5", label: "5x5" },
    { value: "6x6", label: "6x6" },
    { value: "7x7", label: "7x7" },
    { value: "8x8", label: "8x8" },
    { value: "9x9", label: "9x9" },
    { value: "10x10", label: "10x10" },
  ];

  const [selectedSize, setSelectedSize] = useState("3x3");

  useEffect(() => {
    localStorage.setItem("boardSize", "3x3");
  }, []);

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
    localStorage.setItem("boardSize", newSize);
  };

  return (
    <div className="board-size">
      <label htmlFor="gridSizeSelect">Tamanho do Tabuleiro</label>
      <select
        id="gridSizeSelect"
        value={selectedSize}
        onChange={handleSizeChange}
      >
        {gridSizes.map((sizeOption) => (
          <option key={sizeOption.value} value={sizeOption.value}>
            {sizeOption.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Board;
