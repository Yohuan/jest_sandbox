import { SET_FILTER } from './actionType';

const setFilter = filterType => ({
  type: SET_FILTER,
  filterType,
});

export {
  setFilter,
};
