let cities = new Set();

const isCity = city => (
  cities.has(city)
);

// Sometimes the setup is asynchronous
const initializeCities = (success = true) => {
  return new Promise((resolve, reject) => {
    if (success) {
      cities.add('Taipei');
      cities.add('New York');
      resolve('initialization succeed');
    } else {
      const err = new Error('Something wrong')
      reject(err);
    }
  });
};

const clearCities = (success = true) => {
  return new Promise((resolve, reject) => {
    if (success) {
      cities.clear();
      resolve('clear succeed');
    } else {
      const err = new Error('Something wrong')
      reject(err);
    }
  });
};

beforeAll(() => {
  return initializeCities();
});

afterAll(() => {
  return clearCities();
});

test('city has Taipei', () => {
  expect(isCity('Taipei')).toBeTruthy();
});

test('city does not have San Juan', () => {
  expect(isCity('San Juan')).toBeFalsy();
});
