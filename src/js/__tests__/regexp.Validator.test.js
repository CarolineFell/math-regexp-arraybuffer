import Validator from '../regexp.Validator';

test('Should be correct', () => {
  const validator = new Validator('linn-95_CF');
  expect(validator.validateUsername()).toBe(true);
});

test('Should throw Error - NON latin symbols', () => {
  const validator = new Validator('абвгд');
  expect(validator.validateUsername()).toBe(false);
});

test('Should throw Error - NON -_ symbols', () => {
  const validator = new Validator('linn.95');
  expect(validator.validateUsername()).toBe(false);
});

test('Should throw Error - NON less than 3 numbers in line', () => {
  const validator = new Validator('linn9955');
  expect(validator.validateUsername()).toBe(false);
});

test('Should throw Error - NON numbers started username', () => {
  const validator = new Validator('95linn');
  expect(validator.validateUsername()).toBe(false);
});

test('Should throw Error - NON numbers ended username', () => {
  const validator = new Validator('linn95');
  expect(validator.validateUsername()).toBe(false);
});

test('Should throw Error - NON -_ started username', () => {
  const validator = new Validator('-linn95');
  expect(validator.validateUsername()).toBe(false);
});

test('Should throw Error - NON -_ started username', () => {
  const validator = new Validator('_linn95');
  expect(validator.validateUsername()).toBe(false);
});

test('Should throw Error - NON -_ ended username', () => {
  const validator = new Validator('linn95-');
  expect(validator.validateUsername()).toBe(false);
});

test('Should throw Error - NON -_ ended username', () => {
  const validator = new Validator('linn95_');
  expect(validator.validateUsername()).toBe(false);
});