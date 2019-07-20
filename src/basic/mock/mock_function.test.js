// Inject a callback function
// Avoid the need for complicated stubs when testing
function forEach(items, callback) {
  items.forEach((item) => {
    callback(item);
  });
}

test('mock implementation', () => {
  const mockCallback = jest.fn(x => x * 2);
  forEach([10, 50], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledTimes(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(10);
  expect(mockCallback).toHaveBeenNthCalledWith(1, 10);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(50);
  expect(mockCallback).toHaveBeenNthCalledWith(2, 50);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(20);
  expect(mockCallback).toHaveNthReturnedWith(1, 20);

  expect(mockCallback.mock.results[1].value).toBe(100);
  expect(mockCallback).toHaveNthReturnedWith(2, 100);
});

test('mock returned value', () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);
  expect(myMock()).toBe(10);
  expect(myMock()).toBe('x');
  expect(myMock()).toBe(true);
  expect(myMock()).toBe(true);
});
