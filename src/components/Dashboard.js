import React, { Component } from "react";
import Header from "./Header";
import { IconButton } from "@material-ui/core";
import likeIcon from "../resources/images/likeIcon.svg";
import matchIcon from "../resources/images/matchIcon.svg";
import profileIcon from "../resources/images/searchProfileIcon.svg";
import settingsIcon from "../resources/images/profileSettingsIcon.svg";
import matchSettingsIcon from "../resources/images/matchSettings.svg";
import likedYouIcon from "../resources/images/likedYou.svg";
import "../resources/css/Dashboard.scss";
import Button from "./Button";
import SimplePopover from "./SimplePopover";
import SimpleModal from "./SimpleModal";


export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <SimpleModal/>
        <div className="dashboard__buttons">
          <div className="dashboard__button">
            <IconButton>
              <img src={likeIcon} alt="" />
            </IconButton>
            <p>Your Likes</p>
          </div>
          <div className="dashboard__button">
            <IconButton>
              <img src={matchIcon} alt="" />
            </IconButton>
            <p>Matches</p>
          </div>
          <div className="dashboard__button">
            <IconButton>
              <img src={likedYouIcon} alt="" />
            </IconButton>
            <p>Liked You</p>
          </div>
          <div className="dashboard__button">
            <IconButton>
              <img src={settingsIcon} alt="" />
            </IconButton>
            <p>Profile Settings</p>
          </div>
          <div className="dashboard__button">
            <IconButton>
              <img src={profileIcon} alt="" />
            </IconButton>
            <p>Find</p>
          </div>
          <div className="dashboard__button">
            <IconButton>
              <img src={matchSettingsIcon} alt="" />
            </IconButton>
            <p>Preferences</p>
          </div>
        </div>
        <div className="dashboard__logout">
          <Button className="dashboard__submit" buttonText="LOG OUT" />
        </div>
       <div className="dashboard__popover">         
        <SimplePopover 
            class="active"
            message="You and Elon just matched."
            timestamp="1 min ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"
          />
        <div className="dashboard__notificationCount">5</div>
       </div>
        

      </div>
    );
  }
}
