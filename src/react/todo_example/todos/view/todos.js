import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { AddTodo } from './addTodo';
import { TodoList } from './todoList';
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from '../action';
import { constant as filterConstant } from '../../filter';

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filterConstant.filterType.ALL:
      return todos;
    case filterConstant.filterType.COMPLETED:
      return todos.filter(todo => todo.completed);
    case filterConstant.filterType.UNCOMPLETED:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error('unsupported filter');
  }
};

const _Todos = props => (
  <div className="todos">
    <AddTodo onAdd={(text) => { props.addTodo(text); }} />
    <TodoList
      todos={props.todos}
      onToggleTodo={(id) => { props.toggleTodo(id); }}
      onRemoveTodo={(id) => { props.removeTodo(id); }}
    />
  </div>
);

_Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    todos: selectVisibleTodos(state.get('todos'), state.get('filter')),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo,
    removeTodo,
    toggleTodo,
  }, dispatch);
}

const Todos = connect(mapStateToProps, mapDispatchToProps)(_Todos);

export {
  Todos,
};
