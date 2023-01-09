import styles from "../styles/Home.module.css";
import WelcomePage from "../Components/Welcome/WelcomePage";
import Board from "../Components/Board/Board";
import Form from "../Components/FormComponent/Form";
import shipList from "../Classes/shipList";
import classNames from "classnames/bind";
import ShipList from "../Components/ShipLIst/ShipList";
import React, { useEffect, useState } from "react";
import { style } from "@mui/system";
export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(null);
  const [boatSize, setBoazSize] = useState();
  const [squareHoverd, setSquareHoverd] = useState([]);
  const [isHorizontal, setIsHorizontal] = useState(true);
  let currentPlayer1 = "Raz";
  let currentPlayer2 = "Computer";

  // first player board that the ships will be saved
  const [firstBoardPlacementCounter, setFirstBoardPlacementCounter] =
    useState(0);
  const [firstPlayerBoard, setFirstPlayerBoard] = useState([]);

  // Saving the board size in the state
  const onBoardSizeClick = (boardSize) => {
    console.log("The Selected Size is:", boardSize);
    setBoardSize(boardSize);
  };

  useEffect(() => {
    console.log(firstPlayerBoard);
  }, [firstPlayerBoard]);

  const placeFirstPlayerShips = (row, column) => {
    const clickSquarefirstPlayerBoarday = [];
    if (firstBoardPlacementCounter < Number(boatSize)) {
      if (isHorizontal) {
        if (Number(column) + Number(boatSize) > Number(boardSize) + 1) {
          alert("You Cant Place Here ");
          return;
        }
        clickSquarefirstPlayerBoarday.push({ row, column });
        for (let i = 1; i < boatSize; i++) {
          clickSquarefirstPlayerBoarday.push({ row: row, column: column + i });
          setFirstBoardPlacementCounter(firstBoardPlacementCounter + 1);
        }
      } else {
        if (Number(row) + Number(boatSize) > Number(boardSize) + 1) {
          alert("You Cant Place Here ");
          return;
        }
        clickSquarefirstPlayerBoarday.push({ row, column });
        for (let i = 1; i < boatSize; i++) {
          clickSquarefirstPlayerBoarday.push({ row: row + i, column: column });
          setFirstBoardPlacementCounter(firstBoardPlacementCounter + 1);
        }
      }
    }
    setFirstPlayerBoard((prevValue) => {
      return [...prevValue, ...clickSquarefirstPlayerBoarday];
    });
  };

  const handleSquareHover = (row, column) => {
    // console.log([{ row: row, columm: column }]);
    setSquareHoverd([{ row: row, columm: column }]);
  };
  // Saving in the state the boat size
  const onShipSizeClick = (boatSize) => {
    console.log("The Boat Size is:", boatSize);
    setBoazSize(boatSize);
  };
  return (
    <div className={styles.flexboxContiner}>
      {!gameStarted ? (
        <WelcomePage
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
        />
      ) : (
        <div className={style.t1}>
          <Form onBoardSizeClick={onBoardSizeClick} />
          {boardSize !== null && boardSize !== undefined && (
            <div className={style.t1}>
              <ShipList
                onShipSizeClick={onShipSizeClick}
                boatSize={boatSize}
                isHorizontal={isHorizontal}
                setIsHorizontal={setIsHorizontal}
              />
              <div className={style.boardCss}>
                <Board
                  boardSize={boardSize}
                  handleSquareHover={handleSquareHover}
                  squareHoverd={squareHoverd}
                  currentPlayer={currentPlayer1}
                  boatSize={boatSize}
                  isHorizontal={isHorizontal}
                  firstPlayerBoard={firstPlayerBoard}
                  placeFirstPlayerShips={placeFirstPlayerShips}
                />
                {/* <Board
                  boardSize={boardSize}
                  handleSquareHover={handleSquareHover}
                  squareHoverd={squareHoverd}
                  currentPlayer={currentPlayer2}
                  boatSize={boatSize}
                  isHorizontal={isHorizontal}
                /> */}

                <test />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
