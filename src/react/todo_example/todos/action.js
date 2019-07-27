import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from './actionType';

let nextTodoId = 2;

const addTodo = (text) => {
  const action = {
    type: ADD_TODO,
    completed: false,
    id: nextTodoId,
    text,
  };
  nextTodoId += 1;
  return action;
};

const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export {
  addTodo,
  removeTodo,
  toggleTodo,
};
