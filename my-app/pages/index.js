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
  // 0 stand for place ship 1 for attack ship 2 fot end game
  const [gameState, setGameState] = useState(1);

  let currentPlayer1 = "Raz";
  let currentPlayer2 = "Computer";

  // Saving the board size in the state
  const onBoardSizeClick = (boardSize) => {
    console.log("The Selected Size is:", boardSize);
    setBoardSize(boardSize);
  };

  const handleSquareHover = (row, column) => {
    console.log([{ row: row, columm: column }]);
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
              <ShipList onShipSizeClick={onShipSizeClick} boatSize={boatSize} />
              <div className={style.boardCss}>
                <Board
                  boardSize={boardSize}
                  handleSquareHover={handleSquareHover}
                  squareHoverd={squareHoverd}
                  gameState={gameState}
                  currentPlayer={currentPlayer1}
                  boatSize={boatSize}
                />
                <Board
                  boardSize={boardSize}
                  handleSquareHover={handleSquareHover}
                  squareHoverd={squareHoverd}
                  gameState={gameState}
                  currentPlayer={currentPlayer2}
                  boatSize={boatSize}
                />

                <test />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
