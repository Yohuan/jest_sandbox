import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const List = ({ data }) => (
  <table className="myClass">
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        // eslint-disable-next-line
        <tr key={index}>
          <td>
            {item}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

List.propTypes = propTypes;

export default List;
