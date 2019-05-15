import React, { Component } from "react";
import PropTypes from "prop-types";
class Addtodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addtodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
//Proptype
Addtodo.propTypes = {
  Addtodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired
  //deltodo: PropTypes.array.isRequired
};
export default Addtodo;
