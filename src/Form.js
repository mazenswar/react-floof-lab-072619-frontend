import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h5>Add/Edit floooof</h5>
        <input
          type="text"
          name="name"
          value={this.props.fox.name}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          name="img_url"
          value={this.props.fox.img_url}
          onChange={this.props.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
