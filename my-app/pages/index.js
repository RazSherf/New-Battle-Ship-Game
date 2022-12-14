import styles from "../styles/Home.module.css";
import WelcomePage from "../Components/Welcome/WelcomePage";
import Board from "../Components/Board/Board";
import Form from "../Components/FormComponent/Form";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);

  const [boardSize, setBoardSize] = useState(null);
  const onBoardSizeClick = (boardSize) => {
    console.log("The Selected Size is:", boardSize);
    setBoardSize(boardSize);
  };
  useEffect(() => {
    console.log("board size isssssss", boardSize);
  }, [boardSize]);
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
              {console.log("Inside the func")}
            </>
          )}
        </div>
      )}
    </div>
  );
}
