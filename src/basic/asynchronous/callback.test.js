const fetchData = (callback) => {
  const data = 'peanut butter';
  callback(data);
};

// Give a "done" function as input
test('the data is peanut butter', (done) => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    // Jest will wait until the done() is called before finishing the test.
    // If done() is never called, the test will fail.
    done();
  }

  fetchData(callback);
});
