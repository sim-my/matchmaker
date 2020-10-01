import React, { Component } from "react";
import "../resources/css/PersonPage.scss";
import ReplayIcon from "@material-ui/icons/Replay";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";
export default class PersonPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: false,
    };
  }
  render() {
    return (
      <div className="person">
        <div className="person__image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"
            alt=""
          />
        </div>
        <div className="person__detail">
          <p>Elon, 24</p>
          <p>Los Angelos, CA</p>
        </div>
        <div className="person__bio">
          <h4>About Elon</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {this.state.match ? (
          <div className="personButtons">
            <IconButton className="personButtons__button --chat">
              <ChatIcon fontSize="large" />
            </IconButton>
          </div>
        ) : (
          <div className="personButtons">
            {" "}
            <IconButton className="personButtons__button --dislike">
              <ThumbDownAltIcon fontSize="large" />
            </IconButton>
            <IconButton className="personButtons__button --undo">
              <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="personButtons__button --like">
              <ThumbUpAltIcon fontSize="large" />
            </IconButton>{" "}
          </div>
        )}
      </div>
    );
  }
}
