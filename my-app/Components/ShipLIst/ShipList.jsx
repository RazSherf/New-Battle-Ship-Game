import { useState } from "react";
import style from "../ShipList/ShipLIst.module.css";
export default function ShipList({ onShipSizeClick, boatSize }) {
  const [squareArray, setSquareArray] = useState([]);
  const [isVertical, setIsVertical] = useState(true);

  const getShipSize = (event) => {
    let boatSize = event.target.value;
    onShipSizeClick(boatSize);
  };

  const changeDirection = () => {
    setIsVertical((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <div className={style.continer}>
      <h2 className={style.headline}>Click To Place Battle Ship </h2>
      <div className={style.buttonCon}>
        <button onClick={getShipSize} value={3} className={style.button}>
          Cruiser(3)
        </button>
        <button onClick={getShipSize} value={4} className={style.button}>
          Battleship(4)
        </button>
        <button onClick={getShipSize} value={5} className={style.button}>
          Carries(5)
        </button>
        <br />
      </div>
      <div className={style.buttonCol}>
        <button onClick={changeDirection} className={style.changeButton}>
          {isVertical
            ? "Current Direction : Horizontal"
            : "Current Direction : Vertical"}
        </button>
      </div>
    </div>
  );
}
