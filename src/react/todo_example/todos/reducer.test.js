import reducer from './reducer';
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from './action';

describe("todos' reducer", () => {
  let initialState;
  beforeEach(() => {
    initialState = [
      {
        id: 0,
        text: 'first todo',
        completed: false,
      },
      {
        id: 1,
        text: 'second todo',
        completed: true,
      },
    ];
  });

  it('should add a todo', () => {
    const action = addTodo('test todo');
    const newState = reducer(initialState, action);
    const expectedNewState = [...initialState];
    expectedNewState.unshift({
      id: 2,
      text: 'test todo',
      completed: false,
    });
    expect(newState).toEqual(expectedNewState);
  });

  it('should remove a todo', () => {
    const action = removeTodo(1);
    const newState = reducer(initialState, action);
    expect(newState).toEqual([{
      id: 0,
      text: 'first todo',
      completed: false,
    }]);
  });

  it('should toggle a todo', () => {
    const action = toggleTodo(1);
    const newState = reducer(initialState, action);
    const expectedNewState = [...initialState];
    expectedNewState[1].completed = false;
    expect(newState).toEqual(expectedNewState);
  });
});
