import { useState } from "react";
import style from "../Board/Board.module.css";
import Square from "../Square/Square";

export default function Board({
  boardSize,
  handleSquareHover,
  squareHoverd,
  gameState,
  currentPlayer,
}) {
  let column = [];
  let rows = [];
  let size = boardSize;

  const [arr, setArr] = useState(
    new Array(boardSize).fill(new Array(boardSize).fill(0))
  );

  const checkisHoverSquare = (row, column) => {};

  if (size == 10) {
    column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  }
  if (size == 11) {
    column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  }
  if (size == 12) {
    column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  }

  const handle = () => {
    if (gameState === 1) {
    }
  };

  return (
    <div className="battle-board-container" onMouseEnter={handle()}>
      <div className={style.headline}>
        <h1>The Current player is: {currentPlayer}</h1>;
      </div>
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
            return (
              <Square
                row={row}
                column={column}
                handleSquareHover={handleSquareHover}
                isSquareHoverd={checkisHoverSquare(row, column)}
                gameState={gameState}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
