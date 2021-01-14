import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const details = this.props.TodoList.map((props) => (
      <Todo description={props.description} deadline={props.deadline} />
    ));

    return (
      <div>
        <h1>My Todo List</h1>
        <div>{details}</div>
      </div>
    );
  }
}

export default TodoList;
