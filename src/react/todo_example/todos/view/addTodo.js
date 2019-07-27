import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.input = null;
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    const { input } = this;
    if (!input || !input.value.trim()) {
      return;
    }
    this.props.onAdd(input.value);
    this.input.value = '';
  }

  setInputRef = (node) => {
    this.input = node;
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" ref={this.setInputRef} />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export {
  AddTodo,
};
