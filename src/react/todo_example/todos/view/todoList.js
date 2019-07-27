import React from 'react';
import PropTypes from 'prop-types';

import { TodoItem } from './todoItem';

const TodoList = (props) => {
  const todoItems = props.todos.map(item => (
    <TodoItem
      key={item.id}
      text={item.text}
      completed={item.completed}
      onToggle={() => props.onToggleTodo(item.id)}
      onRemove={() => props.onRemoveTodo(item.id)}
    />
  ));

  return (
    <ul className="todo-list">
      {todoItems}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export {
  TodoList,
};
