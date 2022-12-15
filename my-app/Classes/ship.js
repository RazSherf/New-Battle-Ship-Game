class ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.isPlaced = false;
    this.isSunk = false;
    this.shipLocation = [2];
  }

  isShipPlaced() {
    return this.isPlaced;
  }

  placeShip(x, y) {
    this.shipLocation[0] = x;
    this.shipLocation[1] = y;
    this.isPlaced = true;
  }
}

export default ship;
