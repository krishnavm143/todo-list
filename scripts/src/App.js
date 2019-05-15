import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import "./App.css";
import Todo from "./Components/Todo";
import Header from "./Components/Layout/Header";
import Addtodo from "./Components/Addtodo";
// import uuid from "uuid";

import About from "./Components/About/About";
class App extends Component {
  state = {
    todo: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(res =>
      this.setState({ todo: res.data })
    );
  }
  //Toggele Completed
  markComplete = id => {
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  //delete to do
  delTodo = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/$(id)`).then(
      this.setState({
        todo: [...this.state.todo.filter(todo => todo.id !== id)]
      })
    );
    // this.setState({
    //   todo: [...this.state.todo.filter(todo => todo.id !== id)]
    // });
  };
  addtodo = title => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // };
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    }).then(res => this.setState({ todo: [...this.state.todo, res.data] }));
  };
  render() {
    console.log(this.state.todo);
    return (
      <Router>
        <div className="App" style={{ textAlign: "center" }}>
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Addtodo addtodo={this.addtodo} />
                  <Todo
                    todo={this.state.todo}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
