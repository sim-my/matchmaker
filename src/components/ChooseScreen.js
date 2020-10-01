import React, { Component } from "react";
import "../resources/css/ChooseScreen.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

export default class ChooseScreen extends Component {
  render() {
    return (
      <div className="chooseScreen">
        <div className="chooseScreen__card">
          <Link to="/login">
            {" "}
            <Button
              className="chooseScreen__submit"
              buttonText="ALREADY A MEMBER"
            />
          </Link>
          <Link to="/register">
          <Button
            className="chooseScreen__submit"
            buttonText="JOIN THE COMMUNITY"
          />
          </Link>
          
        </div>
      </div>
    );
  }
}
