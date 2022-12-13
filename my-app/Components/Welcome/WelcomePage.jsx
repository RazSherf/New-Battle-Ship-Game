import React from "react";
import style from "../Welcome/WelcomePage.module.css";

export default function WelcomePage() {
  return (
    <div className={style.flexboxContiner}>
      <h1>Welcome To Battle Ship Game </h1>
      <p>
        Place your ships on the playing board. Your opponent will try to guess
        where your ships are. When it's your turn, try to guess where their
        ships are by choosing a tile on the opposing board. Try to sink all
        their battleships to win the game.
      </p>
      <button className={style.startButton}>Im Ready To Start</button>
    </div>
  );
}
