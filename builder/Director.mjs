class CarDirector {
  constructor() {
    this.orders = [];
    this.stockpile = new Map();
  }
  setOrder(order) {
    this.orders.push(order);
    return;
  }
  saveToStockpile(car, builder) {
    if(this.stockpile.has(builder)) {
      const productionOfBuilder = this.stockpile.get(builder);
      this.stockpile.set(builder, [...productionOfBuilder, car]);
      return;
    }

  }
  constructCar(builder, orderNum) {
    const order = this.orders[orderNum] || null;
    if(order) {
      const { engine, parktronic, signalling } = order;
      const car = builder.setEngine(engine).setParktronic(parktronic).setSignalling(signalling).build();
      this.saveToStockpile(car, builder);
      return car;
    }

  }
}

export default CarDirector;
