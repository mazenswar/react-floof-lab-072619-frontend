import React, { Component } from "react";
import Card from "./Card";

export default class CardContainer extends Component {
  generateCards = () => {
    const { foxes, showFox } = this.props;
    return foxes.map(fox => <Card key={fox.id} showFox={showFox} fox={fox} />);
  };

  render() {
    return <div className="card-container">{this.generateCards()}</div>;
  }
}
