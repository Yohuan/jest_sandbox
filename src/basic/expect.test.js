describe('equality', () => {
  const can1 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  const can2 = {
    flavor: 'grapefruit',
    ounces: 12,
  };

  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });

  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });
});

describe('number', () => {
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
});

describe('string', () => {
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
});

describe('iterable', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });
});

describe('truthiness', () => {
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
  });

  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).toBeFalsy();
    expect(z).not.toBeTruthy();
  });
});

describe('exception', () => {
  function createError() {
    throw new Error('Something wrong');
  }

  test('compiling android goes as expected', () => {
    expect(createError).toThrow();
    expect(createError).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(createError).toThrow('Something wrong');
    expect(createError).toThrow(/wrong/);
  });
});
