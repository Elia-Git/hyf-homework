import React, { Component } from "react";

export class TodoItem extends Component {
  // Styling part
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  // This is what we render on the browser
  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            Delete
          </button>
        </p>
      </div>
    );
  }
}
// Styling
const btnStyle = {
  background: "#717",
  color: "#fff",
  border: "none",
  padding: "1px 1.5px",
  borderRadius: "75%",
  float: "right",
};

export default TodoItem;
