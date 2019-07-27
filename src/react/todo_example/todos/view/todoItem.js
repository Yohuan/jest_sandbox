import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = props => (
  <li
    className="todo-item"
    style={{
      textDecoration: props.completed ? 'line-through' : 'none',
    }}
  >
    <input
      checked={props.completed ? 'checked' : ''}
      className="toggle"
      onClick={props.onToggle}
      type="checkbox"
      readOnly
    />
    {props.text}
    <button
      className="remove-btn"
      onClick={props.onRemove}
      type="button"
    >
      X
    </button>
  </li>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export {
  TodoItem,
};
