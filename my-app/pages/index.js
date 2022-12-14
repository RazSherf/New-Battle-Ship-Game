import styles from "../styles/Home.module.css";
import WelcomePage from "../Components/Welcome/WelcomePage";
import Board from "../Components/Board/Board";
import Form from "../Components/FormComponent/Form";
import React, { useState } from "react";
export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
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
        <>
          <Form />
        </>
      )}
    </div>
  );
}
