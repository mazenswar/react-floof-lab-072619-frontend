import React, { Component } from "react";
import Form from "./Form";
import CardContainer from "./CardContainer";
import ShowDetails from "./ShowDetails";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Form />
        <CardContainer />
        <ShowDetails />
      </React.Fragment>
    );
  }
}
