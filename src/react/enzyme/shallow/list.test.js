import React from 'react';
import { shallow } from 'enzyme';

import List from './list';

describe('List', () => {
  let list;
  beforeAll(() => {
    const data = ['Name 1', 'Name 2', 'Name 3'];
    list = shallow(<List data={data} />);
  });

  it('renders table', () => {
    expect(list.find('table').length).toBe(1);
  });

  it('renders column', () => {
    const arr = list.find('th');
    expect(arr.length).toBe(1);
    expect(arr.first().text()).toBe('Name');
  });

  it('renders data', () => {
    const arr = list.find('td');
    expect(arr.length).toBe(3);
    expect(arr.at(0).text()).toBe('Name 1');
    expect(arr.at(1).text()).toBe('Name 2');
    expect(arr.at(2).text()).toBe('Name 3');
  });
});
