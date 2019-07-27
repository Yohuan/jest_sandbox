import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setFilter } from '../action';

const _Link = (props) => {
  const style = props.active ? { backgroundColor: '#008CBA', color: 'white' } : null;

  return (
    <button
      className="filter-btn"
      onClick={props.onClick}
      style={style}
      type="button"
    >
      {props.children}
    </button>
  );
};

_Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  active: state.get('filter') === ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => { dispatch(setFilter(ownProps.filter)); },
});

const Link = connect(mapStateToProps, mapDispatchToProps)(_Link);

export {
  Link,
};
