import React, { Component } from "react";
import TextBox from "./TextBox";
import "../resources/css/Register.scss";
import Button from "./Button";
import Header from "./Header";
import { Link } from "react-router-dom";
export default class Register extends Component {
  render() {
    return (
      <div className="register">
        <Header backbutton="/" />
        <div className="register__card">
          <TextBox className="register__textBox" placeholder="Full Name" />
          <TextBox className="register__textBox" placeholder="Phone Number" />
          <TextBox className="register__textBox" placeholder="Email" />
          <TextBox className="register__textBox" placeholder="Password" />
          <Button className="register__submit" buttonText="SIGN UP" />
          <h4>OR</h4>
          <Link to="/login">
            <Button className="register__submit" buttonText="LOG IN" />
          </Link>
        </div>
      </div>
    );
  }
}
