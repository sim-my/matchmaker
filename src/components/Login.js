import React, { Component } from "react";
import TextBox from "./TextBox";
import "../resources/css/Login.scss";
import Button from "./Button";
import { Link } from "react-router-dom";
import Header from "./Header";
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Header backbutton="/" />
        <div className="login__card">
          <TextBox
            className="login__textBox"
            placeholder="Email or phonenumber"
          />
          <TextBox className="login__textBox" placeholder="Password" />
          <Button className="login__submit" buttonText="LOG IN" />
          <h4>OR</h4>
          <Link to="/register">
            <Button className="login__submit" buttonText="SIGN UP" />
          </Link>
        </div>
      </div>
    );
  }
}
