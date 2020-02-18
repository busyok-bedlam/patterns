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

class CarBuilder {
  constructor() {
    this.car = Object.create(null);
  }
  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }
  setParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }
  setSignalling(signalling) {
    this.car.signalling = signalling;
    return this;
  }

  build() {
    return this.car;
  }
}

const director = new CarDirector();
const builder1 = new CarBuilder();
director.setOrder({ engine: 'engine1', parktronic: 'parktronic1', signalling: 'signalling1' });
let result = director.constructCar(builder1, 0);
console.log('RESULT', result);
