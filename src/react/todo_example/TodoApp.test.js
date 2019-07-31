import React from 'react';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  cleanup,
  // fireEvent,
  render,
  // waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TodoApp } from './TodoApp';
import { constant as filterConstant } from './filter';

function renderWithRedux(
  ui,
  initialState,
  { reducer = state => (state), store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('Interacting with TodoApp', () => {
  const initialStoreState = Immutable.Map({
    todos: [
      {
        id: 0,
        text: 'write more tests',
        completed: false,
      },
    ],
    filter: filterConstant.filterType.ALL,
  });

  afterEach(cleanup);

  it('should render app correctly', () => {
    const { getByText } = renderWithRedux(<TodoApp />, initialStoreState);
    expect(getByText('write more tests')).toHaveTextContent('write more tests');
  });
});
