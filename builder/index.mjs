import CarBuilder from './Builder.mjs';
import CarDirector from './Director.mjs';

const director = new CarDirector();
const builder1 = new CarBuilder();
director.setOrder({ engine: 'engine1', parktronic: 'parktronic1', signalling: 'signalling1' });
let result = director.constructCar(builder1, 0);
console.log('RESULT', result);
