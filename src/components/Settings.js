import React, { Component } from "react";
import "../resources/css/Settings.scss";
import TextBox from "./TextBox";
//import ImageUpload from './ImageUpload';

export default class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <TextBox className="settings__textBox" placeholder="Full Name" />
        <TextBox className="settings__textBox" placeholder="Address" />
      </div>
    );
  }
}
