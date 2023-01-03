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
    >
      <p></p>
    </div>
  );
}
