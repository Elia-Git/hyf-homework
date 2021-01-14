import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="submit"
          className="add-btn"
          value="Add Todo"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

export default AddTodo;
