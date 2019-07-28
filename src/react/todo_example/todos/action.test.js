import * as actionType from './actionType';
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from './action';

describe('addTodo', () => {
  it('should create an action to add todo', () => {
    const todoText = 'first todo';
    const action = addTodo(todoText);
    expect(action.type).toBe(actionType.ADD_TODO);
    expect(action.text).toBe(todoText);
    expect(action.completed).toBe(false);
  });

  it('should have different IDs for different todos', () => {
    const todoText = 'first todo';
    const action1 = addTodo(todoText);
    const action2 = addTodo(todoText);
    expect(action1.id).not.toBe(action2.id);
  });
});

describe('removeTodo', () => {
  it('should create an action to remove todo', () => {
    const todoId = 123;
    const action = removeTodo(todoId);
    expect(action.type).toBe(actionType.REMOVE_TODO);
    expect(action.id).toBe(todoId);
  });
});

describe('toggleTodo', () => {
  it('should create an action to toggle todo', () => {
    const todoId = 123;
    const action = toggleTodo(todoId);
    expect(action.type).toBe(actionType.TOGGLE_TODO);
    expect(action.id).toBe(todoId);
  });
});
