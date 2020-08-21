import React, { Component } from "react";
import Notification from "./Notification";
import "../resources/css/NotificationTab.scss";

export default class NotificationTab extends Component {
  render() {
    return (
      <div className="notificationTab">
        <Notification
          class="active"
          message="You and Elon just matched."
          timestamp="1 min ago"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"
        />
        <Notification
          message="You and Elon just matched."
          timestamp="1 min ago"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"
        />
        <Notification
          message="You and Sarah just matched."
          timestamp="1 min ago"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"
        />
      </div>
    );
  }
}
