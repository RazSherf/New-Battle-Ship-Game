import React, { useState } from "react";
export default function Square({
  row,
  column,
  handleSquareHover,
  isSquareHoverd,
  gameState,
}) {
  const childFunction = () => {
    handleSquareHover(row, column);
    if (gameState === 0) {
      setColor("columns-square hover-square");
    }
  };
  const [color, setColor] = useState("columns-square initial-state-square");

  return (
    <div
      className={color}
      onMouseEnter={childFunction}
      onMouseLeave={() => {
        setColor("columns-square initial-state-square");
      }}
    >
      <p></p>
    </div>
  );
}
