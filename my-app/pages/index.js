import styles from "../styles/Home.module.css";
import WelcomePage from "../Components/Welcome/WelcomePage";
import Board from "../Components/Board/Board";
import Form from "../Components/FormComponent/Form";
import React, { useState } from "react";
export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false);
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
          <Form
            isSizeSelected={isSizeSelected}
            setIsSizeSelected={setIsSizeSelected}
          />
          {isSizeSelected && (
            <>
              <Board />
              {/* <Board /> */}
            </>
          )}
        </div>
      )}
    </div>
  );
}
