import React, { Component } from "react";
import '../resources/css/ChooseScreen.scss';
import Button from "./Button";

export default class ChooseScreen extends Component {
  render() {
    return (
      <div className="chooseScreen">
        <div className="chooseScreen__card">
        <Button className="chooseScreen__submit" buttonText="ALREADY A MEMBER" />
        <Button className="chooseScreen__submit" buttonText="JOIN THE COMMUNITY" />
        </div>        
      </div>
    );
  }
}
