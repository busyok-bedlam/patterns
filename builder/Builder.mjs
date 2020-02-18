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

export default CarBuilder;
