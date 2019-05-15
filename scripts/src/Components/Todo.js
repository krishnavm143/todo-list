import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
class Todo extends Component {
  render() {
    return this.props.todo.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        delTodo={this.props.delTodo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}
//Proptype
Todo.propTypes = {
  todo: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deltodo: PropTypes.array.isRequired
};
export default Todo;
