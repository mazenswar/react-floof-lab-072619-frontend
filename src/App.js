import React, { Component } from "react";
import Form from "./Form";
import CardContainer from "./CardContainer";
import ShowDetails from "./ShowDetails";
import "./App.scss";

export default class App extends Component {
  state = {
    foxes: [],
    selectedFox: {
      name: "",
      img_url: ""
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/foxes")
      .then(r => r.json())
      .then(foxesArr => this.setState({ foxes: foxesArr }));
  }

  showFox = fox => this.setState({ selectedFox: fox });

  handleNewFox = fox => {
    fetch("http://localhost:3000/foxes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(fox)
    })
      .then(r => r.json())
      .then(foxObj => {
        this.setState({
          foxes: [foxObj, ...this.state.foxes],
          selectedFox: foxObj
        });
      });
  };

  handeEditFox = fox => {
    const addUpdatedFox = fox => {
      return this.state.foxes.map(foxObj => {
        return foxObj.id === fox.id ? fox : foxObj;
      });
    };

    fetch(`http://localhost:3000/foxes/${fox.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(fox)
    })
      .then(r => r.json())
      .then(foxObj => {
        this.setState({
          foxes: addUpdatedFox(foxObj),
          selectedFox: foxObj
        });
      });
  };

  handleChange = e =>
    this.setState({
      selectedFox: {
        ...this.state.selectedFox,
        [e.target.name]: e.target.value
      }
    });
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.selectedFox.id) {
      this.handeEditFox(this.state.selectedFox);
    } else {
      this.handleNewFox(this.state.selectedFox);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Form
          fox={this.state.selectedFox}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <CardContainer showFox={this.showFox} foxes={this.state.foxes} />
        <ShowDetails fox={this.state.selectedFox} foxToEdit={this.foxToEdit} />
      </React.Fragment>
    );
  }
}
