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
}) {
  let column = [];
  let rows = [];
  let size = boardSize;

  const [markedSquare, setMarkSquare] = useState([]);

  useEffect(() => {
    console.log(markedSquare);
  }, [markedSquare]);

  // const [arr, setArr] = useState(
  //   new Array(boardSize).fill(new Array(boardSize).fill(0))
  // );
  const [color, setColor] = useState("columns-square initial-state-square");

  const changeHoverColor = (row, column) => {
    const markSquareArray = [];
    console.log(`hello from board${isHorizontal}`);
    console.log(`Hello from board ${boatSize}`);
    if (isHorizontal) {
      markSquareArray.push({ row: row, column: column });
      for (let index = 1; index < boatSize; index++) {
        markSquareArray.push({ row: row, column: column + index });
      }
    } else {
      markSquareArray.push({ row: row, column: column });
      for (let index = 1; index < boatSize; index++) {
        markSquareArray.push({ row: row + index, column: column });
      }
    }
    setMarkSquare(markSquareArray);
  };

  const getOutFromMouseEnter = (row, column) => {
    setMarkSquare([]);
  };

  const squareColorChanger = (row, column) => {
    // setColor("columns-square hover-square");
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
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
