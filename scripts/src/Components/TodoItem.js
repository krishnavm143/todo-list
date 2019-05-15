import React, { Component } from "react";

class TodoItem extends Component {
  getStyle() {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      //color: this.props.todo.completed ? "maroon" : "none",
      border: "2px solid grey",
      padding: "2px",
      spacing: "5px"
    };
  }
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            style={this.btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
  btnStyle = {
    background: "maroon",
    color: "black",
    padding: "5px 8px",
    cursor: "pointer",
    float: "right"
  };
}

export default TodoItem;
