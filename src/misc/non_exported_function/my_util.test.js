// eslint-disable-next-line import/named
import { __RewireAPI__ as myUtilAPI } from './my_util';

it('should add two numbers', () => {
  const add = myUtilAPI.__get__('nonExportedAdd');
  expect(add(1, 1)).toBe(2);
});

it('should subtract two numbers', () => {
  const minus = myUtilAPI.__get__('nonExportedMinus');
  expect(minus(5, 4)).toBe(1);
});
