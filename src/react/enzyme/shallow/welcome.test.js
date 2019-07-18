import React from 'react';
import { shallow } from 'enzyme';

import Welcome from './welcome';

describe('Welcome', () => {
  it('renders hello world', () => {
    const welcome = shallow(<Welcome />);
    expect(welcome.find('div').text()).toBe('Hello world!');
  });
});
