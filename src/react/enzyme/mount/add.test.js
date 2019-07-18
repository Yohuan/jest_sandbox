import React from 'react';
import { mount } from 'enzyme';

import Add from './add';

describe('Add', () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    add = mount(<Add onAdd={onAdd} />);
  });

  afterEach(() => {
    add.unmount();
  });

  it('requires onAdd prop', () => {
    expect(add.props().onAdd).toBeDefined();
  });

  it('renders button', () => {
    const button = add.find('button').first();
    expect(button).toBeDefined();
  });

  it('calls onAdd when ckicking button', () => {
    const button = add.find('button').first();
    const input = add.find('input').first();
    input.simulate('change', { target: { value: 'Name 4' } });
    button.simulate('click');
    expect(onAdd).toHaveBeenCalledWith('Name 4');
  });
});
