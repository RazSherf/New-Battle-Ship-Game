import styles from "../styles/Home.module.css";
import WelcomePage from "../Components/Welcome/WelcomePage";
import Board from "../Components/Board/Board";
import Form from "../Components/FormComponent/Form";
import shipList from "../Classes/shipList";
import ShipList from "../Components/ShipLIst/ShipList";
import React, { useEffect, useState } from "react";
import { style } from "@mui/system";
export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(null);
  const [boatSize, setBoazSize] = useState();

  const onBoardSizeClick = (boardSize) => {
    console.log("The Selected Size is:", boardSize);
    setBoardSize(boardSize);
  };

  const onShipSizeClick = (boatSize) => {
    console.log("The Boat Size is:", boatSize);
    setBoazSize(boatSize);
  };
  return (
    <div className={styles.flexboxContiner}>
      {!gameStarted ? (
        <>
          <WelcomePage
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
          />
        </>
      ) : (
        <div>
          <Form onBoardSizeClick={onBoardSizeClick} />
          {boardSize !== null && boardSize !== undefined && (
            <>
              <ShipList onShipSizeClick={onShipSizeClick} />
              <Board boardSize={boardSize} />
            </>
          )}
        </div>
      )}
    </div>
  );
}
