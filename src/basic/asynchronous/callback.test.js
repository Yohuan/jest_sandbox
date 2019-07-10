const fetchData = (callback) => {
  const data = 'peanut butter';
  callback(data);
};

test('the data is peanut butter', (done) => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    // Jest will wait until the done callback is called before finishing the test.
    // If done() is never called, the test will fail.
    done();
  }

  fetchData(callback);
});
