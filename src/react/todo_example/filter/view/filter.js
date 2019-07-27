import React from 'react';

import { Link as FilterLink } from './link';
import { filterType } from '../constant';

const Filter = () => (
  <p className="filter">
    <FilterLink filter={filterType.ALL}>{filterType.ALL}</FilterLink>
    <FilterLink filter={filterType.COMPLETED}>{filterType.COMPLETED}</FilterLink>
    <FilterLink filter={filterType.UNCOMPLETED}>{filterType.UNCOMPLETED}</FilterLink>
  </p>
);

export {
  Filter,
};
