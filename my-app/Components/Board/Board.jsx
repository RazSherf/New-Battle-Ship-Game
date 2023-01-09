import { useEffect } from "react";
import { useState } from "react";
import style from "../Board/Board.module.css";
import Square from "../Square/Square";

export default function Board({
  boardSize,
  handleSquareHover,
  squareHoverd,
  gameState,
  currentPlayer,
  boatSize,
  isHorizontal,
  firstPlayerBoard,
  setFirstPlayerBoard,
  placeFirstPlayerShips,
}) {
  let column = [];
  let rows = [];
  let size = boardSize;

  const [markedSquare, setMarkSquare] = useState([]);

  // useEffect(() => {
  //   console.log(markedSquare);
  // }, [markedSquare]);

  // useEffect(() => {
  //   console.log(firstPlayerBoard);
  // }, firstPlayerBoard);

  const [color, setColor] = useState("columns-square initial-state-square");

  const changeHoverColor = (row, column) => {
    const markSquarefirstPlayerBoarday = [];
    if (isHorizontal) {
      markSquarefirstPlayerBoarday.push({ row: row, column: column });
      for (let index = 1; index < boatSize; index++) {
        markSquarefirstPlayerBoarday.push({ row: row, column: column + index });
      }
    } else {
      markSquarefirstPlayerBoarday.push({ row: row, column: column });
      for (let index = 1; index < boatSize; index++) {
        markSquarefirstPlayerBoarday.push({ row: row + index, column: column });
      }
    }
    setMarkSquare(markSquarefirstPlayerBoarday);
  };

  const getOutFromMouseEnter = (row, column) => {
    setMarkSquare([]);
  };

  const squareColorChanger = (row, column) => {
    if (
      firstPlayerBoard?.find(
        (element) => element.row === row && element.column === column
      )
    ) {
      return "columns-square clicked-square";
    }

    if (
      markedSquare.find(
        (element) => element.row === row && element.column === column
      )
    ) {
      return "columns-square hover-square";
    } else {
      return "columns-square initial-state-square";
    }
  };

  if (size == 10) {
    column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  if (size == 11) {
    column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }
  if (size == 12) {
    column = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  return (
    <div className="battle-board-container">
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
                color={squareColorChanger(row, column)}
                changeHoverColor={changeHoverColor}
                setColor={setColor}
                getOutFromMouseEnter={getOutFromMouseEnter}
                placeFirstPlayerShips={placeFirstPlayerShips}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
