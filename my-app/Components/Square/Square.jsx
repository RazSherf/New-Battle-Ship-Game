import React, { useState } from "react";
export default function Square({
  row,
  column,
  handleSquareHover,
  isSquareHoverd,
  color,
  changeHoverColor,
  setColor,
}) {
  return (
    <div
      className={color}
      onMouseEnter={() => {
        changeHoverColor(row, column);
      }}
      onMouseLeave={() => {
        setColor("columns-square initial-state-square");
      }}
    >
      <p></p>
    </div>
  );
}
