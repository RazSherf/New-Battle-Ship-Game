import { useState } from "react";
import style from "../Board/Board.module.css";
import Square from "../Square/Square";

export default function Board() {
  let column = [];
  let rows = [];
  let size = 11;

  if (size == 10) {
    column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  }
  if (size == 11) {
    column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  }
  return (
    <div className="battle-board-container">
      <div className="columns-number-container">
        {column.map((column) => (
          <div className="columns-number" key={column}>
            {column}
          </div>
        ))}
      </div>
      {rows.map((row, rowIndex) => (
        <div className="row-letter-container" key={row}>
          <span className="row-letter">{row}</span>
          {column.map((column, index) => {
            return <Square />;
          })}
        </div>
      ))}
    </div>
  );
}
