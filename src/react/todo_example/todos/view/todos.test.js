import React from 'react';
import Immutable from 'immutable';
import { createStore } from 'redux';
import { mount } from 'enzyme';

import { Provider } from 'react-redux';
// eslint-disable-next-line import/named
import { __RewireAPI__ as storeAPI } from '../../store';
import { Todos } from './todos';
import { addTodo } from '../action';
import { constant as filterConstant } from '../../filter';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('integration test', () => {
  let store;
  let wrapper;
  beforeEach(() => {
    const reducer = storeAPI.__get__('reducer');
    const initialStoreState = {
      todos: [],
      filter: filterConstant.filterType.ALL,
    };
    store = createStore(reducer, Immutable.Map(initialStoreState));
    const subject = (
      <Provider store={store}>
        <Todos />
      </Provider>
    );
    wrapper = mount(subject);
  });

  it('should show one more todo', () => {
    store.dispatch(addTodo('write more tests'));
    expect(wrapper.find('.todo-item').text()).toBe('write more tests');
  });
});
