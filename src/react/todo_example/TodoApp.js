import React from 'react';

import { view as filterView } from './filter';
import { view as todosView } from './todos';

const TodoApp = () => (
  <div className="todo-app">
    <todosView.Todos />
    <filterView.Filter />
  </div>
);

export {
  TodoApp,
};
