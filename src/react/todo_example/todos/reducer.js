import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from './actionType';

const initialState = [
  {
    id: 0,
    text: 'todo item 0',
    completed: false,
  },
  {
    id: 1,
    text: 'todo item 1',
    completed: false,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
        ...state,
      ];
    }
    case TOGGLE_TODO: {
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
          return { ...todoItem, completed: !todoItem.completed };
        }
        return todoItem;
      });
    }
    case REMOVE_TODO: {
      return state.filter(todoItem => todoItem.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
