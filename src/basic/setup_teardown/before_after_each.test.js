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
