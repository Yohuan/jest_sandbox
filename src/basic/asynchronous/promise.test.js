const fetchData = (success = true) => {
  if (success) {
    const data = 'peanut butter';
    return Promise.resolve(data);
  }
  return Promise.reject('Something wrong');
}

test('the data is peanut butter 1', () => {
  // Return a promise from your test.
  // Jest will wait for that promise to resolve.
  // Don't have to call done().
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the data is peanut butter 2', () => {
  // Jest will wait for that promise to resolve.
  // If the promise is rejected, the test will automatically fail.
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error 1', () => {
  // Verify that a certain number of assertions are called.
  // Otherwise a fulfilled promise would not fail the test.
  expect.assertions(1);
  return fetchData(false).catch(e => expect(e).toMatch('Something wrong'));
});

test('the fetch fails with an error 2', () => {
  return expect(fetchData(false)).rejects.toMatch('Something wrong');
});
