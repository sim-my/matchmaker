import React from "react";
import "../resources/css/Header.scss";
import PersonIcon from "@material-ui/icons/Person";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import heartLogo from "../resources/images/heartLogo.gif";

const Header = ({ backbutton, name }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backbutton ? (
        <div className="header__withbackbutton">
          <IconButton onClick={() => history.replace(backbutton)}>
            <ArrowBackIosIcon className="header__icon" color="primary" />
          </IconButton>
          <div className="header__mid"> {name ? <h3>{name}</h3> : <img height="90px" src={heartLogo} />}</div>
        </div>
      ) : (
        <div className="header__main">
          <img height="80px" src={heartLogo} />
          <IconButton>
            <PersonIcon className="header__icon" color="primary" />
          </IconButton>
          <div className="header__widget">
            <IconButton>
              <NotificationsIcon className="header__icon" color="secondary" />
            </IconButton>
            <Link to="/chat">
              <IconButton>
                <SendSharpIcon className="header__icon" color="primary" />
              </IconButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
