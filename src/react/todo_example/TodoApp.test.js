import React from 'react';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';

import { TodoApp } from './TodoApp';
import { constant as filterConstant } from './filter';

describe('snapshot test', () => {
  const initialStoreState = Immutable.Map({
    todos: [
      {
        id: 0,
        text: 'write tests',
        completed: true,
      },
      {
        id: 1,
        text: 'write more tests',
        completed: false,
      },
    ],
    filter: filterConstant.filterType.ALL,
  });
  const fakeRuducer = state => (state);
  const store = createStore(fakeRuducer, initialStoreState);
  const subject = (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );

  test('<TodoApp /> should render some todos', () => {
    const wrapper = mount(subject);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
