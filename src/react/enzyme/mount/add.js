import React from 'react';
import PropTypes from 'prop-types';

export default class Add extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleAdd = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button
          type="button"
          onClick={this.handleAdd}
        >
          Add
        </button>
      </form>
    );
  }
}
