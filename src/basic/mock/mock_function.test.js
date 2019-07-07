// Inject a callback function
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test('mock function', () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);

  expect(mockCallback.mock.results[1].value).toBe(43);
});

describe('mock returned value', () => {
  test('mock returned value', () => {
    const myMock = jest.fn();
    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);
    expect(myMock()).toBe(10);
    expect(myMock()).toBe('x');
    expect(myMock()).toBe(true);
    expect(myMock()).toBe(true);
  });
});

function drinkAll(callback, flavors) {
  flavors.forEach(flavor => {
    if (flavor !== 'octopus') {
      callback(flavor);
    }
  });
}

describe('drinkAll', () => {
  test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, ['lemon']);
    expect(drink).toHaveBeenCalled();
  });

  test('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, ['octopus']);
    expect(drink).not.toHaveBeenCalled();
  });

  test('drinkEach drinks each drink', () => {
    const drink = jest.fn();
    drinkAll(drink, ['lemon', 'apple']);
    expect(drink).toHaveBeenCalledTimes(2);
  });
});
