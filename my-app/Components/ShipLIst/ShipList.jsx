import style from "../ShipList/ShipLIst.module.css";
export default function ShipList({ onShipSizeClick }) {
  const getShipSize = (event) => {
    let boatSize = event.target.value;
    onShipSizeClick(boatSize);
  };
  return (
    <div className={style.continer}>
      <h2 className={style.headline}>Click To Place Battle Ship Size</h2>
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
      </div>
    </div>
  );
}
