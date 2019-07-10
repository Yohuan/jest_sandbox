const fetchData = (success = true) => {
  const data = 'peanut butter';
  const delay = 30;
  return new Promise((resolve, reject) => {
    if (success) {
      setTimeout(() => {
        resolve(data);
      }, delay);
    } else {
      setTimeout(() => {
        const err = new Error('Something wrong');
        reject(err);
      }, delay);
    }
  });
};

// Use the async keyword in front of the function passed to test.
test('the data is peanut butter 1', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the data is peanut butter 2', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error 1', async () => {
  expect.assertions(1);
  try {
    await fetchData(false);
  } catch (e) {
    expect(e.message).toMatch('Something wrong');
  }
});

test('the fetch fails with an error 2', async () => {
  await expect(fetchData(false)).rejects.toThrow('Something wrong');
});
