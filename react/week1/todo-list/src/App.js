import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    const WhatTodo = [
      { description: "Mealsharing app", deadline: "Wed Sep 23 2020" },
      { description: "Study group", deadline: "Thu Sep 24 2020" },
      { description: "Hungout", deadline: "Fri Sep 25 2020" },
      { description: "Shopping", deadline: "Saturday Sep 26 2020" },
      { description: "React class", deadline: "Sunday Sep 27 2020" },
      { description: "Work", deadline: "Monday Sep 28 2020" },
      { description: "Covid19-test", deadline: "Tuesday Sep 29 2020" },
    ];

    return <TodoList TodoList={WhatTodo} />;
  }
}

export default App;
