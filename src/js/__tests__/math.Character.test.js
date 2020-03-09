import Daemon from '../math.Daemon';
import Magician from '../math.Magician';

const magician = new Magician('Magician');
const daemon = new Daemon('Daemon');

test('Magician attack: stoned = false', () => {
  magician.distance = 2;
  expect(magician.attack).toBe(85);
});

test('Daemon attack: stoned = false', () => {
  daemon.distance = 8;
  expect(daemon.attack).toBe(15);
});

test('Magician attack: stoned = true', () => {
  magician.distance = 4;
  magician.stoned = true;
  expect(magician.attack).toBe(60);
});

test('Should throw Error: stoned = false', () => {
  daemon.distance = 0;
  expect(() => daemon.attack).toThrow('The distance is too short to attack');
});

test('Should throw Error: stoned = true', () => {
  daemon.distance = 0;
  daemon.stoned = true;
  expect(() => daemon.attack).toThrow('The distance is too short to attack');
});