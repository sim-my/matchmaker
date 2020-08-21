import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import '../resources/css/Notification.scss';

export default class Notification extends Component {
  render() {
    return (
      <div>
        <div className={this.props.class +' notification'}>
          <Avatar
            className="notification__image"
            src={this.props.profilePic}
          />
          <div className="notification__details">
            <p>{this.props.message}</p>
          </div>
          <p className="notification__timestamp">{this.props.timestamp}</p>
        </div>
      </div>
    );
  }
}
