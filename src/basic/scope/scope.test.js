beforeAll(() => console.log('(top-level) beforeAll'));
afterAll(() => console.log('(top-level) - afterAll'));
beforeEach(() => console.log('(top-level) - beforeEach'));
afterEach(() => console.log('(top-level) - afterEach'));

describe('test city', () => {
  let cities = new Set();

  const isCity = city => (
    cities.has(city)
  );

  const initializeCities = () => {
    cities.add('Taipei');
    cities.add('New York');
  }

  const clearCities = () => {
    cities.clear();
  };

  beforeEach(() => {
    initializeCities();
  });

  afterEach(() => {
    clearCities();
  });

  test('city has Taipei', () => {
    expect(isCity('Taipei')).toBeTruthy();
  });

  test('city does not have San Juan', () => {
    expect(isCity('San Juan')).toBeFalsy();
  });
});

describe('test food', () => {
  let foods = new Set();

  const isFood = food => (
    foods.has(food)
  );

  const initializeFoods = () => {
    foods.add('Burger');
    foods.add('Sandwich');
  }

  const clearFoods = () => {
    foods.clear();
  };

  beforeEach(() => {
    initializeFoods();
  });

  afterEach(() => {
    clearFoods();
  });

  test('city has Taipei', () => {
    expect(isFood('Burger')).toBeTruthy();
  });

  test('city does not have San Juan', () => {
    expect(isFood('Mac')).toBeFalsy();
  });
});
