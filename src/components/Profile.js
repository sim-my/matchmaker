import React, { Component } from "react";
import "../resources/css/Profile.scss";
export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__image">
        <img        
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg"
          alt=""
        />
        </div>
        <div className="profile__detail">
            <p>Elon, 24</p>
            <p>Los Angelos, CA</p>
        </div>
        <div className="profile__bio">
        <h4>About Elon</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    
       
      </div>
    );
  }
}
