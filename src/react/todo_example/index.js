import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { TodoApp } from './TodoApp';
import { store } from './store';

const app = (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root'),
);
