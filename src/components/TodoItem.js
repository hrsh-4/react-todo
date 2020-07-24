import React from "react";
import PropTypes from "prop-types";

const buttonStyle = {
  borderRadius: "50%",
  color: "black",
  background: "red",
  padding: "2px 8px 2px 8px"
};

export default class TodoItem extends React.Component {
  mystyle = () => {
    return {
      margin: "20px 100px 20px 100px",
      background: "#beedee",
      border: "2px solid #ccaadd",
      borderRadius: "20px",
      justifyContent : "center",
      textDecoration: this.props.todo.isdone ? "line-through" : "none",
      color: this.props.todo.isdone ? "green" : "red"
    };
  };

  render() {
    const { id, title, description } = this.props.todo;
    return (
      <div style={this.mystyle()}>
        <p style={{ padding: "20px" }}>
          <input
            type="checkbox"
            onChange={this.props.markascomplete.bind(this, id)}
          />{" "}
          <h3>Title : {title} </h3> <br />
          <p>Description : {description}</p>
          <br />
          <button
            style={buttonStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            {" "}
            X{" "}
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
