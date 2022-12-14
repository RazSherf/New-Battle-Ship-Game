import React from "react";
export default function Square({ row, column }) {
  const alert1 = () => {
    alert(`The row is${row} and the coulmn is:${column}`);
  };
  return <div className="columns-square" onClick={alert1}></div>;
}
