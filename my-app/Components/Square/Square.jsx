import React, { useState } from "react";
export default function Square({
  row,
  column,
  handleSquareHover,
  isSquareHoverd,
  color,
  changeHoverColor,
  setColor,
  getOutFromMouseEnter,
  placeFirstPlayerShips,
}) {
  return (
    <div
      className={color}
      onMouseEnter={() => {
        changeHoverColor(row, column);
      }}
      onMouseLeave={() => {
        getOutFromMouseEnter();
      }}
      onClick={() => placeFirstPlayerShips(row, column)}
    >
      <p></p>
    </div>
  );
}
