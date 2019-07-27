import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';

import { reducer as filterReducer } from './filter';
import { reducer as todosReducer } from './todos';

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

export {
  store,
};
