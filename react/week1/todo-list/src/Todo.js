import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { description, deadline } = this.props;
    return (
      <p>
        {description} :{deadline}
      </p>
    );
  }
}
export default Todo;
