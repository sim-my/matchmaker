import React, { Component } from "react";
import "../resources/css/Settings.scss";
import TextBox from "./TextBox";
import CheckBox from "./CheckBox";
import NumberField from "./NumberField";
import Textarea from "./Textarea";
import Header from "./Header";
import Button from "./Button";
import SimpleModal from "./SimpleModal";
export default class Settings extends Component {
  render() {
    return (

      <div>
        <Header backbutton="/dashboard" />
        <SimpleModal/>
        <h2>Personal Settings</h2>
        <div className="settings">
          <div className="settings__item">
            <TextBox placeholder="Full Name" />
          </div>
          <div className="settings__item">
            <NumberField placeholder="My age" />
          </div>

          <div className="settings__item">
            <CheckBox type="single" label="My Gender" name="myGender" />
          </div>

          <div className="settings__item">
            <TextBox placeholder="Address" />
          </div>

          <div className="settings__item">
            <CheckBox label="Gender Preferences" name="preferredGender" />
          </div>
          <div className="settings__item">
            <Textarea placeholder="My Bio" />
          </div>
          <div className="settings__item submit__button">
            <Button buttonText="MATCH ME" />
          </div>
        </div>
      </div>
    );
  }
}
