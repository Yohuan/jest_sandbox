import { SET_FILTER } from './actionType';
import { filterType } from './constant';

export default (state = filterType.ALL, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.filterType;
    }
    default: {
      return state;
    }
  }
};
