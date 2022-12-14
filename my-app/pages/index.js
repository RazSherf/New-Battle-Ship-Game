import styles from "../styles/Home.module.css";
import WelcomePage from "../Components/Welcome/WelcomePage";
import Board from "../Components/Board/Board";
import Form from "../Components/FormComponent/Form";
import shipList from "../Classes/shipList";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState(null);

  console.log(shipList[0].isShipPlaced());
  const onBoardSizeClick = (boardSize) => {
    console.log("The Selected Size is:", boardSize);
    setBoardSize(boardSize);
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
              <Board boardSize={boardSize} />
            </>
          )}
        </div>
      )}
    </div>
  );
}
