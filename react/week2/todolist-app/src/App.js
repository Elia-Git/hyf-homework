import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import Counter from "./components/Counter";
import AddTodo from "./components/AddTodo";
import { default as UUID } from "node-uuid";

export class App extends Component {
  componentWillMount() {
    this.id = UUID.v4();
  }
  state = {
    todos: [
      { id: UUID.v4(), title: "Shopping", completed: false },
      { id: UUID.v4(), title: "Make lunch", completed: false },
      { id: UUID.v4(), title: "Lunch with Wife", completed: false },
      { id: UUID.v4(), title: "Meeting with Boss", completed: false },
    ],
  };
  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  // Add a todo
  addTodo = () => {
    const newTodo = {
      //id: 2,
      id: UUID.v4(),
      title: "Random Text",
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Counter />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
