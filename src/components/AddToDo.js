import React, { Component } from "react";

const formStyle = {
  margin: "20px 0px 20px 40px",
  width: "40%",
  height: "50px",
  border: "2px solid #32a879",
  borderRadius: "30px",
  padding: "10px",
  textAlign: "center"
};

const submitStyle = {
  margin: "20px 40px 20px 40px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  padding: "0",
  textAlign: "center",
  background: "#32a879",
  color: "white"
};

const descriptionStyle = {
  margin: "20px 0px 20px 40px",
  width: "60%",
  height: "200px",
  border: "2px solid #32a879",
  borderRadius: "30px",
  padding: "10px",
  // textAlign: "center"

}

export default class AddToDo extends Component {
  state = {
    title: ""
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.title,this.state.description);
    // this.props.addToDo();
    this.setState({ title: "" , description :  ""});
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            style={formStyle}
            name="title"
            type="text"
            placeholder="Add Title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <br / >
          <input
            style={descriptionStyle}
            name="description"
            type="textarea"
            placeholder="Add Description"
            value={this.state.description}
            onChange={this.onChange}
            rows = '20'
            cols = "30"
          />
          <input style={submitStyle} name="submit" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
