import React, { Component } from "react";
import male from "../resources/images/male.svg";
import female from "../resources/images/female.svg";
import trans from "../resources/images/trans.svg";
import "../resources/css/CheckBox.scss";

export default class CheckBox extends Component {
  state = {
    gender: [
      {
        id: 1,
        value: "male",
        image: male,
      },
      {
        id: 2,
        value: "female",
        image: female,
      },
      {
        id: 3,
        value: "trans",
        image: trans,
      },
    ],
    values: [],
  };
  selectGender = (value) => {
    var push = true;
    this.state.values.forEach((el) => {
      if (this.props.type == "single") {
        document
          .querySelector("#genderItem" + el.id + this.props.name)
          .classList.remove("active");
      }
      if (el.id === value.id) {
        this.state.values.splice(this.state.values.indexOf(el), 1);
        push = false;
        document
          .querySelector("#genderItem" + value.id + this.props.name)
          .classList.remove("active");
      }
    });
    if (push === true) {
      if (this.props.type == "single") {
        this.state.values = [];
      }
      this.state.values.push(value);
      document
        .querySelector("#genderItem" + value.id + this.props.name)
        .classList.add("active");
    }
  };
  render() {
    return (
      <div className="checkBoxes">
        <label>{this.props.label}</label>
        <div name={this.props.name} className="checkBox">
          {this.state.gender.map((gen) => (
            <div
              onClick={() => this.selectGender(gen)}
              key={gen.id}
              className="genderItem"
              id={"genderItem" + gen.id + this.props.name}
            >
              <img src={gen.image} height="50px" width="50px" alt={gen.value} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
